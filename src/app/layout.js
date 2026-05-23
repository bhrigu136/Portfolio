import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Tamanna Bhrigunath | AI, Data Science & Backend Dev",
  description:
    "Tamanna Bhrigunath — AI & Data Science Graduate, ML Engineer, and Backend Developer from Jaipur, India. Explore projects, experience, and skills.",
  keywords:
    "Tamanna Bhrigunath, AI, Data Science, Machine Learning, ML Engineer, Backend Developer, Portfolio, Flask, Python, Jaipur",
  authors: [{ name: "Tamanna Bhrigunath" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
