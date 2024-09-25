import Link from "next/link";
import back from "@/public/back.png";
import Image from "next/image";

export default async function Profile({ params }: { params: { userId: string } }) {

  console.log(params);
  return (
    <div className="w-full h-full bg-white">
      <div className="flex justify-between">
        <div className="flex justify-base pl-5 pt-5">
          <Link href='/'>
            <Image
              className="bg-gray-300"
              src={back}
              width={0}
              height={0}
              alt="Picture of the author"
            />
          </Link>
        </div>
        <div className="flex justify-center bg-white w-full border-b-[1px] border-slate-15 py-[12px] px-[8px]">
          <h3 className="font-extrabold text-[18px] text-black">Profile</h3>
        </div>
      </div>
    </div>
  );
}
