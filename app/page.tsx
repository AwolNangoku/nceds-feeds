import { Posts } from "@/components";
import { Post } from "@/components/posts";

export default async function Feeds() {
  const { posts } = await fetch('https://dummyjson.com/posts')
  .then(res => res.json())

  return (
    <div className="w-full h-full bg-white">
      <div className="flex justify-center bg-white w-full border-b-[1px] border-slate-15 py-[12px] px-[8px]">
        <h3 className="font-extrabold text-[18px] text-black">Feed</h3>
      </div>

      <div className="flex justify-center border-b-[1px] border-slate-15 py-[32px] px-[16px]">
        <div className="flex flex-col space-y-8 justify-start w-[700px]">
          <h3 className="font-extrabold text-[24px] text-black">Suggested posts</h3>

          <div className="flex flex-col space-y-8">
            <Posts posts={posts as Post[]} />
          </div>
        </div>
      </div>
    </div>
  );
}
