import Image from "next/image";
import DenverMap from "../../../public/denver-metro-map.jpg";
import SectionContainer from "./SectionContainer";

const WorkArea = () => {
  return (
    <SectionContainer>
      <div className="w-full h-fit pt-32 px-64 bg-grey1 ">
        <div className="flex justify-between px-16 bg-zinc-700 rounded">
          <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 mb-8">
            Service Area
          </header>
          <Image
            src={DenverMap}
            alt="service-map"
            className="max-h-[500px] max-w-[500px] rounded-full"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default WorkArea;
