import { Suspense } from "react";
import Image from 'next/image'
import like from "@/public/like.png";
import dislike from "@/public/dislike.png";
import eye from "@/public/eye.png";
import UserInfo from "../user-info";
import UserInfoSkeleton from "../user-info/user-info-skeleton";
import Spacer from "../spacer";
import Avatar from "../avatar";

export type Post = {
  id: number
  userId: string;
  body: string;
  tags: string[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
}

async function Posts({ posts }: { posts: Post[] }) {
  return (posts ?? []).map((post) => (
    <div key={post.id} className="w-[343px] md:w-[668px] border-[1px] border-[#E4E7E8] rounded-lg p-[15px]">
      <div className="flex justify-center items-center">
        <Avatar userId={post.userId} />

        <div className="flex flex-col w-[584px]">
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfo userId={post.userId} />
          </Suspense>
          <Spacer py="4px" />
          <div className="font-medium text-[14px] leading-[16.41px] text-[#5C6970]">{post.body}</div>
          <Spacer py="12px" />
          <div className="flex justfy-between space-x-2">
            {post.tags.map((tag) => (
              <div key={tag} className="cursor-pointer text-[#4426D9] font-medium text-[12px] leading-[14.06px]">#{tag}</div>
            ))}
          </div>
          <Spacer py="12px" />
        </div>
      </div>

      <div className="flex space-x-4 border-t-[1px] border-[#E4E7E8] p-[5px]">
        <div className="flex">
          <Image
            src={like}
            width={0}
            height={0}
            alt="Like"
          />
          <div className="text-[#5C6970]">{post.reactions.likes}</div>
        </div>

        <div className="flex">
          <Image
            src={dislike}
            width={0}
            height={0}
            alt="Dislike"
          />
          <div className="text-[#5C6970]">{post.reactions.dislikes}</div>
        </div>

        <div className="flex">
          <Image
            src={eye}
            width={0}
            height={0}
            alt="Eye"
          />
          <div className="text-[#5C6970]">{post.views}</div>
        </div>
      </div>
    </div>
  ))
}
export default Posts;