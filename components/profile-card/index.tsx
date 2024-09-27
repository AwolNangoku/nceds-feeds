import Image from "next/image"
import avatar from "@/public/avatar.png"
import location from "@/public/location.png"
import { Post } from "@/components/posts"

async function ProfileCard({ userId }: { userId: string }) {
  const user = await fetch(`https://dummyjson.com/users/${userId}`).then(res => res.json())
  const userPosts = await fetch(`https://dummyjson.com/posts/user/${userId}`).then(res => res.json())

  return (
    <div className="w-[668px] h-[340px] flex flex-col justify-center border-[1px] border-slate-15 rounded-lg p-[20px] space-y-4">
      <div className="flex space-x-4">
        <div className="w-[120px] h-[120px]">
          <Image
            src={avatar}
            width={0}
            height={0}
            alt="Picture of the author"
          />
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col space-y-2">
              <div className="text-black font-extrabold text-[30px] leading-[30px]">{`${user?.firstName} ${user?.lastName}`}</div>
              <div className="flex justify-center space-x-2">
                <div className="text-[#5C6970] text-[16px] font-medium leading-[18.75px]">{`@${user?.username}`}</div>
                <div className="flex justify-center">
                  <div className="w-[16px] h-[16px]">
                    <Image
                      src={location}
                      width={0}
                      height={0}
                      alt="Picture of the location"
                    />
                  </div>
                  <div className="text-[#5C6970] text-[16px] font-medium leading-[18.75px]">{`${user?.address?.city}, ${user?.address?.country}`}</div>
                </div>
              </div>
            </div>

            <div className="px-[12px] py-[6px] bg-[#E5F4FF] rounded-xl">
              <div className="font-extrabold font-base leading-4 text-[#0077CC]">
                {user?.company?.title}
              </div>
            </div>
          </div>

          <div className="flex justify-start w-[146px] h-[40px]">
            <div className="flex flex-col justify-center w-[49px] h-[40px]">
              <div className="flex font-extrabold text-black text-[24px] leading-[24px]">
                {userPosts.total}
              </div>
              <div className="font-medium text-[12px] leading-[14.06px]">
                POSTS
              </div>
            </div>

            <div className="flex flex-col justify-center w-[73px] h-[40px]">
              <div className="flex font-extrabold text-black text-[24px] leading-[24px]">
                {(() => {
                  const posts = userPosts.posts
                  const totalLikes = (posts ?? []).reduce((acc: number, post: Post) => acc + post.reactions.likes, 0)
                  return totalLikes
                })()}
              </div>
              <div className="font-medium text-[12px] leading-[14.06px]">
                LIKES
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-start border-t-[1px] border-slate-15 px-[24px] py-[16px] space-x-4">
        <button className="w-[78px] h-[35px] rounded-full bg-gradient-to-r from-[#4426D9] to-blue-[#811AB8] hover:bg-[#811AB8]">Follow</button>
        <button className="w-[78px] h-[35px] rounded-full text-[#4426D9] border-[1px] border-[#4426D9] hover:bg-gradient-to-r hover:bg-[#ECE9FB]">Message</button>
      </div>
    </div>
  )
}
export default ProfileCard;