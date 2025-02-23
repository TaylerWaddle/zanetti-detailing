import Image from "next/image";
import DenverMap from "../../../public/denver-metro-map.jpg";
import SectionContainer from "./SectionContainer";

const WorkArea = () => {
  return (
    <SectionContainer>
      <div className="bg-grey1 lg:flex justify-between">
        <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 mb-8">
          Service Area
        </header>
        <div className="bg-purple flex justify-center items-center">
          <Image
            src={DenverMap}
            alt="service-map"
            className="min-h-[250px] min-w-[250px] max-h-[500px] max-w-[500px] rounded-full"
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default WorkArea;
