import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Services = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[80px] overflow-x-hidden">
                {/* Team Small */}
                <div className="relative h-[120px] lg:h-[370px] eledessous">
                    <img src="/images/services.jpg" alt="Team Small" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-start pl-4 justify-center lg:pl-[400px]  bg-green-900 bg-opacity-50 animateOnScroll">
                        <div className="text-center text-white">
                            <span className='text-6xl font-bold md:whitespace-nowrap'>Our Services</span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className='flex flex-col items-center'>
                    <div className=' max-w-7xl flex flex-col flex-wrap md:flex-row items-start mt-8 justify-center'>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/network.jpg" alt="Network Pic" className="w-[260px] h-[170px] rounded-xl" />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <span className='text-2xl font-bold text-green-700'>Network Engineering</span>
                            </div>
                        </div>

                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/webdev.jpg" alt="Tête de personnage" className="w-[260px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Web Development</span>

                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/network.jpg" alt="Tête de personnage" className="w-[260px] rounded-xl h-[170px]" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Internet of Things - IOT</span>

                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/graphic.jpg" alt="Tête de personnage" className="w-[260px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Graphic Design</span>

                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/robotics.jpg" alt="Tête de personnage" className="w-[260px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Robotics</span>

                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/bigdata.jpg" alt="Tête de personnage" className="w-[260px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Anlytics and Big Data</span>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Services;