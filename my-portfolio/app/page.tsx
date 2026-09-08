import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ResumeSection from "./Components/ResumeSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <Hero />
        <ResumeSection />
      </main>
      <Footer />
    </>
  );
}