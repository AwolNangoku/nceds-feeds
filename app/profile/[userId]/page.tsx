import Link from "next/link";
import { Suspense } from "react";
import { Posts, ProfileCard, Spacer } from "@/components";
import ProfileCardSkeleton from "@/components/profile-card/profile-card-skeleton";

export default async function Profile({ params }: { params: { userId: string } }) {
  const { userId } = params;
  const userPosts = await fetch(`https://dummyjson.com/posts/user/${userId}`).then(res => res.json())

  return (
    <div className="grid grid-cols-1 gap-4 bg-white">
      <div className="flex justify-between h-[56px]">
        <div className="flex justify-center bg-white w-full border-b-[1px] border-slate-15 py-[12px] px-[8px]">
          <div className="flex justify-start h-[12px]">
            <Link href='/'>
              <div className="flex justify-center font-extrabold text-black w-[32px] h-[32px]">
                {"<"}
              </div>
            </Link>
          </div>
          <h3 className="font-extrabold text-[18px] text-black">Profile</h3>
        </div>
      </div>

      <Spacer size="10px" />

      <div className="grid grid-cols-1 gap-4 justify-center">
        <div className="flex justify-center">
          <Suspense fallback={<ProfileCardSkeleton />}>
            <ProfileCard userId={userId} />
          </Suspense>
        </div>

        <Spacer size="20px" />

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-4 w-[668px]">
            <h3 className="font-extrabold text-[24px] text-black p-[15px]">Recent</h3>
            <Suspense fallback={<div>Loading recent user posts...</div>}>
              <Posts posts={userPosts.posts} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
