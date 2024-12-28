import React from 'react';
import { useTranslation } from 'react-i18next';

const Users = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl">{t('users')}</h1>
      <p className="mt-4">Manage your users here.</p>
    </div>
  );
};

export default Users;