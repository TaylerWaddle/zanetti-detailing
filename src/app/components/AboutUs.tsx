import Image from "next/image";
import Zanetti500x500 from "../../../public/zanetti-og-500x500.png";
import SectionContainer from "@/app/components/SectionContainer";

const AboutUs = () => {
  return (
    <SectionContainer>
      <div className="bg-grey1 flex flex-col-reverse xl:flex-row justify-between items-center ">
        <div className="h-full xl:px-16 md:px-12">
          <h1 className="text-white text-[40px] font-bold tracking-1 my-5">
            About Us
          </h1>
          <p className="text-white leading-8">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
            explicabo! Facilis esse numquam tenetur ipsa cum id distinctio
            magnam dolorem, delectus mollitia velit voluptate ex voluptates
            possimus eveniet voluptatibus minima. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quisquam vero deleniti nihil, ipsa
            quas aut hic. Quibusdam, accusamus nihil, aspernatur nemo quisquam
            alias sequi dolores, ipsa itaque magni dolorem beatae. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Illum libero tenetur
            laborum nostrum ducimus harum reprehenderit assumenda praesentium
            ipsum, dolorem enim adipisci reiciendis, magnam iste corrupti
            excepturi maxime officia ab! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className="min-w-fit min-h-fit">
          <Image
            src={Zanetti500x500}
            alt="zanetti500x500"
            className="min-h-[250px] min-w-[250px] rounded-lg"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default AboutUs;
