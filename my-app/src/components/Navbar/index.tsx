import { useState } from 'react';
import Link from 'next/link';
import { Poppins } from 'next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

    return (
        <div className={`${poppins.className} w-full h-[70px] fixed top-0 left-0 flex justify-between items-center px-20 max-lg:px-10 max-md:px-5 bg-white z-50 shadow-md`}>
            <div className='flex items-center'>
                <Link href="/" className="flex items-center">

                    <h1 className="font-bold text-2xl max-sm:text-lg">MBTheDev</h1>
                </Link>
            </div>
            <ul className="flex items-center gap-10">
                <li className="font-semibold max-md:hidden">
                    <Link href="#home" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Home
                        </span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="#about" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            About
                        </span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="#projects" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Projects
                        </span>
                    </Link>
                </li>
                <li className="font-semibold max-md:hidden">
                    <Link href="#contact" className="relative group flex">
                        <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                            Contact
                        </span>
                    </Link>
                </li>
            </ul>
            <i onClick={toggleDrawer} className='text-2xl md:hidden hover:bg-neutral-100 py-1 px-3 rounded-xl cursor-pointer'>
                <FontAwesomeIcon icon={faBars} />
            </i>

            <div
                className={`fixed top-0 left-0 z-40 h-screen shadow-xl p-4 bg-white w-80 transition-transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <button
                    type="button"
                    onClick={toggleDrawer}
                    className="text-black bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-xl w-8 h-8 absolute top-2.5 right-2.5 flex items-center justify-center"
                >
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className='flex items-center justify-center h-full'>
                    <ul className='flex flex-col items-center'>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Home
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    About
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Projects
                                </span>
                            </Link>
                        </li>
                        <li className="font-medium text-2xl py-4">
                            <Link href="/" className="relative group flex w-fit">
                                <span className="group-hover:after:w-full after:w-0 after:h-0.5 after:bg-black after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300">
                                    Contact
                                </span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;