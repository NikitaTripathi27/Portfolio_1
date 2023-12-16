import Title from "./Title"
const skills =[
  {
   
    name:"html",
    image:"html.png"

  },
  {
   
    name:"css",
    image:"css.png"

  },
  {
    name:"bootstrap",
    image:"bootstrap.png"
  },

  {
   
    name:"js",
    image:"js.png"

  },
  {
   
    name:"react",
    image:"react.png"

  },

  {
   
    name:"matrial-ui",
    image:"material-ui.png"

  },
  
  {
   
    name:"tailwind",
    image:"tailwind.png"

  },
 
  {
   
    name:"node",
    image:"node.png"

  },
  {
   
    name:"mongodb",
    image:"mongodb.png"

  },
  {
   
    name:"git",
    image:"git.png"

  },
 
]
export const Skills =()=>{
  
    return(
        <>
         <section id="skills" className=" bg-slate-200 py-16 px-4 ">
      <Title title="Skills" />
      <div className=" max-w-6xl w-full mx-auto mt-14">
      <div className=" grid md:grid-cols-5 sm:grid-cols-4 grid-cols-2 w-full place-content-center gap-10">
       
       {skills.map((item)=>(
          <div key={item.name} className="flex items-center justify-center">
           
         <img  src={item.image} alt={item.name} className="w-14 h-14 object-contain" />
         </div>
       ))}
      
     </div>
      </div>
      
    </section>
        </>
    )
}