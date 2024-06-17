import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const SemiNavbar = () => {
  return (
    <div className="h-[130px] flex ">
      {/* premier black debut*/}
      <div className="bg-[#013635]  w-[250px] border-r-[10px] flex items-center justify-center border-[#a8a680]">
        <div className="w-[100px]">
          <img src="/images/logoVsmall.png" alt="" />
        </div>
      </div>
      {/* after black debut */}
      <div className="flex flex-col ml-[80px]">
        {/* gris top and socials */}
        <div className="flex">
          {/* gris */}
          <div className="flex justify-between items-center bg-slate-200 h-[50px] w-[1350px] px-[35px]">
            <div className="flex space-x-6 items-center">
              {/* Mail and location */}
              <div className="flex space-x-2 items-center">
                <IoIosMail size={18} color="#a8a680" />
                <span className="text-xs">info@vandzilahtechnologies.com</span>
              </div>
              <div className="flex space-x-2 items-center">
                <FaLocationDot size={16} color="#a8a680" />
                <span className="text-xs">Lakeside Estate, 8 Infantry RD,GD-148-3756, community 5</span>
              </div>
            </div>
            {/* Help support contact  */}
            <div className="flex space-x-1 text-xs">
              <span>Help /</span>
              <span>Support /</span>
              <span>Contact</span>
            </div>
          </div>
          {/* socials */}
          <div className="ml-[70px] mr-2 flex space-x-6 text-sm items-center">
            <span><RiTwitterXLine /></span>
            <span><GrFacebookOption /></span>
            <span><LuInstagram /></span>
            <span><ImPinterest /></span>
          </div>
        </div>
        {/* undergris */}
        <div className="flex justify-between mr-2 h-[100px] pl-[40px] items-center">
          {/* Navigation */}
          <div className="flex space-x-8 ">
            <span>Home</span>
            <span>Services</span>
            <span>Team</span>
            <span>Blog</span>
            <span>Contact</span>
          </div>
          {/* Call get solution */}
          <div className="flex space-x-4">
            {/* Call */}
            <div className="w-12 h-12 flex items-center justify-center bg-[#013635] rounded-full">
              <IoCall color="white" size={20} />
            </div>
            <div className="flex flex-col mt-1 text-xs space-y-2">
              <span>Call Anytime</span>
              <span className="font-bold">+233(0) 20 656 2493</span>
            </div>
            <div className="">
              <div className="button text-black h-12 w-[140px]  text-[12px]">
                <Link to="" className="link">
                  <span>GET</span><span className="ml-2">SOLUTION</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SemiNavbar;