import AboutLanding from "@/components/landing/about-landing";
// import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import Footer from "@/components/landing/footer";
import Skills from "@/components/landing/skiils";

export default function Home() {
  return (
    <>
      <div className="mx-auto mt-12 flex flex-col gap-24">
        <AboutLanding />
        <Skills />
        {/* <Experience /> */}
        <HomeProjects />
      </div>
      <Footer />
    </>
  );
}
