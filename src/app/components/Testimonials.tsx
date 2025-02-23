import SectionContainer from "./SectionContainer";

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="w-full h-fit pt-32 px-64 bg-grey1">
        <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 mb-8">
          Testimonials
        </header>
        <div className="flex items-center justify-between">
          <div className="bg-green-100 w-96 h-96 rounded-lg"></div>
          <div className="bg-green-100 w-96 h-96 rounded-lg"></div>
          <div className="bg-green-100 w-96 h-96 rounded-lg"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
