import Navbar          from "@/components/Navbar/Navbar";
import Hero            from "@/components/Hero/Hero";
import Projects        from "@/components/Projects/Projects";
import TechStack       from "@/components/TechStack/TechStack";
import Certificates    from "@/components/Certificates/Certificates";
import ResumeDownload  from "@/components/ResumeDownload/ResumeDownload";
import Contact         from "@/components/Contact/Contact";
import Footer          from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Certificates />
        <ResumeDownload />
        <Contact />
      </main>
      <Footer />
    </>
  );
}