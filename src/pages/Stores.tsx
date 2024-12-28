import React from "react";

const Stores: React.FC = () => {
  const stores = [
    { name: "متجر 1", createdAt: "2024-01-01", active: true },
    { name: "متجر 2", createdAt: "2024-01-05", active: false },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">المتاجر</h1>
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="p-2">اسم المتجر</th>
            <th className="p-2">تاريخ الإنشاء</th>
            <th className="p-2">الحالة</th>
          </tr>
        </thead>
        <tbody>
          {stores.map((store, index) => (
            <tr key={index} className="border-b">
              <td className="p-2">{store.name}</td>
              <td className="p-2">{store.createdAt}</td>
              <td className="p-2">
                {store.active ? "فعال" : "غير فعال"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Stores;