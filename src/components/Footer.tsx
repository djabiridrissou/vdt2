import { RiTwitterXLine } from "react-icons/ri";
import { GrFacebookOption } from "react-icons/gr";
import { LuInstagram } from "react-icons/lu";
import { ImPinterest } from "react-icons/im";
import { IoIosMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";


const Footer = () => {
    return (
        <div className="w-full bg-[#013635] pt-12 flex flex-col items-center justify-center">
            <div className="max-w-6xl mx-4 lg:mx-0 flex flex-col lg:flex-row space-y-12 lg:space-x-8">
                <div className="lg:w-1/3 flex flex-col mt-12">
                    <div className="w-[200px]">
                        <img src="/images/logoVextended.png" alt="" className="w-full object-cover" />
                    </div>
                    <p className="mt-8 text-gray-400">
                        Desires to obtain pain of itself, because it is pain, but occasionnaly circumstances.
                    </p>
                    <div className="flex ml-2 space-x-6 text-sm items-center mt-6 text-white">
                        <span><RiTwitterXLine /></span>
                        <span><GrFacebookOption /></span>
                        <span><LuInstagram /></span>
                        <span><ImPinterest /></span>
                    </div>
                </div>
                <div className="lg:w-1/3 flex flex-col">
                    <span className="font-bold text-white pb-4 border-b-2 border-[#236192]">
                        Explore
                    </span>
                    <div className="flex flex-col text-gray-400 space-y-4 mt-4">
                        <span>About Company</span>
                        <span>Meet the Team</span>
                        <span>News & Media</span>
                        <span>Our Projects</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="lg:w-1/3 flex flex-col">
                    <span className="font-bold text-white pb-4 border-b-2 border-[#236192]">
                        Contact
                    </span>
                    <div className="flex flex-col text-gray-400 space-y-4 mt-4">

                        <span className="text-xs">Lakeside Estate, 8 Infantry RD,GD-148-3756, community 5</span>
                        <div className="flex flex-col mt-4 space-y-2">
                            <div className="flex space-x-2 items-center">
                                <IoIosMail size={18} color="#a8a680" />
                                <span className="text-xs">info@vandzilahtechnologies.com</span>
                            </div>
                            <div className="flex space-x-2 items-center">
                                <IoCall size={18} color="#a8a680" />
                                <span className="text-xs">+233(0) 20 656 2493</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="h-[100px] text-sm w-full flex items-center justify-center max-w-6xl bg-[rgb(21,80,79)] mt-12 text-gray-500">
                Copyright © 2024 by Djabir IDRISSOU
            </div>
        </div>
    );
};

export default Footer;
