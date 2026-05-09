import Navbar          from "@/components/Navbar";
import Hero            from "@/components/Hero";
import Education       from "@/components/Education";
import Projects        from "@/components/Projects";
import TechStack       from "@/components/TechStack";
import Certificates    from "@/components/Certificates";
import ResumeDownload  from "@/components/ResumeDownload";
import Contact         from "@/components/Contact";
import Footer          from "@/components/Footer";
import ScrollToTop     from "@/components/ScrollToTop";
import LoadingScreen   from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <Education />
        <Projects />
        <TechStack />
        <Certificates />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}