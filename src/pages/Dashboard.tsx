import React from 'react';

interface DashboardProps {
  language: 'en' | 'ar';
}

const Dashboard: React.FC<DashboardProps> = ({ language }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {language === 'en' ? 'Welcome to the Dashboard' : 'مرحباً بك في لوحة التحكم'}
      </h1>
      <p className="mt-4">
        {language === 'en'
          ? 'This is the admin backoffice.'
          : 'هذه هي لوحة التحكم الخاصة بالإدارة.'}
      </p>
    </div>
  );
};

export default Dashboard;