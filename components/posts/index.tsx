import { Suspense } from "react";
import Image from 'next/image'
import avatar from "@/public/avatar.png";
import like from "@/public/like.png";
import dislike from "@/public/dislike.png";
import eye from "@/public/eye.png";
import UserInfo from "../user-info";
import Link from "next/link";

export type Post = {
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
  return posts.map((post) => (
    <div className="flex flex-col  border-[1px] border-slate-15 rounded-lg space-y-4">
      <div className="flex justify-base space-x-4 border-b-[1px] border-slate-15">
        <div className="rounded-full" >
          <Link href={`/profile/${post.userId}`}>
            <Image
              className="bg-gray-300"
              src={avatar}
              width={0}
              height={0}
              alt="Picture of the author"
            />
          </Link>
        </div>

        <div className="flex flex-col space-y-2">
          <Suspense fallback={<div className="text-black">Loading user...</div>}>
            <UserInfo userId={post.userId} />
          </Suspense>
          <div className="text-black">{post.body}</div>
          <div className="flex space-x-4 justfy-between">
            {post.tags.map((tag) => (
              <div className="text-[#4426D9] text-[12px] font-medium">#{tag}</div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex space-x-4 p-4">
        <div className="flex space-x-2">
          <Image
            src={like}
            width={0}
            height={0}
            alt="Like"
          />
          <div className="text-black">{post.reactions.likes}</div>
        </div>
        <div className="flex space-x-2">
          <Image
            src={dislike}
            width={0}
            height={0}
            alt="Dislike"
          />
          <div className="text-black">{post.reactions.dislikes}</div>
        </div>
        <div className="flex space-x-2">
          <Image
            src={eye}
            width={0}
            height={0}
            alt="Eye"
          />
          <div className="text-black">{post.views}</div>
        </div>
      </div>
    </div>
  ))
}
export default Posts;