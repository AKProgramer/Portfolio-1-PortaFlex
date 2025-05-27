import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import { getPersonalDataFromPortfolio } from "@/utils/data/personal-data";
import ClientProvider from "./ClientProvider";
const inter = Inter({ subsets: ["latin"] });

const fetchPortfolio = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/portfolio/PortaFlex Testing`);
  if (!res.ok) throw new Error("Failed to fetch portfolio");
  return res.json();
};

export async function generateMetadata() {
  const portfolioData = await fetchPortfolio();
  return {
    title: `Portfolio of ${portfolioData.username || 'Developer'}`,
    description: portfolioData.bio || 'This is a developer portfolio.',
  };
}

export default async function RootLayout({ children }) {
  const portfolioData = await fetchPortfolio();
  const personalData = getPersonalDataFromPortfolio(portfolioData);
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar portfolioData={portfolioData} />
          <ClientProvider personalData={personalData} portfolioData={portfolioData}>
            {children}
          </ClientProvider>
          <ScrollToTop />
        </main>
        <Footer />
      </body>
    </html>
  );
}
