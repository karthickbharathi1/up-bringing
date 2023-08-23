import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePhoto from '../assets/Photo.png'
export default function Header() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed top-0 left-0 bg-transparent backdrop-blur text-white  w-screen flex justify-between items-center p-5 px-[10%] md:px-[20%]" style={{zIndex: 999}}>
      <Link href ="/">
        <h1 className="text-2xl font-bold">Up-Bringing</h1>
      </Link>
      
      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href ="/programs">Programs</Link>
        </li>
        <li>
          <Link href="/">Pricing</Link>
        </li>

        <li>
          <Link href="/">Blogs</Link>
        </li>
      </ul>
      <button className="hidden md:flex rounded-xl px-4 py-2 ">
        <img className="w-1/2" src={profilePhoto} alt="" />
      </button>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-2xl">
          <Link href="#">Dashboard</Link>
        </li>
        <li className="py-6 text-2xl">
          <Link href="#">Programs</Link>
        </li>
        <li className="py-6 text-2xl">
          <Link href="#">Pricing</Link>
        </li>

        <li className="py-6 text-2xl">
          <Link href="#">Blogs</Link>
        </li>
        {/* <li>
          <button className="rounded-xl px-4 py-2 text-[#FED25B] border-2 border-[#FED25B] bg-[#FED25B] bg-opacity-20">
            Login/Signup
          </button>
        </li> */}
      </ul>
    </div>
  );
}