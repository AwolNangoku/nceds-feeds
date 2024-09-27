'use client';

import Link from "next/link";

const Avatar =({ userId }: {userId: string}) => {
  return (
    <div className="w-[40px] h-[40px] md:w-[120px] md:h-[120px]">
      <Link href={`/profile/${userId}`}>
        <div className="w-full h-full bg-no-repeat bg-center bg-avatar_feeds rounded-full" />
      </Link>
    </div>
  )
}
export default Avatar;