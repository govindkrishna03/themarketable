import { FiShoppingCart } from "react-icons/fi";
import  Logo    from "/public/assets/LOGO_WHITE.png"
import Image from "next/image";
export default function Navbar() {
  return (
    <nav className=" text-white shadow-lg  ">
    <div className="container mx-auto  flex items-center justify-between  ">
      <div className="flex items-center ">
      <Image src={Logo} alt="Logo" className="w-16 h-auto sm:w-[100px] md:w-[120px] "  />
      </div>
      <div className="mx-auto">
        <input
        type="text"
        placeholder="Search"
        className="w-[100px] sm:[300px] md:[50px] lg:w-[500px] px-4 py-2 text-gray-900 rounded-full"
        />
      </div>
      <div className="w-10px p-5">
        
          <h2>Courses</h2>
      </div>
      <div className="w-10px p-5">
        
          <FiShoppingCart />
      </div>
      <div className="sm:ml-[50px] lg:ml-[120px]"><a href="/login"
      className="bg-blue-500 text-black  font-bold text-sm w-5  px-8  py-4 rounded-full"
         >Login</a></div>
      </div>
       </nav>

  );
}