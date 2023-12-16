import "../index.css"
export const Projects=()=>{
    return(
        <section id="projects" className="bg-slate-800">
        <div className="text-4xl font-semibold text-center pt-28 text-white">
          Recent Projects
        </div>
        <div className="grid grid-rows-2 pb-24">
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className=" border-2 border-slate mt-20 mx-8 px-8 rounded-md shadow-xl bg-white">
              <div className="mt-8 p-4 font-light text-2xl ">
                XFlix(online video rendering Platform)
              </div>
              <div className="grid md:grid-cols-4 grid-cols-1">
                <a href="https://nikita-xflix-frontend.netlify.app/" target="blank">
                  <button>Demo link</button>
                </a>
                <a href="https://github.com/NikitaTripathi27/Xflix-Node/tree/main/frontend" target="blank">
                  <button>Git Repo</button>
                </a>
              </div>
              <hr />
              <div className="flex">
                <div className="mt-6 font-normal">Languages:</div>
                <div>
                  <button>Javascript</button>
                  <button>CSS</button>
                  <button>HTML</button>
                  <button>ReactJs</button>
                </div>
              </div>
              <div className="font-normal mt-8 mb-8">
                Updated on Dec 20 2023
              </div>
            </div>
            <div className=" border-2 border-slate mt-20 mx-8 px-8 rounded-md shadow-xl bg-white">
              <div className="mt-8 p-4 font-light text-2xl ">Quiz App</div>
              <div className="grid md:grid-cols-4 grid-cols-1">
                <a href="https://nikita-quiz-app.netlify.app/" target="blank">
                  <button>Demo link</button>
                </a>
                <a href="https://github.com/NikitaTripathi27/Quiz-App" target="blank">
                  <button>Git Repo</button>
                </a>
              </div>
              <hr />
              <div className="flex">
                <div className="mt-6 font-normal">Languages:</div>
                <div>
                  <button>Javascript</button>
                  <button>CSS</button>
                  <button>HTML</button>
                  <button>ReactJs</button>
                </div>
              </div>
              <div className="font-normal mt-8 mb-8">
                Updated on Dec 20 2023
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1">
            <div className=" border-2 border-slate mt-20 mx-8 px-8 rounded-md shadow-xl bg-white">
              <div className="mt-8 p-4 font-light text-2xl ">
                Qkart(online e-commerce Platform)
              </div>
              <div className="grid md:grid-cols-4 grid-cols-1">
                <a href="https://nikita-qkart.netlify.app/" target="blank">
                  <button>Demo link</button>
                </a>
                <a href="https://github.com/NikitaTripathi27/Qkart" target="blank">
                  <button>Git Repo</button>
                </a>
              </div>
              <hr />
              <div className="flex">
                <div className="mt-6 font-normal">Languages:</div>
                <div>
                  <button>Javascript</button>
                  <button>CSS</button>
                  <button>HTML</button>
                  <button>ReactJs</button>
                </div>
              </div>
              <div className="font-normal mt-8 mb-8">
                Updated on Dec 20 2023
              </div>
            </div>
            <div className=" border-2 border-slate mt-20 mx-8 px-8 rounded-md shadow-xl bg-white">
              <div className="mt-8 p-4 font-light text-2xl ">QTrip</div>
              <div className="grid md:grid-cols-4 grid-cols-1">
                <a href="https://nikita-qtripdynamic.netlify.app/" target="blank">
                  <button>Demo link</button>
                </a>
                <a href="https://github.com/NikitaTripathi27/QTripDynamic" target="blank">
                  <button>Git Repo</button>
                </a>
              </div>
              <hr />
              <div className="flex">
                <div className="mt-6 font-normal">Languages:</div>
                <div>
                  <button>Javascript</button>
                  <button>CSS</button>
                  <button>HTML</button>
                  <button>ReactJs</button>
                </div>
              </div>
              <div className="font-normal mt-8 mb-8">
                Updated on Dec 20 2023
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}