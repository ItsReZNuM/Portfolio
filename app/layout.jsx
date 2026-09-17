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
  title: "Reza Mohamadnia",
  description: "Portfolio of Reza Mohamadnia, BackEnd Developer specializing in Python, Django, FastAPI, and Database Architecture.",
  keywords: ["Backend Developer", "Python", "Django", "FastAPI", "Reza Mohamadnia", "رضا محمدنیا"],
  authors: [{ name: "Reza Mohamadnia" }],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${jetbrains.variable} ${estedad.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('portfolio_lang');if(!l){var tz=Intl.DateTimeFormat().resolvedOptions().timeZone;if(tz==='Asia/Tehran')l='fa';}if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';document.title='رضا محمدنیا';}else{document.documentElement.lang='en';document.documentElement.dir='ltr';document.title='Reza Mohamadnia';}}catch(e){}})();`,
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
