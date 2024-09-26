import Link from "next/link";
import { Suspense } from "react";
import { ProfileCard } from "@/components";
import ProfileCardSkeleton from "@/components/profile-card/profile-card-skeleton";

export default async function Profile({ params }: { params: { userId: string } }) {
  const { userId } = params;

  return (
    <div className="w-full h-screen bg-white">
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

      <div className="w-full h-full flex justify-center px-[16px] py-[32px]">
        <Suspense fallback={<ProfileCardSkeleton />}>
          <ProfileCard userId={userId} />
        </Suspense>
      </div>
    </div>
  );
}
