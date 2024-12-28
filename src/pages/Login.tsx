// src/pages/Login.tsx
import React, { useState } from "react";

const Login: React.FC = () => {
  const [language, setLanguage] = useState("ar");

  const translations = {
    en: {
      title: "Login",
      username: "Username",
      password: "Password",
      login: "Login",
    },
    ar: {
      title: "تسجيل الدخول",
      username: "اسم المستخدم",
      password: "كلمة المرور",
      login: "تسجيل الدخول",
    },
  };

  const t = translations[language];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">{t.title}</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">{t.username}</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder={t.username}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">{t.password}</label>
          <input
            type="password"
            className="w-full p-2 border rounded"
            placeholder={t.password}
          />
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded">
          {t.login}
        </button>
        <div className="mt-4 text-center">
          <button
            onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
            className="text-blue-500 underline"
          >
            {language === "ar" ? "Switch to English" : "التبديل إلى العربية"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;