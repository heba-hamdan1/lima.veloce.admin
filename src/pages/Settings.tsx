import React from 'react';
import { useTranslation } from 'react-i18next';

const Settings = () => {
  const { t } = useTranslation();

  return (
    <div className="p-6">
      <h1 className="text-3xl">{t('settings')}</h1>
      <p className="mt-4">Change your settings here.</p>
    </div>
  );
};

export default Settings;