"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Accounting Advisory", path: "/services/accounting-advisory", indent: true },
  { name: "Audit Advisory & Compliance Assurance", path: "/services/audit-assurance", indent: true },
  { name: "Financial Reporting & Compliance", path: "/services/financial-reporting", indent: true },
  { name: "Corporate Advisory", path: "/services/corporate-advisory", indent: true },
  { name: "Enterprise Resource Planning (ERP)", path: "/services/erp", indent: true },
  { name: "Tax Advisory", path: "/services/tax-advisory", indent: true },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

interface MobileNavigationProps {
  open: boolean;
  handleOpen: () => void;
}

export default function MobileNavigation({ open = false, handleOpen }: MobileNavigationProps) {
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "fixed top-[10dvh] right-0 w-full h-[90dvh] bg-[#070707] p-[20px] md:px-[72px] text-white z-20 transition-transform duration-500 lg:hidden",
        open ? "translate-x-0" : "translate-x-full"
      )}
    >
      {open && (
        <>
          <div className="w-[400px] md:w-[1453.467px] h-[300px] md:h-[1367px] rounded-[400px] md:rounded-[1453.467px] bg-[#873AE3] blur-[50px] md:blur-[150px] z-1 absolute left-[-100%] md:left-0 top-[95%]" />
          <div className="w-[400px] md:w-[1537.615px] h-[300px] md:h-[1444px] rounded-[400px] md:rounded-[1537.615px] bg-[#F2B611] blur-[50px] md:blur-[180px] z-1 absolute left-[-290%] md:left-[-90%] top-[95%]" />
        </>
      )}

      <nav className="space-y-[40px] flex flex-col z-10">
        {navItems.map((item, index) => {
          const isActive = pathname === item.path;
          const isIndented = 'indent' in item && item.indent;
          return (
            <Link
              key={`${item.path}-${index}`}
              href={item.path}
              onClick={handleOpen}
              className={clsx(
                "cursor-pointer transition-all",
                isActive ? "text-[18px] font-bold text-white" : "text-[16px] font-normal text-[#B4B4B4]",
                "hover:text-white hover:font-bold",
                isIndented && "pl-[24px] text-[14px]"
              )}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
