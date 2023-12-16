export const Banner =()=>{
    return(
        <>
         <div>
        <div className="font-semibold text-6xl text-center pt-36 text-white">
          Nikita Tripathi
        </div>
        <div className="text-2xl text-center pt-4 text-white">
          Passionate about changing the world with technology
        </div>
        <div className=" flex items-center justify-center">
          <div className="text-right">
            <a href="https://github.com/NikitaTripathi27" target="blank">
              <img
                className="h-20 w-20 m-8 bg-white rounded-md cursor-pointer"
                src="github.png"
              />
            </a>
          </div>
          <div className="">
            <a href="https://www.linkedin.com/in/nikita44/" target="blank">
              <img className="h-20 w-20" src="linkedin.png" />
            </a>
          </div>
        </div>
        <div className="flex justify-center ">
          <button className="mt-20 mb-28">About Me</button>
        </div>
      </div>
        </>
    )
}