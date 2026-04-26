import Navbar          from "@/components/Navbar/Navbar";
import Hero            from "@/components/Hero/Hero";
import Education       from "@/components/Education/Education";
import Projects        from "@/components/Projects/Projects";
import TechStack       from "@/components/TechStack/TechStack";
import Certificates    from "@/components/Certificates/Certificates";
import ResumeDownload  from "@/components/ResumeDownload/ResumeDownload";
import Contact         from "@/components/Contact/Contact";
import Footer          from "@/components/Footer/Footer";
import ScrollToTop     from "@/components/ScrollToTop/ScrollToTop";
import LoadingScreen   from "@/components/LoadingScreen/LoadingScreen";

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