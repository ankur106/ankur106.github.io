import './Intro.scss';
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { TypeAnimation } from 'react-type-animation';
import { FaMedium } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
export const Intro: React.FC = () => {
    return (
        <div className="text-white dark:text-darkTheme-text w-full h-screen intro-container flex relative items-center text-center justify-center" id='Home'>

            <div className="profile-details flex flex-col w-[70%] p-[20px] opacity-75 items-center">

                <div className="profile-details-name max-w-[250px] min-w-[250px]">
                    <span className="primary-text font-serif">
                        <span className="highlighted-text">Ankur Patel</span>
                    </span>
                </div>
                <div className="profile-details-role flex flec-col my-[20px]  max-w-[500px] min-w-[500px]">
                    <span className="primary-text font-mono">
                        <h1>
                            {" "}
                            <TypeAnimation

                                sequence={[
                                    "I'm a Software Developer 💻",
                                    500,
                                    "I'm a Frontend Developer 💯",
                                    500,
                                    "I'm a Backend Developer ⚒️",
                                    500,
                                    "I'm a Gen AI Enthusiast 🧠",
                                    500,
                                    "I'm a Cloud Engineer 🤖",
                                    500,
                                ]}
                                repeat={Infinity}
                            />
                        </h1>
                    </span>
                </div>
                <div className=" text-center flex justify-center py-5 column-5 gap-x-4 max-w-[250px] min-w-[250px]">
                    <a href="https://github.com/ankur106" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <FaGithub size="25px" color='white' />
                    </a>
                    <a href="https://www.linkedin.com/in/ankur-patel106/" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <AiFillLinkedin color="#0966C2" size="25px" />
                    </a>
                    <a href="https://leetcode.com/u/Ankur_Patel/" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <SiLeetcode size="25px"  color='white'/>
                    </a>
                    <a href="https://medium.com/@ankurnpatel106" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <FaMedium size="25px" color='white'/>
                    </a>
                    <a href="https://x.com/Ankur_patel1" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <RiTwitterXLine size="25px" color='white'/>
                    </a>




                </div>
                {/* <div className="profile-options text-lightTheme-white dark:text-lightTheme-white">
                    
                    <a href="Ankur_Patel_Resume_AI.pdf" target="_blank">
                        <button className="p-2 bg-orange-light rounded-md transition duration-300 transform hover:scale-9 relative z-10">Show Resume</button>
                    </a>
                </div> */}
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>

        </div>
    );
}