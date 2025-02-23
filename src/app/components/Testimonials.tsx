import SectionContainer from "./SectionContainer";

const Testimonials = () => {
  return (
    <SectionContainer>
      <div className="bg-grey1">
        <header className="flex items-center justify-center text-white text-[40px] font-bold tracking-1 pb-8">
          Testimonials
        </header>
        <div className="lg:flex-row flex flex-col items-center justify-center">
          <div className="bg-green-100 min-w-72 min-h-80 rounded-lg"></div>
          <div className="bg-green-300 min-w-72 min-h-80 rounded-lg"></div>
          <div className="bg-green-600 min-w-72 min-h-80 rounded-lg"></div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Testimonials;
