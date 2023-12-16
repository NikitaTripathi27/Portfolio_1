import Title from "./Title"

export const About =()=>{
    return(
        <section  id="about" className=" bg-slate-200 py-16 px-4 ">
          <Title title="About Me"/>
        <div className="flex md:flex-row flex-col items-center justify-center gap-6 w-full mt-12 max-w-[80%] mx-auto">
          <div className="md:w-1/2 w-full mx-auto flex items-center justify-center">
            <div className="sm:w-[300px] sm:h-[300px] w-[200px] h-[200px]">
            <img className="w-full h-full object-cover rounded-full" src="passport_pic.jpg" alt="passport picture"/>
            </div>
         
          </div>
          
          <div className="md:w-1/2 w-full">
          My name is Nikita and I am a Software Developer at Eveez. I&#39;m a 2022 graduate from Mahatma Jyotiba Phule Rohilkhand University at Bareilly, Uttar Pradesh with a degree in Electronics and Communication
              Engineering. I&#39;m most passionate about giving back to the
              community, and my goal is to pursue this passion within the field
              of Software Development I have an expertise in Full Stack Development. In my free time I like to listen podcasts, baking and travelling.
          </div>
        </div>
      </section>
    )
}