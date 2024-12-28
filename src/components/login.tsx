import React, { useState } from 'react';

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  language: 'en' | 'ar';
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn, language }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
    } else {
      alert(language === 'en' ? 'Invalid credentials' : 'بيانات الدخول غير صحيحة');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        {language === 'en' ? 'Login' : 'تسجيل الدخول'}
      </h2>
      <input
        type="text"
        placeholder={language === 'en' ? 'Username' : 'اسم المستخدم'}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder={language === 'en' ? 'Password' : 'كلمة المرور'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {language === 'en' ? 'Login' : 'دخول'}
      </button>
    </div>
  );
};

export default Login;