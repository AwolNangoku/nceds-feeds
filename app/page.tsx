import { Suspense } from "react";

import Image from 'next/image'
import avatar from "@/public/avatar.png";
import { UserInfo } from "@/components";

export default async function Feeds() {
  const { posts } = await fetch('https://dummyjson.com/posts')
  .then(res => res.json())

  return (
    <div className="w-full h-full bg-white">
      <div className="flex justify-center bg-white w-full border-b-[1px] border-slate-15 py-[12px] px-[8px]">
        <h3 className="font-extrabold text-[18px] text-black">Feed</h3>
      </div>

      <div className="flex justify-center border-b-[1px] border-slate-15 py-[32px] px-[16px]">
        <div className="flex flex-col space-y-8 justify-base w-[700px]">
          <h3 className="font-extrabold text-[24px] text-black">Suggested posts</h3>

          <div className="flex flex-col space-y-8">
            {posts.map((post) => (
              <div className="flex flex-col  border-[1px] border-slate-15 rounded-lg space-y-4">
                <div className="flex justify-base space-x-4 border-b-[1px] border-slate-15">
                  <div className="rounded-full" >
                    <Image
                      className="bg-gray-300"
                      src={avatar}
                      width={0}
                      height={0}
                      alt="Picture of the author"
                    />
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

                <div className="flex space-x-4">
                  <div className="text-black">Like</div>
                  <div className="text-black">Comment</div>
                  <div className="text-black">Share</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
