import { Dropdown } from "@/components/dropdown";
import Button from "@/components/ui/button";
import Image from "next/image";

export default function SwitchLanguageCTA() {
  return (
    <div className="hidden md:flex items-center space-x-4 ml-auto mr-4 lg:mr-0">
      <Dropdown>
        <Dropdown.Trigger className="bg-gray-100 text-gray-800 hover:bg-gray-200 flex items-center gap-2 px-3 py-2 rounded-[40px]">
          <Image
            src="/icons/icon_country.svg" // Đường dẫn đến hình ảnh lá cờ
            alt="Vietnamese"
            width={20}
            height={15}
            className="w-5 h-3.5 rounded-sm"
          />
          VI
        </Dropdown.Trigger>

        <Dropdown.Content className="right-0 min-w-[200px]">
          <Dropdown.Item className="flex items-center">
            <Image
              src="/icons/icon_country.svg"
              alt="English"
              width={20}
              height={15}
              className="w-5 h-3.5 mr-2 rounded-sm"
            />
            <span className="flex-1">EN - English</span>
          </Dropdown.Item>
          <Dropdown.Item className="flex items-center">
            <Image
              src="/icons/icon_country.svg"
              alt="Vietnamese"
              width={20}
              height={15}
              className="w-5 h-3.5 mr-2 rounded-sm"
            />
            <span className="flex-1">VI - Tiếng Việt</span>
          </Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
      <Button
        variant="fill"
        className="btn-primary font-bold"
        icon={
          <Image
            src="/icons/arrow-up-right.svg"
            width={14}
            height={14}
            alt="arrow-up-right-icon"
          />
        }
        iconPosition="right"
      >
        Trở thành khách hàng
      </Button>
    </div>
  );
}
