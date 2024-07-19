import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LiaBrainSolid } from "react-icons/lia";
// import { PiLaptopDuotone } from "react-icons/pi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
// import { CgWebsite } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import './Header.scss'

interface MenuItem {
    icon: string | IconType;
    label: string;
    color?: string;
    id: string
}

interface HeaderProps {
    onThemeToggle: () => void;
    activeSection: String;
}

export const Header: React.FC<HeaderProps> = ({ onThemeToggle, activeSection }) => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const menuItems: MenuItem[] = [
        { icon: GoHome, label: 'Home', id: 'Intro' },
        { icon: BsPerson, label: 'Profile', id: 'Profile' },
        { icon: LiaUserGraduateSolid, label: 'Education', id: 'Education' },
        { icon: LiaBrainSolid, label: 'Skills', id: 'Skills' },
        // { icon: PiLaptopDuotone, label: 'Work Experience', id: 'WorkEx' },
        // { icon: CgWebsite, label: 'Projects', id: 'Projects' },
        { icon: CiMail, label: 'Contact', id: 'Contact' },
    ];
    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (<>
        <nav className="flex flex-col items-start space-y-2 bg-gray-100 rounded-lg justify-center w-0 z-10 dark:text-white relative left-[10px] laptop">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark ${activeSection == item.id && "menu-effects"} border border-transparent menu-item transition-all duration-300 ease-in-out`}
                    onMouseEnter={() => setHoveredIndex(item.label)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleNavClick(item.id)}
                >
                    <item.icon size="2rem" />
                    <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap ${hoveredIndex === item.label ? 'block opacity-1 scale-1000' : 'hidden opacity-0 scale-0'} menu-label px-1`}>
                        {item.label}
                    </span>
                </div>
            ))}
            <div
                className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark border border-transparent menu-item transition-all duration-300 ease-in-out`}
                onMouseEnter={() => setHoveredIndex("Download Resume")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => { window.open('Documents/Ankur_Patel_Resume_AI.pdf', '_blank') }}
            >
                <HiOutlineDocumentArrowDown size="2rem" />
                    <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap ${hoveredIndex === "Download Resume" ? 'block opacity-1 scale-1000' : 'hidden opacity-0 scale-0'} menu-label px-1`} >
                        Download Resume
                    </span>
            </div>

            <div
                className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark  border border-transparent menu-item transition-all duration-300 ease-in-out`}
                onMouseEnter={() => setHoveredIndex("ThemeChange")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onThemeToggle}
            >
                <MdOutlineDarkMode size="2rem" />
                <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap ${hoveredIndex === "ThemeChange" ? 'block opacity-1 scale-1000' : 'hidden opacity-0 scale-0'} menu-label px-1`}>
                    Toggle Dark Mode
                </span>
            </div>
        </nav>

        <nav className="mobile absolute z-10 bg-lightTheme-white dark:bg-darkTheme-dark-light ">
            <div className="max-w-7xl flex w-screen flex-col">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <IoMdClose className="block h-6 w-6" /> : <IoIosMenu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                        {menuItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark border border-transparent menu-item transition-all duration-300 ease-in-out`}
                                onMouseEnter={() => setHoveredIndex(item.label)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                onClick={() => { handleNavClick(item.id), toggleMenu() }}
                            >
                                <item.icon size="2rem" />
                                <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap menu-label px-1`}>
                                    {item.label}
                                </span>
                            </div>

                            
                        ))}
                        <div
                className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark  border border-transparent menu-item transition-all duration-300 ease-in-out`}
                onMouseEnter={() => setHoveredIndex("Download Resume")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => { window.open('Documents/Ankur_Patel_Resume_AI.pdf', '_blank') }}
            >
                <HiOutlineDocumentArrowDown size="2rem" />
                    <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap menu-label px-1`} >
                        Download Resume
                    </span>
            </div>

            <div
                className={`flex items-center p-2 rounded-full cursor-pointer bg-lightTheme-white-light dark:bg-darkTheme-dark menu-item border border-transparent transition-all duration-300 ease-in-out`}
                onMouseEnter={() => setHoveredIndex("ThemeChange")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onThemeToggle}
            >
                <MdOutlineDarkMode size="2rem" />
                <span className={`ml-2 text-sm text-blue-600 whitespace-nowrap menu-label px-1`}>
                    Toggle Dark Mode
                </span>
            </div>
                    </div>
                </div>
            )}
        </nav>
    </>
    );
};



