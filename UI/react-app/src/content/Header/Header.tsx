import { BsPerson } from "react-icons/bs";
import { useState } from "react";
import { IconType } from "react-icons";
import { GoHome } from "react-icons/go";
import { LiaUserGraduateSolid } from "react-icons/lia";
import { LiaBrainSolid } from "react-icons/lia";
import { PiLaptopDuotone } from "react-icons/pi";
import { GiAchievement } from "react-icons/gi";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";


interface MenuItem {
    icon: string | IconType;
    label: string;
    color?: string;
    id: string
}

interface HeaderProps {
    onThemeToggle: () => void;
  }

export const Header: React.FC<HeaderProps> = ({onThemeToggle}) => {
    const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { icon: GoHome, label: 'Home', id: 'Home' },
        { icon: BsPerson, label: 'Profile', id: 'Profile' },
        { icon: LiaUserGraduateSolid, label: 'Education', id: 'Education' },
        { icon: LiaBrainSolid, label: 'Skills', id: 'Skills' },
        { icon: PiLaptopDuotone, label: 'Work Experience', id: 'WorkEx' },
        { icon: CgWebsite, label: 'Projects', id: 'Projects' },
        { icon: GiAchievement, label: 'Achievements', id: 'Achievements' },
    ];

    const handleNavClick = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <nav className="flex flex-col items-start space-y-2 bg-gray-100 rounded-lg justify-center w-0 z-10 dark:text-white relative left-[10px]">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className={`flex items-center p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-lightTheme-white-light dark:bg-darkTheme-dark `}
                    onMouseEnter={() => setHoveredIndex(item.label)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => handleNavClick(item.id)}
                >
                    <item.icon size="2rem" />
                    {/* <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 `} /> */}
                    {hoveredIndex === item.label && (
                        <span className="ml-2 text-sm text-blue-600 whitespace-nowrap">
                            {item.label}
                        </span>
                    )}
                </div>
            ))}
            <div
                className={`flex items-center p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-lightTheme-white-light dark:bg-darkTheme-dark `}
                onMouseEnter={() => setHoveredIndex("Download Resume")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {window.open('Ankur_Patel_Resume_AI.pdf', '_blank')}}
            >
                <HiOutlineDocumentArrowDown size="2rem" />
                {/* <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 `} /> */}
                {hoveredIndex === "Download Resume" && (
                    <span className="ml-2 text-sm text-blue-600 whitespace-nowrap" >
                        Download Resume
                    </span>
                )}
            </div>

            <div
                className={`flex items-center p-2 rounded-full cursor-pointer transition-all duration-300 ease-in-out bg-lightTheme-white-light dark:bg-darkTheme-dark `}
                onMouseEnter={() => setHoveredIndex("ThemeChange")}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={onThemeToggle}
            >
                <MdOutlineDarkMode size="2rem" />
                {/* <FontAwesomeIcon icon={item.icon} className={`w-8 h-8 `} /> */}
                {hoveredIndex === "ThemeChange" && (
                    <span className="ml-2 text-sm text-blue-600 whitespace-nowrap">
                        Toggle Dark Mode
                    </span>
                )}
            </div>
            

        </nav>
    );
};



