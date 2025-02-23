import { Button } from "@/components/ui/button";
import Link from "next/link";
import SectionContainer from "./SectionContainer";

const Hero = () => {
  return (
    <SectionContainer>
      <div className="bg-grey1 flex justify-center relative w-full h-[500px]">
        {/* <div className="relative p-6"> */}
        <Button
          asChild
          className="absolute bottom-28 sm:right-36 w-[200] h-[64px] text-[24px]  bg-gold"
        >
          <Link href="/booking">Book Now</Link>
        </Button>
        {/* </div> */}
      </div>
    </SectionContainer>
  );
};

export default Hero;
