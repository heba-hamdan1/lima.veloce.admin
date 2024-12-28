// setupTests.ts
import '@testing-library/jest-dom/extend-expect'; // لتوسيع توقعات Jest
import { configure } from '@testing-library/react';

// تكوين إعدادات @testing-library/react إذا لزم الأمر
configure({ testIdAttribute: 'data-testid' });

// إذا كنت تستخدم web-vitals، تأكد من استيرادها بشكل صحيح
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

// تعريف دوال Web Vitals لضمان أنها تعمل بشكل صحيح في الاختبارات
getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);