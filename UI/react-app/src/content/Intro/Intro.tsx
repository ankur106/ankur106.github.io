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

            {/* <div className="profile-parent"> */}
            <div className="profile-details">

                <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm{" "}
                        <span className="highlighted-text">Ankur Patel</span>
                    </span>
                </div>
                <div className="profile-details-role">
                    <span className="primary-text">
                        <h1>
                            {" "}
                            <TypeAnimation

                                sequence={[
                                    "Software Developer 💻",
                                    500,
                                    "Frontend Developer 💯",
                                    500,
                                    "Backend Developer ⚒️",
                                    500,
                                    "Gen AI Enthusiast 🧠",
                                    500,
                                    "Cloud Engineer 🤖",
                                    500,
                                ]}
                                repeat={Infinity}
                            />
                        </h1>
                        {/* <span className="profile-role-tagline">
                                    Unleashing Innovation with Code!
                                </span> */}
                    </span>
                </div>
                <div className="colz text-center flex justify-center py-5 column-5 gap-x-4">
                    <a href="https://github.com/ankur106" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <FaGithub size="25px" />
                    </a>
                    <a href="https://www.linkedin.com/in/ankur-patel106/" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <AiFillLinkedin color="#0966C2" size="25px" />
                    </a>
                    <a href="https://leetcode.com/u/Ankur_Patel/" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <SiLeetcode size="25px" />
                    </a>
                    <a href="https://medium.com/@ankurnpatel106" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <FaMedium size="25px" />
                    </a>
                    <a href="https://x.com/Ankur_patel1" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <RiTwitterXLine size="25px" />
                    </a>




                </div>
                <div className="profile-options">
                    {/* <button className="btn primary-btn" onClick={() => scrollService.scrollHandler.scrollToHireMe()}>
                                {""}
                                Hire Me{""}
                                </button> */}
                    <a href="Ankur_Patel_Resume_AI.pdf" target="_blank">
                        <button className="p-2 bg-green rounded-md text-white transition duration-300 transform hover:scale-90">Show Resume</button>
                    </a>
                </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">
                </div>
            </div>
            {/* </div> */}

        </div>
    );
}