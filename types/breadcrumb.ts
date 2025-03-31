export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type NavigationItem = {
  label: string;
  path: string;
  children?: Record<string, NavigationItem>;
};

export type NavigationMap = Record<string, NavigationItem>;
