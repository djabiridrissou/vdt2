import { useEffect, useState } from 'react';
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { ImCross } from "react-icons/im";
import { Menu } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleMenuClick = (path: string) => {
        setMenuOpen(false);
        console.log("before navigate", path);
        navigate(path);
        console.log("after navigate", path);
    };

    const menuItems = [
        { key: '/', label: 'Home', path: '/' },
        { key: '/services', label: 'Services', path: '/' },
        { key: '/team', label: 'Team', path: '/' },
        { key: '/blog', label: 'Blog', path: '/' },
        { key: '/contact', label: 'Contact', path: '/' },
    ];

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="bg-white lg:fixed inset-x-0 top-0 thead h-24  w-full shadow-md flex justify-center items-center z-50">
            <div className="flex justify-between  items-center w-full max-w-6xl mx-4">
                <div className="flex  items-center justify-between  w-full">
                    <div className='flex justify-center items-center flex-col cursor-pointer w-[140px]'>
                        <Link to="/">

                           <img src="/images/logoVextended.png" alt="" />
                        </Link>
                    </div>
                    <div className='hidden md:flex justify-center items-center space-x-8 text-[#013635] cursor-pointer'>
                        {menuItems.map(item => (
                            <Link key={item.key} to={item.path} className={`menu-item ${location.pathname === item.path ? 'selected' : ''}`}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                  {/*   <div className="hidden md:flex justify-center items-center">
                        <div className="button text-black  h-12 flex items-center justify-center text-xs">
                            <Link to="/services" className="link">
                                <span >REQUEST</span> <span className='ml-2'>A</span> <span className='ml-2'>QUOTE</span>
                            </Link>
                        </div>
                    </div> */}
                </div>
                <div className='flex justify-center items-center cursor-pointer md:hidden mr-4'>
                    {menuOpen ? (
                        <ImCross size={12} className="text-[#a8a680]" onClick={handleMenuToggle} />
                    ) : (
                        <HiOutlineBars3BottomRight size={24} className="text-[#a8a680]" onClick={handleMenuToggle} />
                    )}
                </div>
            </div>

            {menuOpen && (
                <Menu
                    mode="inline"
                    className="absolute shadow-md top-20 left-0 w-full z-50 custom-menu"
                    style={{ backgroundColor: '#013635' }}
                >
                    {menuItems.map(item => (
                        <Menu.Item key={item.key} className="custom-menu-item" onClick={() => handleMenuClick(item.path)}>
                            {item.label}
                        </Menu.Item>
                    ))}
                </Menu>
            )}
        </div>
    );
}

export default Navbar;
