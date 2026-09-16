import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { LanguageProvider } from "@/context/LanguageContext";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
});

export const metadata = {
  title: "Reza Mohamadnia",
  description: "Portfolio of Reza Mohamadnia, BackEnd Developer specializing in Python, Django, FastAPI, and Database Architecture.",
  keywords: ["Backend Developer", "Python", "Django", "FastAPI", "Reza Mohamadnia", "رضا محمدنیا"],
  authors: [{ name: "Reza Mohamadnia" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" className={jetbrains.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var l=localStorage.getItem('portfolio_lang');if(l==='fa'){document.documentElement.lang='fa';document.documentElement.dir='rtl';document.title='رضا محمدنیا';}else{document.documentElement.lang='en';document.documentElement.dir='ltr';document.title='Reza Mohamadnia';}}catch(e){}})();`,
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
