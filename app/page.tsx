import { Avatar, Posts, Spacer } from "@/components";
import { Post } from "@/components/posts";
import PostsSkeleton from "@/components/posts/posts-skeleton";
import Link from "next/link";
import { Suspense } from "react";

type TPost = {
  posts: Post[],
  total: number,
  skip: number,
  limit: number
}
type UserPost = { [key: string]: TPost }

export default async function Feeds() {
  const { posts } = await fetch('https://dummyjson.com/posts?limit=10')
  .then(res => res.json())

  const sortedByLikes = (posts ?? []).sort((a: Post, b: Post) => {
    if (a?.reactions?.likes > b?.reactions?.likes) return -1
    if (a?.reactions?.likes < b?.reactions?.likes) return 1
    return 0
  })

  const suggestedPosts = (sortedByLikes ?? []).slice(0, 2)

  const usersPosts = await Promise.all((posts ?? []).map(async (post: Post) => {
    const userPosts = await fetch(`https://dummyjson.com/posts/user/${post.userId}`).then(res => res.json())
    return {[post.userId]: userPosts}
  }))

  const  sortedByPosts = usersPosts.sort((userAPosts: UserPost, userBPosts: UserPost) => {
    const userATotalPosts = Object.values(userAPosts)[0].total
    const userBTotalPosts = Object.values(userBPosts)[0].total

    if (userATotalPosts > userBTotalPosts) return -1
    if (userATotalPosts < userBTotalPosts) return 1
    return 0
  }).slice(0, 4)
  
  const toFollowUsers = await Promise.all((sortedByPosts ?? []).map(async (toFollowUser: UserPost) => {
    const userId = Object.keys(toFollowUser)[0]
    const userToFollow = await fetch(`https://dummyjson.com/users/${userId}`).then(res => res.json())
    return {
      userId,
      fullName: `${userToFollow.firstName} ${userToFollow.lastName}`,
      username: `@${userToFollow.username}`,
    }
  }))

  return (
    <div className="w-full h-full bg-white">
      <div className="flex justify-center bg-white w-full border-b-[1px] border-slate-15 py-[12px] px-[8px]">
        <h3 className="font-extrabold text-[18px] text-black">Feed</h3>
      </div>

      <div className="flex justify-center py-[32px] px-[16px]">
        <div className="flex flex-col space-y-8 justify-start w-[700px]">
          <h3 className="font-extrabold text-[24px] text-black">Suggested posts</h3>

          <div className="flex flex-col space-y-8">
            <Suspense fallback={<PostsSkeleton posts={[0, 1]} />} >
              <Posts posts={suggestedPosts as Post[]} />
            </Suspense>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col justify-start">
          <h3 className="font-extrabold text-[24px] leading-[24px] text-black">Who to follow</h3>
          <Spacer py="16px" />

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {toFollowUsers.map((toFollowUser: { userId: string, fullName: string, username: string}) => {
              return (
                <div key={toFollowUser.userId} className="flex justify-start rounded-lg border-[1px] border-slate-15">
                  <div className="flex justify-between items-center">
                    <div className="flex justify-start items-center">
                      <Avatar userId={toFollowUser.userId} />
                      <Link href={`/profile/${toFollowUser.userId}`}>
                        <div className="flex flex-col">
                          <div className="text-black">{`${toFollowUser.fullName}`}</div>
                          <div className="text-black">{`${toFollowUser.username}`}</div>
                        </div>
                      </Link>
                    </div>

                    <Spacer px="16px" />

                    <div className="flex justify-center">
                      <button className="w-[78px] h-[35px] rounded-full text-[#4426D9] border-[1px] border-[#4426D9] hover:bg-gradient-to-r hover:bg-[#ECE9FB]">Follow</button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <Spacer py="16px" />

      <div className="flex justify-center border-b-[1px] border-slate-15">
        <div className="flex flex-col space-y-8 justify-start w-[700px]">
          <h3 className="font-extrabold text-[24px] text-black">Recent</h3>

          <div className="grid grid-cols-1 gap-4 justify-center">
            <Suspense fallback={<PostsSkeleton posts={[0, 1, 2, 3, 4, 5, 6]} />} >
              <Posts posts={posts as Post[]} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
