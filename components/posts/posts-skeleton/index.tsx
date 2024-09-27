'use client';

import Spacer from "@/components/spacer";
import UserInfoSkeleton from "@/components/user-info/user-info-skeleton";

const PostsSkeleton = ({ posts }: { posts: number[] }) => {
  return (posts).map((post) => (
    <div key={post} className="w-[343px] md:w-[668px] border-[1px] border-[#E4E7E8] rounded-lg p-[15px]">
      <div className="flex justify-center items-center">
      <div className="animate-pulse flex flex-col">
        <div className="w-[80px] h-[80px] rounded-full bg-slate-100"></div>
      </div>
        

        <div className="flex flex-col w-[584px]">
          <UserInfoSkeleton />
          <Spacer py="4px" />
          <div className="animate-pulse flex flex-col">
            <div className="font-medium text-[14px] leading-[16.41px] text-[#5C6970] bg-slate-100"></div>
          </div>
          <div className="font-medium text-[14px] leading-[16.41px] text-[#5C6970] bg-slate-100"></div>
          <Spacer py="12px" />
          <div className="animate-pulse flex flex-col">
            <div className="flex justfy-between space-x-2">
              {[0, 1, 3].map((tag) => (
                <div key={tag} className="cursor-pointer text-[#4426D9] font-medium text-[12px] leading-[14.06px] bg-slate-100"></div>
              ))}
            </div>
          </div>
         
          <Spacer py="12px" />
        </div>
      </div>
      <div className="animate-pulse flex flex-col">
        <div className="flex space-x-4 border-t-[1px] border-[#E4E7E8] p-[5px] bg-slate-100">
          <div className="flex">
            <div className="text-[#5C6970]"></div>
          </div>

          <div className="flex">
            <div className="text-[#5C6970]"></div>
          </div>

          <div className="flex">
            <div className="text-[#5C6970]"></div>
          </div>
        </div>
      </div>
    </div>
  ))
}
export default PostsSkeleton;