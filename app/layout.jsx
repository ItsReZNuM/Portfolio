import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { LanguageProvider } from "@/context/LanguageContext";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

const estedad = localFont({
  src: [
    {
      path: "../public/fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Estedad-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-estedad",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://reznum.ir"),
  title: {
    default: "رضا محمدنیا | توسعه‌دهنده بک‌اند (Reza Mohamadnia)",
    template: "%s | رضا محمدنیا",
  },
  description:
    "وب‌سایت رسمی و پورتفولیوی رضا محمدنیا (Reza Mohamadnia - RezNum)؛ برنامه‌نویس و توسعه‌دهنده ارشد بک‌اند با تخصص در Python، Django، FastAPI و معماری پایگاه داده.",
  keywords: [
    "رضا محمدنیا",
    "Reza Mohamadnia",
    "محمدنیا",
    "Mohamadnia",
    "RezNum",
    "reznum.ir",
    "توسعه‌دهنده بک‌اند",
    "Backend Developer",
    "برنامه‌نویس پایتون",
    "Python Developer",
    "برنامه‌نویس جنگو",
    "Django Developer",
    "FastAPI",
    "پایتون",
    "جنگو",
  ],
  authors: [{ name: "رضا محمدنیا (Reza Mohamadnia)", url: "https://reznum.ir" }],
  creator: "Reza Mohamadnia",
  publisher: "Reza Mohamadnia",
  alternates: {
    canonical: "https://reznum.ir",
    languages: {
      fa: "https://reznum.ir/?lang=fa",
      en: "https://reznum.ir/?lang=en",
      "x-default": "https://reznum.ir",
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: "https://reznum.ir",
    siteName: "رضا محمدنیا | Reza Mohamadnia",
    title: "رضا محمدنیا | توسعه‌دهنده بک‌اند (Reza Mohamadnia)",
    description:
      "وب‌سایت رسمی و پورتفولیوی رضا محمدنیا (RezNum)؛ توسعه‌دهنده بک‌اند با تخصص در Python، Django، FastAPI و معماری دیتابیس.",
    images: [
      {
        url: "/assets/main.webp",
        width: 800,
        height: 800,
        alt: "رضا محمدنیا | Reza Mohamadnia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "رضا محمدنیا | Reza Mohamadnia",
    description:
      "وب‌سایت رسمی و نمونه‌کارهای رضا محمدنیا - برنامه‌نویس و توسعه‌دهنده ارشد بک‌اند",
    images: ["/assets/main.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/R_logo_16x16.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/icons/R_logo_32x32.svg", sizes: "32x32", type: "image/svg+xml" },
      { url: "/icons/R_logo_48x48.svg", sizes: "48x48", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/icons/R_logo_180x180.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico",
  },
};

const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "رضا محمدنیا",
  alternateName: ["Reza Mohamadnia", "RezNum", "Mohamadnia"],
  url: "https://reznum.ir",
  image: "https://reznum.ir/assets/main.webp",
  jobTitle: "Backend Developer",
  description:
    "توسعه‌دهنده ارشد بک‌اند متخصص در پایتون، جنگو، فست‌ای‌پی‌آی و معماری پایگاه داده.",
  sameAs: [
    "https://github.com/ItsReZNuM",
    "https://linkedin.com/in/reznum",
    "https://t.me/itsreznum",
  ],
  knowsAbout: [
    "Python",
    "Django",
    "FastAPI",
    "PostgreSQL",
    "Docker",
    "Redis",
    "REST API",
    "Backend Architecture",
  ],
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "رضا محمدنیا | Reza Mohamadnia",
  alternateName: ["RezNum Portfolio", "پورتفولیوی رضا محمدنیا"],
  url: "https://reznum.ir",
  inLanguage: ["fa", "en"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${jetbrains.variable} ${estedad.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var p=new URLSearchParams(window.location.search);var q=p.get('lang');var l=(q==='fa'||q==='en')?q:localStorage.getItem('portfolio_lang');if(l==='en'){document.documentElement.lang='en';document.documentElement.dir='ltr';document.title='Reza Mohamadnia | BackEnd Developer';}else{document.documentElement.lang='fa';document.documentElement.dir='rtl';document.title='رضا محمدنیا | توسعه‌دهنده بک‌اند (Reza Mohamadnia)';}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-primary antialiased bg-primary text-white">
        <LanguageProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </LanguageProvider>
      </body>
    </html>
  );
}
