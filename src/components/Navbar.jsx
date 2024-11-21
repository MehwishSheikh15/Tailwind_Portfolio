import logo from "../assets/MehwishSheikhLogo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Navbar = () => {
  return (
   <nav className=" mb-20 flex items-center justify-between py-6"> 
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
    <div className="flex flex-shrink-0 items-center ">
        <img className="mx-1 w-10" src={logo} alt="logo" />
        </div>  
    </div>
 
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/mehwish-sheikh-9871442b6"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/MehwishSheikh15"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        
        </div>
   </nav>
  );
};

export default Navbar;