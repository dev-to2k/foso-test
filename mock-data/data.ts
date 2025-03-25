import { ICategory } from "@/interfaces/category";
import { IPost } from "@/interfaces/post";

export const dummyPosts: IPost[] = [
  {
    id: "1",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Quy trình 5S là gì?",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "2",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Làm thế nào để tối ưu hóa quy trình sản xuất?",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "3",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Các bước xây dựng BOM hiệu quả",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "4",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Ứng dụng công nghệ trong quản lý sản xuất",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "5",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Những sai lầm phổ biến khi quản lý BOM",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "6",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Tầm quan trọng của dữ liệu chính xác trong sản xuất",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "7",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Cách cải thiện hiệu suất sản xuất với BOM",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "8",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Quản lý sản xuất thông minh với công nghệ mới",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "9",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Lợi ích của việc sử dụng phần mềm quản lý sản xuất",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
  {
    id: "10",
    image: "/images/post-image.png",
    tag: "Quản lý Sản xuất",
    title: "Những xu hướng mới trong quản lý sản xuất",
    createdDate: "17/11/2022",
    timeReading: 10,
  },
];

export const dummyCategories: ICategory[] = [
  {
    label: "Tất cả",
    amount: 108,
  },
  {
    label: "Thiết Kế Website",
    amount: 36,
  },
  {
    label: "Thiết Kế App Mobile",
    amount: 13,
  },
  {
    label: "Quản Lý Sản Xuất",
    amount: 25,
  },
  {
    label: "Quản Lý Bán Hàng",
    amount: 22,
  },
  {
    label: "Báo Chí Nói Về FOSO",
    amount: 7,
  },
  {
    label: "Tin Tức FOSO",
    amount: 5,
  },
];

export const listBreadcrumb = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
