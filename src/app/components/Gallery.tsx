import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import GalleryPhoto1 from "../../../public/lambo-gallery.jpeg";
import GalleryPhoto2 from "../../../public/bmw-gallery.jpg";
import GalleryPhoto3 from "../../../public/mustang-new-gallery.jpg";
import GalleryPhoto4 from "../../../public/mustang-old-gallery.jpeg";
import GalleryPhoto5 from "../../../public/porche-gallery.jpg";
import SectionContainer from "./SectionContainer";

const Gallery = () => {
  return (
    <SectionContainer>
      <div className="bg-grey1">
        <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 pb-8">
          Gallery
        </header>
        {/* <div className="w-full px-10 sm:px-6"> */}
        <div className="w-full px-6 sm:px-6">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto1}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto2}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto3}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto4}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto5}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
              <CarouselItem className="xl:basis-1/3 lg:basis-1/2">
                <Image
                  src={GalleryPhoto5}
                  alt="car"
                  className="w-full h-auto rounded-lg"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Gallery;
