import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Team = () => {
    return (
        <>
            <Navbar />
            <div className="mt-[80px] overflow-x-hidden">
                {/* Team Small */}
                <div className="relative h-[120px] lg:h-[370px] eledessous">
                    <img src="/images/teamI.jpg" alt="Team Small" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex flex-col items-start pl-4 justify-center lg:pl-[400px]  bg-green-900 bg-opacity-50 animateOnScroll">
                        <div className="text-center text-white">
                            <span className='text-6xl font-bold md:whitespace-nowrap'>Our Team</span>
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className='flex flex-col items-center'>
                    <div className=' max-w-7xl flex flex-col flex-wrap md:flex-row items-start mt-8 justify-center'>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='flex flex-col items-center justify-center mt-2'>
                                <span className='text-2xl font-bold text-green-700'>Maxwell DzilaH</span>
                                <span className='text-md text-yellow-700'>CEO and Chief Strategist</span>
                            </div>
                        </div>

                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Jonas K. Mensah</span>
                                <span className='text-md text-yellow-700'>Director of Software Engineering</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px]" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Barbara Ayivor</span>
                                <span className='text-md text-yellow-700'>Administrator/Accouts Officer</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Rabi Owusu-Amonsah</span>
                                <span className='text-md text-yellow-700'>Scanning Engineer</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Enoch Kofi Addogoh</span>
                                <span className='text-md text-yellow-700'>Systems Engineer</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Emmanuel Ghunney</span>
                                <span className='text-md text-yellow-700'>Graphics(UI/UX Designer)</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Djabir Idrissou</span>
                                <span className='text-md text-yellow-700'>Software Engineer</span>
                            </div>
                        </div>
                        <div className='py-4 flex flex-col md:w-1/3'>
                            <div className="rounded-full overflow-hidden flex items-center justify-center">
                                <img src="/images/avatar.png" alt="Tête de personnage" className="w-[180px] h-[170px] rounded-xl" />
                            </div>
                            <div className='mt-2 flex flex-col items-center justify-center'>
                                <span className='text-2xl font-bold text-green-700'>Emmanuel Sam</span>
                                <span className='text-md text-yellow-700'>Intern</span>
                            </div>
                        </div>
   
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Team;