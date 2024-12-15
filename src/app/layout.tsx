
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/home/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import '../style/main.css';
import Script from 'next/script';


export const metadata: Metadata = {
  title: 'Wathiq',
  description: 'منصة واثق تساعدك على حفظ الحمولات ووصول المنتجات البترولية بشكل آمن والحد من التلاعب من خلال الربط بين شركات النقل والمحطات عبر نظام إلكتروني وأقفال ذكية تساهم في رفع الجودة والأمان.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir='rtl' id='root'>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DWQC951DYB"></Script>
        <Script id='google-analytics'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DWQC951DYB');
          `}
        </Script>
      </head>
      <GoogleTagManager gtmId='GTM-NT2XLMP7' />
      <body className="w-full" suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
