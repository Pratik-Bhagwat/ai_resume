import type { LucideProps } from "lucide-react";

type NavItemT = {
  name: string;
  href: string;
  icon?: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
};

const navItems: NavItemT[] = [
  {
    name: "Benifits",
    href: "",
  },
  {
    name: "About",
    href: "",
  },
  {
    name: "Pricing",
    href: "",
  },
];

export { navItems };
