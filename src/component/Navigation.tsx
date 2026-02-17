"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Accounting Advisory", path: "/services/accounting-advisory" },
      { name: "Audit Advisory & Compliance Assurance", path: "/services/audit-assurance" },
      { name: "Tax Advisory", path: "/services/tax-advisory" },
      { name: "Financial Reporting & Compliance", path: "/services/financial-reporting" },
      { name: "Corporate Advisory", path: "/services/corporate-advisory" },
      { name: "Enterprise Resource Planning (ERP)", path: "/services/erp" },
    ]
  },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="space-x-[40px] hidden lg:flex">
      {navItems.map((item, index) => {
        const isActive = pathname === item.path || (item.dropdown && item.dropdown.some(sub => pathname === sub.path));

        // If item has dropdown
        if (item.dropdown) {
          return (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.path}
                className={clsx(
                  "cursor-pointer text-[16px] hover:text-white hover:font-bold transition-colors duration-200",
                  isActive
                    ? "font-bold text-white"
                    : "font-regular text-[#B4B4B4]"
                )}
              >
                {item.name}
              </Link>

              {/* Dropdown Menu */}
              {openDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 w-[320px] z-50">
                  <div className="bg-white dark:bg-[#1D1D1D] rounded-[8px] shadow-lg py-[8px] border border-[#E5E5E5] dark:border-[#333333]">
                    {item.dropdown.map((subItem, subIndex) => {
                      const isSubActive = pathname === subItem.path;
                      return (
                        <Link
                          key={subIndex}
                          href={subItem.path}
                          className={clsx(
                            "block px-[20px] py-[12px] text-[14px] transition-colors duration-200",
                            isSubActive
                              ? "bg-[#F2B611] text-white font-semibold"
                              : "text-[#070707] dark:text-[#fff] hover:bg-[#F5F5F5] dark:hover:bg-[#2D2D2D]"
                          )}
                        >
                          {subItem.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        }

        // Regular nav item without dropdown
        return (
          <Link
            key={index}
            href={item.path}
            className={clsx(
              "cursor-pointer text-[16px] hover:text-white hover:font-bold transition-colors duration-200",
              isActive
                ? "font-bold text-white"
                : "font-regular text-[#B4B4B4]"
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}
