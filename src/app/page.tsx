import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
// import Testimonials from "./components/Testimonials";
// import Gallery from "./components/Gallery";
// import WorkArea from "./components/WorkArea";

export default function Home() {
  return (
    <div className="h-screen">
      <Hero />
      <AboutUs />
      {/* <Testimonials />
      <Gallery />
      <WorkArea /> */}
    </div>
  );
}
