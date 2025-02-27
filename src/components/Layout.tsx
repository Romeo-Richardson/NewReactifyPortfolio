import React, { useEffect } from "react";
import Head from "next/head";
// import { Courier_Prime } from "next/font/google";
import Header from "@/components/header/Header";
import Lenis from "lenis";

// const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

interface LayoutProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, description, children }) => {
  const siteTitle = "Software Development Agency"; // Default site title
  const metaDescription =
    description ||
    "We build robust software solutions to accelerate your business.";

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Head>
        <title>{`${title} | ${siteTitle}`}</title>
        <meta name="description" content={metaDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* Add Open Graph and Twitter Meta */}
        <meta property="og:title" content={`${title} | ${siteTitle}`} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content="/images/og-image.png" />
        <meta property="og:url" content="https://youragencywebsite.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${title} | ${siteTitle}`} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="/images/twitter-image.png" />
      </Head>
      <main className=" max-w-[1340px] mx-auto px-4 md:px-8">
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
