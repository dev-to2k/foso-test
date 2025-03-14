import Button from "../ui/button";

export default function SocialSticky() {
  return (
    <div className="sticky top-20 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-extrabold">Nội Dung Bài Viết</h3>
        <Button className="text-green-500 hover:bg-transparent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Button>
      </div>

      <ul className="space-y-4 font-medium text-[#33404A] text-lg">
        <li>
          <a href="#" className="text-green-600 hover:underline">
            1. Quy trình 5S là gì?
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            2. Lợi ích quy trình 5S đem lại
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
          </a>
        </li>
        <li className="pl-4">
          <a href="#" className="hover:text-green-600">
            3.1 Cải thiện ổn định môi trường làm việc
          </a>
        </li>
        <li className="pl-4">
          <a href="#" className="hover:text-green-600">
            3.2 Tiết kiệm thời gian dùng vật liệu
          </a>
        </li>
        <li className="pl-4">
          <a href="#" className="hover:text-green-600">
            3.3 Tăng năng suất làm việc
          </a>
        </li>
        <li className="pl-4">
          <a href="#" className="hover:text-green-600">
            3.4 Tiết kiệm chi phí
          </a>
        </li>
        <li className="pl-4">
          <a href="#" className="hover:text-green-600">
            3.5 Tăng chất lượng sản phẩm
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            4. Quy trình 5S gồm các bước:
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            5. Quy trình được thực hiện như sau:
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            6. Quy trình 5S có giống với Kaizen?
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            7. Đối tượng nào nên áp dụng 5S?
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-green-600">
            8. Các yếu tố lưu ý nên tham công cho quy trình 5S
          </a>
        </li>
      </ul>
    </div>
  );
}
