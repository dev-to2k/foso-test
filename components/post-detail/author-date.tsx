import Image from "next/image";

export default function AuthorDate() {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-6">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 shadow-sm border border-gray-100">
          <span>F</span>
        </div>
        <div>
          <p className="text-xs sm:text-sm text-[#667F93]">Tác giả</p>
          <p className="font-bold text-[#33404A] text-sm sm:text-base">
            FOSO Creator
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 sm:ml-auto">
        <div className="text-sm sm:text-base text-[#667F93] font-medium">
          <p className="flex items-center">
            <Image
              src={"/icons/calendar.svg"}
              width={16}
              height={16}
              alt="calendar"
              className="mr-2"
            />
            Cập nhật vào: 17/11/2022
          </p>
        </div>

        <div className="text-sm sm:text-base text-[#667F93] font-medium">
          <p className="flex items-center">
            <Image
              src={"/icons/clock.svg"}
              width={16}
              height={16}
              alt="clock"
              className="mr-2"
            />
            10 phút đọc
          </p>
        </div>
      </div>
    </div>
  );
}
