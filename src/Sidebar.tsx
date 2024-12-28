import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: "لوحة المعلومات", path: "/" },
    { name: "التقارير", path: "/reports" },
    { name: "تقرير المشتريات والمبيعات", path: "/purchases-sales-report" },
    { name: "الشركات", path: "/companies" },
    { name: "الفروع", path: "/branches" },
    { name: "المستخدمين", path: "/users" },
    { name: "الفئات", path: "/categories" },
    { name: "الفئات الفرعية", path: "/subcategories" },
    { name: "نقاط البيع", path: "/pos" },
    { name: "المتاجر", path: "/stores" },
    { name: "الوحدات", path: "/units" },
    { name: "الضريبة", path: "/tax" },
    { name: "الأصناف", path: "/items" },
    { name: "العملاء", path: "/customers" },
    { name: "الموردين", path: "/suppliers" },
    { name: "الموازين", path: "/scales" },
    { name: "صلاحبة لمره واحده", path: "/single-use" },
    { name: "فئات الفروع", path: "/branch-categories" },
    { name: "أسعار الفروع", path: "/branch-prices" },
  ];

  return (
    <div className="w-64 bg-blue-500 text-white h-screen">
      <div className="p-4 text-2xl font-bold border-b border-blue-400">
        لوحة الإدارة
      </div>
      <ul className="mt-4">
        {menuItems.map((item, index) => (
          <li key={index} className="mb-2">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-2 rounded-lg ${
                  isActive ? "bg-blue-700" : "hover:bg-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;