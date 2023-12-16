import { useState, useEffect, useCallback } from "react";
export default function NavBar() {
  const [navbarBg, setNavbarBg] = useState(false);
  const [click, setClick] = useState("home");
  const [open,setOpen] = useState(false)
  useEffect(() => {
    const navBg = () =>
      window.scrollY >= 80 ? setNavbarBg(true) : setNavbarBg(false);

    window.addEventListener("scroll", navBg);

    return () => window.removeEventListener("scroll", navBg);
  }, []);

  const handleClick = useCallback((name) => {
    setClick(name);
  }, []);

  const handleToggleOpen = useCallback(()=>setOpen((currentValue)=>!currentValue),[])

  return (
    <div className="fixed left-0 right-0 top-0 w-full ">

   
    <nav
      className={`${
        navbarBg && "bg-black/40"
      } z-[1000] px-4 flex items-center relative justify-between md:justify-normal gap-6  h-16`}
    >
      <p className="text-2xl text-white font-semibold cursor-pointer px-4">
        Nikita
      </p>
      <button className="bg-none border-none outline-none md:hidden" onClick={handleToggleOpen}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 bg-none"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div className="md:flex hidden items-center gap-4 ">
        {["home", "about", "experiences", "projects", "skills", "contact"].map(
          (item) => (
            <a
              href={`#${item}`}
              key={item}
              className={`${
                click === item ? "border-b-2" : ""
              } cursor-pointer text-white capitalize font-normal {border-b-2}`}
              onClick={() => handleClick(item)}
            >
              {item}
            </a>
          )
        )}
      </div>

    {open &&  <div className="md:hidden py-4 flex items-center gap-4 z-[1000px] w-full flex-col absolute top-20 bg-white shadow-lg">
        {["home", "about", "experiences", "projects", "skills", "contact"].map(
          (item) => (
            <a
              href={`#${item}`}
              key={item}
              className={`${
                click === item ? "border-b-2 border-black" : ""
              } cursor-pointer text-black capitalize font-normal`}
              onClick={() => {
                handleClick(item)
                setOpen(false)
            }}
            >
              {item}
            </a>
          )
        )}
      </div>}

    </nav>
    </div>
    

  );
}
