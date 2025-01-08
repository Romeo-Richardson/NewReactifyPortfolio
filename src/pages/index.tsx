import About from "@/components/about/About";
import HeroSection from "@/components/heroSection/HeroSection";
import Layout from "@/components/Layout";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <Layout title="Reactify | Software Development | Start-up Development">
      <HeroSection />
      <Services />
      <About />
    </Layout>
  );
}
