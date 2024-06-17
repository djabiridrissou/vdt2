import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Input, Button } from 'antd';
import Footer from "../components/Footer";

const { TextArea } = Input;

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-[80px] overflow-x-hidden">
                {/* Team Small */}
                <div className="relative h-[420px] lg:h-[370px] eledessous">
                    <img
                        src="/images/mapdzilah.png"
                        alt="Team Small"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex flex-col items-start pl-4 justify-center lg:pl-[400px]">
                        <div className="text-center text-white">
                            <span className="text-6xl font-bold md:whitespace-nowrap"></span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex flex-col lg:items-center mx-4  ">
                    <div className=" max-w-7xl flex flex-col flex-wrap items-start mt-8 justify-center">
                        {/* team and building */}
                        <div className="flex flex-col lg:flex-row space-x-4  w-full lg:max-w-6xl">
                            <div className="lg:w-[450px] border-4 border-green-800 h-[500px] lg:h-[360px] w-full">
                                <img
                                    src="/images/building.jpg"
                                    alt="Tête de personnage"
                                    className=" object-cover w-full h-full"
                                />
                            </div>
                            <div className="mt-4 w-full flex flex-col items-start">
                                <div className="flex">
                                    <span className="font-bold text-xl text-green-700">
                                        Address:
                                    </span>
                                    <span className="ml-2 mt-[3px]">Accra, Lakeside</span>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold text-xl text-green-700">
                                        Hours of Operation:
                                    </span>
                                    <span className="ml-2 mt-[3px]">
                                        Monday to Friday, 9am - 6pm
                                    </span>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold text-xl text-green-700">
                                        Telephone:
                                    </span>
                                    <span className="ml-2 mt-[3px]">+233(0) 20 656 2493</span>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold text-xl text-green-700">
                                        Mail:
                                    </span>
                                    <span className="ml-2 mt-[3px]">
                                        info@vandzilahtechnologies.com
                                    </span>
                                </div>
                                <div className="flex mt-2">
                                    <span className="font-bold text-xl text-green-700">
                                        Website:
                                    </span>
                                    <span className="ml-2 mt-[3px]">
                                        www.vandzilahtechnologies.com
                                    </span>
                                </div>
                                {/* follow us */}
                                <div className="mt-10 w-full flex flex-col items-start">
                                    <h1 className="text-2xl font-bold">Follow Us:</h1>
                                    <div className="flex space-x-2 mt-2">
                                        <Link to="">
                                            <img
                                                src="/images/FACEBOOK.png"
                                                className="w-12 h-12"
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="">
                                            <img src="/images/x.png" className="w-12 h-12" alt="" />
                                        </Link>
                                        <Link to="">
                                            <img
                                                src="/images/instagram.jpeg"
                                                className="w-12 h-12"
                                                alt=""
                                            />
                                        </Link>
                                        <Link to="">
                                            <img
                                                src="/images/linkedin.png"
                                                className="w-12 mt-1 h-12"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* form */}
                        <div className="flex flex-col space-y-8 mt-12 ">
                            <span className="font-bold text-green-700 text-2xl">Please fill out the form below and we will contact you soon</span>
                            <p className="text-xl">We respect your identity and privacy. All the informations you will provide are confidential. Nevertheless, a copy of your message might be stored in our records as a database entry for archival purposes:</p>
                            <div className="mt-6 ">
                                <div className="flex flex-col ">
                                    <div className="flex space-x-3">
                                        <span className="text-xl">Name</span><span className="text-red-500">*</span>
                                    </div>
                                    <Input style={{ width: '100%', height: '40px' }} className="" />
                                </div>
                                <div className="flex flex-col mt-6">
                                    <div className="flex space-x-3">
                                        <span className="text-xl">Email</span><span className="text-red-500">*</span>
                                    </div>
                                    <Input style={{ width: '100%', height: '40px' }} />
                                </div>
                                <div className="flex flex-col mt-6">
                                    <div className="flex space-x-3">
                                        <span className="text-xl">Subject</span><span className="text-red-500">*</span>
                                    </div>
                                    <Input style={{ width: '100%', height: '40px' }} />
                                </div>
                                <div className="flex flex-col mt-6">
                                    <div className="flex space-x-3">
                                        <span className="text-xl">Message</span><span className="text-red-500">*</span>
                                    </div>
                                    <TextArea rows={4} />
                                </div>
                                <div className="flex flex-col mt-6">
                                    <Button style={{ width: '10%', height: '40px', backgroundColor: 'green' }}> <span className="text-xl text-white">Submit</span> </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-20"></div>
                <div className="">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Contact;
