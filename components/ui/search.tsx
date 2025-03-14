import Button from "./button";

export default function Search() {
  return (
    <div className="relative h-[72px]">
      <input
        type="text"
        placeholder="Tìm kiếm bài viết..."
        className="w-full h-full py-3 pr-16 pl-6 rounded-xl custom-shadow focus:outline-none caret-[#ACB3C7]"
      />
      <Button
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl p-3 btn-primary text-white"
        variant="fill"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </Button>
    </div>
  );
}
