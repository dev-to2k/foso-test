import { NavigationMap } from "@/types/breadcrumb";

export const navigationMap: NavigationMap = {
  about: {
    label: "Về chúng tôi",
    path: "/chung-toi",
  },
  solutions: {
    label: "Giải pháp",
    path: "/giai-phap",
    children: {
      "solution-1": { label: "Giải pháp 1", path: "/giai-phap/solution-1" },
      "solution-2": { label: "Giải pháp 2", path: "/giai-phap/solution-2" },
      "solution-3": { label: "Giải pháp 3", path: "/giai-phap/solution-3" },
    },
  },
  resources: {
    label: "Tài nguyên",
    path: "/tai-nguyen",
    children: {
      docs: { label: "Tài liệu hướng dẫn", path: "/tai-nguyen/docs" },
      blog: { label: "Blog", path: "/tai-nguyen/blog" },
      "case-study": { label: "Case study", path: "/tai-nguyen/case-study" },
    },
  },
  contact: {
    label: "Liên hệ",
    path: "/lien-he",
  },
};
