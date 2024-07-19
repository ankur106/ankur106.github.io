import { FaGithub } from "react-icons/fa6";
import { ScreenHeader } from "../ScreenHeader/ScreenHeader";
import './Contact.scss';
import { AiFillLinkedin } from "react-icons/ai";
import { RiTwitterXLine } from "react-icons/ri";
export const Contact: React.FC = () => {

    return (
        <div className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text w-full">
            <ScreenHeader title="Contact" />

            <div className="flex flex-col items-center pt-8 pb-16">
                
                <div className="text-3xl text-mono"> <a href="mailto:ankurpatel@asu.edu">ankurpatel@asu.edu</a></div>

            </div>



            <div className="w-full bg-lightTheme-white-light dark:bg-darkTheme-dark flex flex-col items-center">
                <div className=" text-center flex justify-center py-5 column-5 gap-x-4 max-w-[250px] min-w-[250px]">
                    <a href="https://github.com/ankur106" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <FaGithub size="25px" className="text-lightTheme-text dark:text-darkTheme-text" />
                    </a>
                    <a href="https://www.linkedin.com/in/ankur-patel106/" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <AiFillLinkedin color="#0966C2" size="25px" />
                    </a>
                    <a href="https://x.com/Ankur_patel1" target="_blank" className="transition duration-300 transform hover:scale-110">
                        <RiTwitterXLine size="25px" className="text-lightTheme-text dark:text-darkTheme-text" />
                    </a>

                </div>
                <div className="text-xs py-[15px]">Made with React and Tailwand, checkout website code <a href="https://github.com/ankur106/ankur106.github.io/tree/master/UI/react-app" target="_blank" className="cursor-pointer text-blue-600 visited:text-purple-600">here</a></div>

            </div>
        </div>
    );
}