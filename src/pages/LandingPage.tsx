import Navbar from "../components/Navbar";
import SemiNavbar from "../components/SemiNavbar";
import { Card, Collapse } from "antd";
import type { CollapseProps } from 'antd';
import { GrTechnology } from "react-icons/gr";
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GrSearchAdvanced } from "react-icons/gr";
import { MdCreditScore } from "react-icons/md";
import { MdOutlineMedicalServices } from "react-icons/md";
import { TbCloudNetwork } from "react-icons/tb";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HiOutlineLightBulb } from "react-icons/hi";
import { MdCloudDone } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { LuQuote } from "react-icons/lu";


const answer1 = (
  <p style={{ paddingLeft: 24 }}>
    There are many variations of passages the majority have suffered alteration in some to injected humour, or randomised words believable
  </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: <span className='font-bold'>Is my technology allowed on tech ?</span>,
    children: answer1
  },
  {
    key: '2',
    label: <span className='font-bold'>How to soft launch your business ?</span>,
    children: answer1
  },
  {
    key: '3',
    label: <span className='font-bold'>How to turn visitors into contributors ?</span>,
    children: answer1
  },
  {
    key: '4',
    label: <span className='font-bold'>How can I find my solutions ?</span>,
    children: answer1
  },
];

const LandingPage = () => {
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });
  const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true });
  const [visibleDivs, setVisibleDivs] = useState([0, 1]);
  const [visibleDivsLg, setVisibleDivsLg] = useState([0, 1, 2, 3]);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const { ref: semiNavbarRef, inView: semiNavbarInView } = useInView();

  const titles = [
    "Tech Solutions",
    "Technology Training",
    "Product & Design",
    "Smart Visions",
    "Network Security"
  ];

  const categories = [
    "DESIGN",
    "TECHNOLOGY",
    "IDEA",
    "DEVELOPMENT",
    "SECURITY"
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!semiNavbarInView) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [semiNavbarInView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDivs(prev => {
        const nextDiv = (Math.max(...prev) + 1) % 5;
        return [prev[1], nextDiv];
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleDivsLg(prev => {
        const nextDiv = (Math.max(...prev) + 1) % 5;
        let newIndex = nextDiv;
        while (prev.includes(newIndex)) {
          newIndex = (newIndex + 1) % 5;
        }
        return [...prev.slice(1), newIndex];
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (

    <div className="overflow-hidden">
      <div className={`navbar hidden md:flex ${navbarVisible ? 'visible' : ''}`}>
        <Navbar />
      </div>
      <div className={` md:hidden`}>
        <Navbar />
      </div>
      <div className="hidden lg:flex" ref={semiNavbarRef}>
        <SemiNavbar />
      </div>
      <div
        className="relative h-[750px] md:h-[770px] "
        style={{
          backgroundImage: "url('/images/teamsmall.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center  bg-black opacity-80">

          <div className="flex  flex-col items-center justify-center text-white min-h-screen">

            <div className='flex mt-[170px] md:mt-0 items-center justify-center w-full flex-col text-center px-4'>
              <div className='mb-2'>
                <span className='text-[#a8a680] font-extrabold text-sm'>
                  TECH&nbsp;&nbsp;INDUSTRY
                  <span className="separator"></span>
                </span>
              </div>

              <h1 className="text-5xl  md:text-[49px] text-white font-extrabold leading-tight">
                Just Like Technology, We Never Stop Evolving
              </h1>
              <h4 className="text-lg md:text-md mt-6">
                Our technical expertise is constantly evolving. We are fully proficient in a wide selection of fields and continuously growing.
              </h4>
            </div>

            <div className="mt-12 text-center">
              <div className="button text-black">
                <Link to="/" className="link">
                  <span>DISCOVER <span className='ml-2'>MORE</span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* Quart de cercle animé */}
      <div className="hidden lg:flex absolute right-0">
        <div className="md:w-[700px] md:h-[700px] flex -mt-[400px] eledessous bg-slate-100 rounded-full overflow-hidden animate-bubble"></div>
      </div>
      {/* Carreau animé */}
      <div className="lg:flex absolute left-0">
        <div className="md:w-[550px] md:h-[1200px] flex opacity-20 mt-[570px] lg:-mr-[250px] lg:-mt-[300px] eledessous bg-slate-400 overflow-hidden ">
          <img src="/images/neural.jpg" alt="" className='opacity-80' />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-8 lg:-mt-10 mt-8 ml-4 mr-2">
        <Card
          ref={card1Ref}
          className={`relative cardbg hover:text-white  w-[330px] lg:w-[370px] items-center justify-center flex -ml-2 h-[180px] lg:h-[200px] mb-4 md:mb-0 shadow-md ${card1InView ? 'slide-in-down' : ''}`}
        >
          <div className=" flex flex-col mx-4 items-center justify-center relative z-10">
            <div className='w-full flex items-center justify-start space-x-6'>
              <div className='w-22 h-22 p-2 bg-[#a8a680] text-center'>
                <GrTechnology size={50} className="text-[#013635]" />
              </div>
              <span className='font-bold text-[16px] t'>Perfect Technology Solutions</span>
            </div>
            <div className='w-full mt-2 flex-col flex items-center justify-center'>
              <span className=''>
                We provide customized, targeted and tailored solutions for all your needs
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#236192] transform origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
        </Card>

        <Card
          ref={card2Ref}
          className={`relative w-[330px] cardbg hover:text-white  lg:w-[370px] -ml-2 flex items-center justify-center h-[180px] lg:h-[200px] mb-4 md:mb-0 shadow-md ${card2InView ? 'slide-in-down' : ''}`}
        >
          <div className="flex flex-col mx-4 items-center justify-center relative z-10">
            <div className='w-full flex items-center justify-start space-x-6'>
              <div className='w-22 h-22 p-2 bg-[#a8a680] text-center'>
                <MdCreditScore size={50} className="text-[#013635]" />
              </div>
              <span className='font-bold text-[16px]'>Innovative IT Solutions</span>
            </div>
            <div className='w-full mt-2 flex-col flex items-center justify-center'>
              <span className=''>
                Bringing cutting-edge technology to streamline your business processes
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#236192] transform origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
        </Card>

        <Card
          ref={card3Ref}
          className={`relative w-[330px] cardbg hover:text-white  lg:w-[370px] flex items-center justify-center -ml-2 h-[180px] lg:h-[200px] mb-4 md:mb-0 shadow-md ${card3InView ? 'slide-in-down' : ''}`}
        >
          <div className="flex flex-col mx-4 items-center justify-center relative z-10">
            <div className='w-full flex items-center justify-start space-x-6'>
              <div className='w-22 h-22 p-2 bg-[#a8a680] text-center'>
                <GrSearchAdvanced size={50} className="text-[#013635]" />
              </div>
              <span className='font-bold text-[16px] '>Advanced Consult Services</span>
            </div>
            <div className='w-full mt-2 flex-col flex items-center justify-center'>
              <span className=''>
                Expert coding analysis to enhance your software's performance and reliability
              </span>
            </div>
          </div>
          <div className="absolute inset-0 bg-[#236192] transform origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100"></div>
        </Card>
      </div>



      <div className='mt-12 w-full lg:flex lg:items-center lg:justify-center  lg:mx-0'>
        <div className='flex flex-col   md:flex-row lg:space-x-[40px]  max-w-5xl'><div ref={leftRef}
          className={`flex lg:space-x-4 lg:h-[550px] lg:w-[1500px] mx-4 md:mx-1 mt-12 ${leftInView ? 'slide-in-left' : ''}`}>
          <div className=" w-full h-full -mt-12">
            <img src="/images/tech1.jpg" alt="Team Small" className="w-full h-full object-cover image-hover" />
          </div>
          <div className="hidden lg:flex flex-col">
            {/* Trait vertical */}
            <div className="w-[20px] bg-[#a8a680] h-[150px] -mt-12 mb-8"></div>
            <div className="w-[240px] h-[400px] flex flex-col -ml-[120px] ">
              <img src="/images/tech2.jpg" alt="Team Small" className="w-full h-full object-cover image-hover" />
            </div>
          </div>
        </div>


          <div ref={rightRef}
            className={`mx-6 md:mx-1 mt-12 md:mt-0  ${rightInView ? 'slide-in-right' : ''}`}>
            <div className='mb-2 flex items-center justify-center lg:justify-start'>
              <span className='text-[#a8a680] font-extrabold text-sm'>
                ABOUT&nbsp;&nbsp;OUR&nbsp;&nbsp;COMPANY
                <span className="separator"></span>
              </span>
            </div>
            <div className='flex items-center justify-center lg:items-start lg:justify-start text-center lg:text-start'>
              <span className="mt-0 text-4xl lg:text-6xl font-bold text-[#236192]">Solution Through Innovations</span>
            </div>

            <div className="mt-6">
              <p className='text-center lg:text-start'>
                Vandzilah Technology is a social
                enterprise providing services and
                consultancy in the technology
                sector. With more than 8 years of
                experience we have become a strong
                force in leveraging technological
                innovation for development.
              </p>
              <div className='flex flex-col lg:flex-row lg:space-x-8 mt-8'>
                <div className='flex lg:space-x-8 mt-2'>
                  <div className='flex-col text-center lg:text-start'>
                    <div className='flex flex-col lg:flex-row items-top lg:space-x-4 pb-8 border-b border-gray-300'>
                      <div className='flex items-center justify-center lg:items-start'>
                        <MdOutlineMedicalServices size={70} color='#a8a680' />
                      </div>
                      <div className="flex flex-col mt-2 lg:mt-0">
                        <span className='font-bold text-xl'>Tech Services</span>
                        <p className='mt-2 text-sm'>
                          We offer 24/7/365 support. We’ve designed a culture that allows our stewards to assimilate
                        </p>
                      </div>
                    </div>

                    <div className='flex lg:items-top items-center flex-col lg:flex-row lg:space-x-4 pb-6 mt-8'>
                      <div className='flex items-center justify-center lg:items-start'>
                        <TbCloudNetwork size={70} color='#a8a680' />
                      </div>
                      <div className="flex flex-col mt-2">
                        <span className='font-bold text-xl'>Network Management</span>
                        <p className='mt-2 text-sm'>
                          We offer 24/7/365 support. We’ve designed a culture that allows our stewards to assimilate
                        </p>
                      </div>
                    </div>

                    <div className="mt-2 text-center lg:text-start">
                      <div className="button text-black">
                        <Link to="/" className="link">
                          <span>DISCOVER <span className='ml-2'>MORE</span></span>
                        </Link>
                      </div>
                    </div>

                  </div>
                </div>
                <div className=" lg:flex  flex-col items-center justify-center  lg:w-[240px] h-auto lg:h-[210px] bg-gray-100 border-t-4 border-[#a8a680] mt-12 py-8 px-4 lg:px-8 transition duration-300 hover:bg-white hover:shadow-lg space-y-8 lg:space-y-4">
                  <p className="text-xl font-semibold text-[#236192] text-center lg:text-left">
                    High Quality IT Solutions for Startup
                  </p>
                  <div className="flex items-center space-x-2 justify-center lg:items-start lg:justify-start">
                    <span className="text-xs">MORE</span>
                    <FaLongArrowAltRight />
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Offering Our Services */}
      <div className="mx-4 mt-20 lg:mt-[110px] lg:mx-0 flex items-center justify-center ">
        <div className='max-w-6xl'>
          <div className='mb-2 flex items-center justify-center lg:justify-center'>
            <span className='text-[#a8a680] font-extrabold text-sm'>
              SERVICES&nbsp;&nbsp;WE'RE&nbsp;&nbsp;OFFERING
              <span className="separator"></span>
            </span>
          </div>

          <div className='flex items-center justify-center lg:items-center lg:justify-center text-center lg:text-center mb-2 mx-4 lg:mx-12'>
            <span className="mt-1 text-3xl lg:text-6xl lg:text-center font-bold text-[#236192]">We don't follow trends, we set them!</span>
          </div>

          <div className="flex space-y-8 lg:space-x-8 lg:space-y-0 mt-10 flex-col lg:flex-row flex-wrap">
            <div className="border p-4 border-slate-200 flex mx-4 lg:mx-0 flex-1 flex-col">
              <div className="w-full h-[350px] ">
                <img src="/images/software.jpg" alt="" className='w-full h-full object-cover' />
              </div>
              <div className='mt-6 space-y-2 mx-6 flex flex-col'>
                <span className='font-bold text-xl'>Software Prorgramming</span>
                <p className='leading-relaxed'>
                  We offer 24/7/365 support We’re bulders of tomorrow.
                </p>
                <div className='mt-6'>
                  <span className='text-sm cursor-pointer text-[#236192]'>Read More</span>
                </div>
              </div>
            </div>

            <div className="border p-4 border-slate-200 flex mx-4 flex-1 flex-col">
              <div className="w-full h-[350px] ">
                <img src="/images/uiux.jpg" alt="" className='w-full h-full object-cover' />
              </div>
              <div className='mt-6 space-y-2 mx-6 flex flex-col'>
                <span className='font-bold text-xl'>UI/UX Design</span>
                <p className='leading-relaxed'>
                  We offer 24/7/365 support We’re bulders of tomorrow.
                </p>
                <div className='mt-6'>
                  <span className='text-sm cursor-pointer text-[#236192]'>Read More</span>
                </div>
              </div>
            </div>

            <div className="border p-4 border-slate-200 flex mx-4 flex-1 flex-col">
              <div className="w-full h-[350px] ">
                <img src="/images/data.jpg" alt="" className='w-full h-full object-cover' />
              </div>
              <div className='mt-6 space-y-2 mx-6 flex flex-col'>
                <span className='font-bold text-xl'>Data Visualization</span>
                <p className='leading-relaxed'>
                  We offer 24/7/365 support We’re bulders of tomorrow.
                </p>
                <div className='mt-6'>
                  <span className='text-sm cursor-pointer text-[#236192]'>Read More</span>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Our marquee */}

      <div className="marquee mt-24">
        <div className="marquee-content font-bold text-xl text-[#013635]">
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
        </div>
        <div className="marquee-content font-bold text-xl text-[#013635]">
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
          <span>*  TECHNOLOGIES IT SERVICES * &nbsp;&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className='bg-[#013635] pb-[100px] lg:flex items-center  justify-center lg:justify-end'>
        <div className="flex flex-col lg:flex-row lg:space-x-20 mx-4 max-w-[1520px] lg:mx-0 pt-24 lg:pt-0">
          <div className='flex flex-col lg:w-1/2 lg:mt-24'>
            <div className='mb-2 flex items-start justify-start'>
              <span className='text-[#a8a680] font-extrabold text-sm'>
                TECH&nbsp;&nbsp;MANAGEMENT
                <span className="separator"></span>
              </span>
            </div>
            <div className='flex items-center justify-center mr-12 lg:mr-0'>
              <p className='text-white font-bold text-3xl lg:text-5xl leading-relaxed '>The Best Source for IT Solutions</p>
            </div>
            <div className='flex mt-8 text-sm leading-relaxed text-gray-400'>
              <p className='lg:mr-16'>
                Just a few clicks away. We offer 24/7/365 support We’re bulders of tomorrow.  We offer 24/7/365 support We’re bulders of tomorrow.
              </p>
            </div>
            <div className='w-full mt-12 flex flex-col lg:flex-row lg:items-start items-center lg:justify-start lg:mr-12 lg:space-x-6 justify-center'>
              <HiOutlineLightBulb size={70} color="#a8a680" />
              <p className='mt-4 text-white text-md font-bold mx-6 text-center'>We're doing the right things in the right ways</p>
            </div>
            <div className='mt-12 flex flex-col space-y-4'>
              <div className='flex space-x-3 '>
                <MdCloudDone size={24} color="#a8a680" />
                <span className='-mt-1 text-semibold text-gray-400 text-[18px]'>Lorem Ipsum is not simply random text</span>
              </div>
              <div className='flex space-x-3 '>
                <MdCloudDone size={24} color="#a8a680" />
                <span className='-mt-1 text-semibold text-gray-400 text-[18px]'>Lorem Ipsum is not simply random text</span>
              </div>
              <div className='flex space-x-3 '>
                <MdCloudDone size={24} color="#a8a680" />
                <span className='-mt-1 text-semibold text-gray-400 text-[18px]'>Lorem Ipsum is not simply random text</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row mt-12 lg:mt-0 lg:w-1/2">
            <div className='w-full lg:w-1/2 bg-[#a8a680] lg:max-w-[170px] flex flex-col items-start justify-center lg:justify-between p-8'>
              <div className="w-[100px] h-[100px] rounded-full bg-[#013635] flex items-center justify-center cursor-pointer">
                <FaPlay color='white' size={40} />
              </div>
              <p className="text-start mr-8 lg:mr-0 mt-6 text-white font-bold text-md">
                Professional IT technology services you can trust
              </p>
            </div>
            <div className="">
              <img src="/images/services.jpg" alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>

      {/* bigimage */}
      <div className="flex items-center bg-cover bg-center justify-center flex-col w-full h-[500px]" style={{ backgroundImage: 'url("/images/robot.jpg")' }}>
        <div className='w-full bg-black bg-opacity-50 h-full flex items-center lg:justify-center'>
          <div className='flex flex-col items-center justify-center  border border-[#a8a680] w-full py-2 px-8 mx-8 h-[470px]'>
            <p className='text-center text-white text-5xl font-semibold'>IT Solutions & Services at your Fingertips</p>
            <div className="mt-12 text-center">
              <div className="button text-black">
                <Link to="/" className="link">
                  <span>DISCOVER <span className='ml-2'>MORE</span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Our feedbacks */}
      <div className='bg-slate-100 flex items-center justify-center'>
        <div className=' max-w-6xl flex flex-col items-center justify-center lg:flex-row mx-4'>
          <div className='w-full'>
            <div className="flex flex-col lg:flex-row lg:space-x-24 w-full items-center justify-center lg:justify-between">
              <div>
                <div className='mb-2 flex items-start justify-start mt-24'>
                  <span className='text-[#a8a680] font-extrabold text-sm'>
                    RECENTLY&nbsp;&nbsp;COMPLETED&nbsp;&nbsp;WORK
                    <span className="separator"></span>
                  </span>
                </div>
                <p className='text-4xl text-[#236192] font-bold leading-12'>
                  Improve & Enhance the Tech Projects
                </p>
              </div>
              <div>
                <p className='mt-4 text-sm leading-7'>
                  There are many variations of passages of available but
                  the majority have suffered alteration in some form by injected humour,
                  or randomised words which don't look even slightly believable.
                </p>
              </div>
            </div>
            <div className="relative w-full  flex items-center justify-center">
              {/* Petit écran: affiche une div à la fois */}
              <div className="lg:hidden w-full h-full mt-12">
                {visibleDivs.slice(0, 1).map(index => (
                  <div key={index} className="w-full h-full transition-opacity duration-1000">
                    {index === 0 &&
                      <div className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: 'url("/images/scope1.jpg")' }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className='w-full h-full flex items-end relative'>
                          <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                            <span className="text-white font-semibold text-md">Tech Solutions</span>
                            <span className="text-[#236192] font-bold text-sm">DESIGN</span>
                          </div>
                        </div>
                      </div>
                    }

                    {index === 1 &&
                      <div className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: 'url("/images/scope2.jpg")' }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className='w-full h-full flex items-end relative'>
                          <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                            <span className="text-white font-semibold text-md">Technology Training</span>
                            <span className="text-[#236192] font-bold text-sm">TECHNOLOGY</span>
                          </div>
                        </div>
                      </div>
                    }
                    {index === 2 &&
                      <div className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: 'url("/images/scope3.jpg")' }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className='w-full h-full flex items-end relative'>
                          <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                            <span className="text-white font-semibold text-md">Product & Design</span>
                            <span className="text-[#236192] font-bold text-sm">IDEA</span>
                          </div>
                        </div>
                      </div>
                    }
                    {index === 3 &&
                      <div className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: 'url("/images/scope4.jpg")' }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className='w-full h-full flex items-end relative'>
                          <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                            <span className="text-white font-semibold text-md">Smart Visions</span>
                            <span className="text-[#236192] font-bold text-sm">DEVELOPMENT</span>
                          </div>
                        </div>
                      </div>
                    }
                    {index === 4 &&
                      <div className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: 'url("/images/scope5.jpg")' }}>
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className='w-full h-full flex items-end relative'>
                          <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                            <span className="text-white font-semibold text-md">Network Security</span>
                            <span className="text-[#236192] font-bold text-sm">SECURITY</span>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grand écran: affiche toujours deux divs */}
      <div className="hidden lg:flex w-full space-x-8 pt-8 items-center justify-center bg-slate-100">
        <div className="grid lg:grid-cols-4 gap-8 w-full max-w-7xl">
          {visibleDivsLg.map(index => (
            <div key={index} className="w-full h-[440px] bg-cover bg-center relative flex flex-col" style={{ backgroundImage: `url("/images/scope${index + 1}.jpg")` }}>
              <div className="absolute inset-0 bg-black opacity-30"></div>
              <div className='w-full h-full flex items-end relative'>
                <div className='w-full flex flex-col space-y-2 justify-start mx-8 mb-4'>
                  <span className="text-white font-semibold text-md">{titles[index]}</span>
                  <span className="text-[#236192] font-bold text-sm">{categories[index]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Feedbacks */}
      <div className="w-ful bg-slate-100 flex flex-col items-center  justify-center px-6 text-center lg:text-start pb-12">
        <div className="flex flex-col items-center lg:items-start justify-center w-full max-w-6xl lg:justify-start">
          <div className='mb-2 flex items-start justify-start mt-24'>
            <span className='text-[#a8a680] font-extrabold text-sm'>
              OUR&nbsp;&nbsp;FEEDBACKS
              <span className="separator"></span>
            </span>
          </div>
          <div className="flex lg:pr-[720px]">
            <p className='text-4xl text-[#236192] font-bold leading-12'>
              What They're Talking About Company
            </p>
          </div>

        </div>
        <div className="flex flex-col  lg:flex-row lg:justify-between   max-w-6xl lg:mt-12">
          <div className="hidden lg:flex flex-col w-1/2">
            <div className="w-full flex justify-between">
              <LuQuote color="#a8a680" size={42} />
              <div className="flex items-center justify-center">
                <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-500 text-md">
                We believe in four pillars of influence that drive our growth.
                This is ingrained in everything we do We use technology to create a better and smarter environment.
              </p>
            </div>
            <div className="flex flex-col mt-4">
              <span className="font-bold">Alicia Keys</span>
              <span className="text-[10px] mt-1">DESIGNER</span>
            </div>

          </div>
          <div className="w-[300px] h-[300px] lg:w-[350px] lg:h-[350px] lg:-mt-[120px] rounded-full bg-white mt-6 flex items-center justify-center">
            <div className="w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-cover bg-center" style={{ backgroundImage: 'url("/images/feed1.jpg")' }}>

            </div>
          </div>
          <div className="flex lg:hidden flex-col mt-8">
            <div className="flex items-center justify-center">
              <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} /> <CiStar color="#a8a680" size={20} />
            </div>

            <div className="w-full flex flex-col space-y-4 mt-4">
              <p className="text-gray-500 leading-2">
                We believe in four pillars of influence that drive our growth.
                This is ingrained in everything we do we use technology to create a better and smarter environment.
              </p>
              <div className="flex flex-col items-center justify-center">
                <span className="font-semibold">Alicia Keys</span>
                <span className="text-[8px] text-gray-500 mt-1">DESIGNER</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* Contact Us */}
      <div className='w-full flex flex-col lg:flex-row lg:space-x-12 lg:mt-10'>
        <div className='w-full border-t-2 border-[#a8a680] py-24 lg:py-12 px-8 lg:mx-0 flex flex-col items-start justify-center bg-[#013635] lg:w-1/2'>
          <div className='flex flex-col lg:flex-row justify-between w-full'>
            <div className='hidden lg:flex w-[42rem] bg-center bg-cover' style={{ backgroundImage: 'url("/images/motif1.jpg")' }}>
              <div className='w-full h-full bg-[#013635] opacity-80'>

              </div>
            </div>

            <div className='flex flex-col lg:w-full border-t-2 border-[#a8a680] py-11 px-4 shadow-2xl lg:px-12'>
              <span className='text-[#a8a680] font-semibold'>
                Contact Us
              </span>
              <span className='text-white font-bold text-xl'>Write Email</span>
              <div className='mt-4 flex flex-col space-y-4'>
                <input type="text" className="input w-full px-2 py-4 bg-transparent text-white border border-gray-400" placeholder="Your Name" />
                <input type="text" className="input w-full px-2 py-4 bg-transparent text-white border border-gray-400" placeholder="Email Address" />
                <input type="text" className="input w-full px-2 py-4 bg-transparent text-white border border-gray-400" placeholder="Phone Number" />
                <textarea name="message" id="message" className="input w-full px-2 py-4 bg-transparent text-white border border-gray-400" placeholder="Write a Message"></textarea>
                <div className="button text-black w-[250px] flex items-center">
                  <Link to="/" className="link">
                    <span>SEND <span className='ml-2'>A</span><span className='ml-2'>MESSAGE</span></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-slate-100 lg:w-full pt-8 border border-gray-500 lg:pt-0 flex flex-col lg:flex-row px-4 pb-24 lg:pb-0 lg:pl-12'>
          <div className="lg:w-2/3">
            <div className='mb-2 flex items-start justify-start mt-12'>
              <span className='text-[#a8a680] font-extrabold text-sm'>
                QUESTIONS&nbsp;&nbsp;&&nbsp;&nbsp;ANSWERS
                <span className="separator"></span>
              </span>
            </div>
            <div className="flex lg:pr-[200px]">
              <p className='text-4xl text-[#236192] font-bold leading-12'>
                See Frequently Asked Questions
              </p>
            </div>
            <div className='mt-6 w-full '>
              <Collapse className='w-full' items={items} bordered={true} defaultActiveKey={['1']} />
            </div>
          </div>
          <div className="hidden w-1/3 ml-2 lg:flex bg-cover bg-center" style={{ backgroundImage: 'url("/images/motif2.jpg")' }}>
            <div className="w-full h-full bg-slate-100 opacity-20">

            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex h-10"></div>
      <Footer />
    </div>

  );
}

export default LandingPage;

