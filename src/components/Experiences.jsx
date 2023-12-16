import Title from "./Title";

export const Experiences = () => {
  return (
 

    <section id="experiences" className=" bg-slate-200 py-16 px-4 ">
      <Title title="Experiences" />
      <div className="flex md:flex-row flex-col items-center justify-center md:justify-between gap-6 w-full mt-20 max-w-[80%] mx-auto">
        <div className="md:w-1/2 w-full">
          <img  className="h-14" src="eveez-logo.png" />
          <div className="text-xl">
            Software Developer Intern(July 2023 - Nov 2023 )
          </div>
        </div>
        <div className="md:w-1/2 w-full">
          <img  className="h-14" src="FooterLogo.webp" />
          <div className="text-xl">
          Software Developer Trainee ( Nov 2022 - June 2023 )
          </div>
        </div>
      </div>
    </section>
  );
};
