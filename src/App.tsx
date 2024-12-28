import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Login from "./pages/Login"; // استيراد صفحة تسجيل الدخول
import PurchasesSalesReport from "./pages/PurchasesSalesReport";
import Companies from "./pages/Companies";
import Branches from "./pages/Branches";
import Users from "./pages/Users";
import Categories from "./pages/Categories";
import Subcategories from "./pages/Subcategories";
import POS from "./pages/POS";
import Stores from "./pages/Stores";
import Units from "./pages/Units";
import Tax from "./pages/Tax";
import Items from "./pages/Items";
import Customers from "./pages/Customers";
import Suppliers from "./pages/Suppliers";
import Scales from "./pages/scales";
import SingleUse from "./pages/SingleUse";
import BranchCategories from "./pages/BranceCategories";
import BranchPrices from "./pages/BranchPrices";

// App component
const App: React.FC = () => {
  const [language, setLanguage] = useState("ar"); // حالة اللغة الحالية

  // ترجمة النصوص لكل لغة
  const translations = {
    en: {
      dashboard: "Dashboard",
      reports: "Reports",
      login: "Login",
      purchasesSalesReport: "Purchases & Sales Report",
      companies: "Companies",
      branches: "Branches",
      users: "Users",
      categories: "Categories",
      subcategories: "Subcategories",
      pos: "POS",
      stores: "Stores",
      units: "Units",
      tax: "Tax",
      items: "Items",
      customers: "Customers",
      suppliers: "Suppliers",
      scales: "Scales",
      singleUse: "Single Use",
      branchCategories: "Branch Categories",
      branchPrices: "Branch Prices",
    },
    ar: {
      dashboard: "لوحة المعلومات",
      reports: "التقارير",
      login: "تسجيل الدخول",
      purchasesSalesReport: "تقرير المشتريات والمبيعات",
      companies: "الشركات",
      branches: "الفروع",
      users: "المستخدمين",
      categories: "الفئات",
      subcategories: "الفئات الفرعية",
      pos: "نقاط البيع",
      stores: "المتاجر",
      units: "الوحدات",
      tax: "الضريبة",
      items: "الأصناف",
      customers: "العملاء",
      suppliers: "الموردين",
      scales: "الموازين",
      singleUse: "صلاحية لمره واحدة",
      branchCategories: "فئات الفروع",
      branchPrices: "أسعار الفروع",
    },
  };

  // اختيار النصوص بناءً على اللغة
  const t = translations[language];

  return (
    <Router>
      <div className="flex">
        {/* القائمة الجانبية */}
        <nav className="w-64 bg-gray-800 text-white h-screen p-4">
          <h1 className="text-xl font-bold mb-6 text-center">{t.dashboard}</h1>
          <ul>
            <li className="mb-4">
              <Link to="/dashboard" className="text-white hover:text-blue-500">
                {t.dashboard}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/reports" className="text-white hover:text-blue-500">
                {t.reports}
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/login" className="text-white hover:text-blue-500">
                {t.login}
              </Link>
            </li>
            {/* إضافة باقي الروابط هنا */}
          </ul>
          {/* زر التبديل بين اللغتين */}
          <button
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            {language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          </button>
        </nav>

        {/* المحتوى الرئيسي */}
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/login" element={<Login />} />  {/* ربط صفحة تسجيل الدخول */}
            <Route path="/purchases-sales-report" element={<PurchasesSalesReport />} />
            <Route path="/companies" element={<Companies />} />
            {/* باقي المسارات الأخرى */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;