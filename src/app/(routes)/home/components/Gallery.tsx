import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import GalleryPhoto1 from "../../../../../public/lambo-gallery.jpeg";
import GalleryPhoto2 from "../../../../../public/bmw-gallery.jpg";
import GalleryPhoto3 from "../../../../../public/mustang-new-gallery.jpg";
import GalleryPhoto4 from "../../../../../public/mustang-old-gallery.jpeg";
import GalleryPhoto5 from "../../../../../public/porche-gallery.jpg";

const Gallery = () => {
  return (
    <div className="w-full h-fit pt-32 px-64 bg-grey1">
      <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 mb-8">
        Gallery
      </header>
      <div className="w-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/3">
              <Image
                src={GalleryPhoto1}
                alt="car"
                className="w-full h-full rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={GalleryPhoto2}
                alt="car"
                className="w-full h-full rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={GalleryPhoto3}
                alt="car"
                className="w-full h-full rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={GalleryPhoto4}
                alt="car"
                className="w-full h-full rounded-lg"
              />
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <Image
                src={GalleryPhoto5}
                alt="car"
                className="w-full h-full rounded-lg"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Gallery;
