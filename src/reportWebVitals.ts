// reportWebVitals.ts
import { Metric, ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (Metric: any)=> void) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);  // تسجيل تجربة CLS (Cumulative Layout Shift)
      getFID(onPerfEntry);  // تسجيل FID (First Input Delay)
      getFCP(onPerfEntry);  // تسجيل FCP (First Contentful Paint)
      getLCP(onPerfEntry);  // تسجيل LCP (Largest Contentful Paint)
      getTTFB(onPerfEntry); // تسجيل TTFB (Time to First Byte)
    });
  }
};

export default reportWebVitals;