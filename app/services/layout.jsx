export const metadata = {
  title: "خدمات | Services",
  description:
    "خدمات تخصصی توسعه بک‌اند، طراحی APIهای مقیاس‌پذیر، معماری میکروسرویس و بهینه‌سازی پایگاه داده توسط رضا محمدنیا (Reza Mohamadnia).",
  alternates: {
    canonical: "https://reznum.ir/services",
    languages: {
      fa: "https://reznum.ir/services",
      en: "https://reznum.ir/services?lang=en",
      "x-default": "https://reznum.ir/services",
    },
  },
  openGraph: {
    title: "خدمات تخصصی | رضا محمدنیا (Reza Mohamadnia)",
    description:
      "خدمات توسعه بک‌اند، پایتون، جنگو، فست‌ای‌پی‌آی و معماری دیتابیس توسط رضا محمدنیا.",
    url: "https://reznum.ir/services",
  },
};

export default function ServicesLayout({ children }) {
  return children;
}
