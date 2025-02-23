import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import WorkArea from "./components/WorkArea";
import ContactUs from "./components/ContactUs";

export default function Home() {
  return (
    <div className="h-full bg-grey2">
      <Hero />
      <AboutUs />
      <Testimonials />
      <Gallery />
      <WorkArea />
      <ContactUs />
    </div>
  );
}
