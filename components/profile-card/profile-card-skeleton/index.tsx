'use client';

const ProfileCardSkeleton = () => {
  return (
    <div className="animate-pulse flex space-x-4">
      <div className="w-[668px] h-[340px] flex flex-col justify-center border-[1px] rounded-lg bg-slate-300 p-[20px] space-y-4">
        <div className="flex space-x-4">
          <div className="w-[120px] h-[120px] rounded-full bg-slate-100"></div>

          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col space-y-2">
                <div className="text-black font-extrabold text-[30px] leading-[30px]"></div>
                <div className="flex justify-center space-x-2 bg-slate-100">
                  <div className="text-[#5C6970] text-[16px] font-medium leading-[18.75px]"></div>
                  <div className="flex justify-center">
                    <div className="w-[16px] h-[16px] rounded-full"></div>
                    <div className="text-[#5C6970] text-[16px] font-medium leading-[18.75px]"></div>
                  </div>
                </div>
              </div>

              <div className="px-[12px] py-[6px] bg-[#E5F4FF] rounded-xl bg-slate-100">
                <div className="font-extrabold font-base leading-4 text-[#0077CC]"></div>
              </div>
            </div>

            <div className="flex justify-start w-[146px] h-[40px] bg-slate-100">
              <div className="flex flex-col justify-center w-[49px] h-[40px]">
                <div className="flex font-extrabold text-black text-[24px] leading-[24px]"></div>
                <div className="font-medium text-[12px] leading-[14.06px]"></div>
              </div>

              <div className="flex flex-col justify-center w-[73px] h-[40px]">
                <div className="flex font-extrabold text-black text-[24px] leading-[24px]"></div>
                <div className="font-medium text-[12px] leading-[14.06px]"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-start border-t-[1px] border-slate-15 px-[24px] py-[16px] space-x-4">
          <button className="w-[78px] h-[35px] rounded-full bg-slate-100"></button>
          <button className="w-[78px] h-[35px] rounded-full bg-slate-100"></button>
        </div>
      </div>
    </div>
  )
}
export default ProfileCardSkeleton;