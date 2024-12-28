import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Menu = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-800 text-white w-64 h-full p-6">
      <ul>
        <li className="mb-4">
          <Link to="/dashboard" className="hover:text-gray-400">{t('dashboard')}</Link>
        </li>
        <li className="mb-4">
          <Link to="/users" className="hover:text-gray-400">{t('users')}</Link>
        </li>
        <li className="mb-4">
          <Link to="/settings" className="hover:text-gray-400">{t('settings')}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
