'use client';

const UserInfoSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-col">
      <div className="w-[584px] h-[42px] flex flex-col bg-slate-700 space-y-4">
        <div className="w-[100px] h-[20px] bg-slate-500"></div>
        <div className="w-[50px] h-[20px] bg-slate-500"></div>
      </div>
    </div>
  )
}
export default UserInfoSkeleton;