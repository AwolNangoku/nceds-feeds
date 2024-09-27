import Link from "next/link";

async function UserInfo({ userId }: { userId: string }) {
  const user = await fetch(`https://dummyjson.com/users/${userId}`)
  .then(res => res.json())
 
  return (
    <Link href={`/profile/${userId}`}>
      <div className="md:w-[584px] md:h-[42px] px-[0px] py-[4px]">
        <h3 className="font-extrabold text-[16px] leading-[16px] text-black">
          {`${user.firstName} ${user.lastName}`}
        </h3>
        <h2 className="font-medium text-[12px] leading-[14.06px] text-[#5C6970]">
          {`@${user.username}`}
          </h2>
        </div>
    </Link>
  )
}
export default UserInfo;