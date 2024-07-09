import scrollService from "../../healpers/scrollService";
import "./Footer.scss";
import { BsPerson } from "react-icons/bs";

export const Footer: React.FC = () => {
    return (
        <div className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text footer-container w-full flex opacity-90">
            <div className="grow text-center"> let's get in touch via linkedin</div>
            <div className="scroll-container mx-[10px] my-[4px]">
                <button
                    className="btn-scroll w-10 h-10 bg-green cursor-pointer  border-0 rounded-lg" onClick={() => scrollService.scrollHandler.scrollToHome()}
                >
                    {" "}
                    {/* <i className="fa fa-arrow-up lightTheme-text-light"></i> */}
                    <BsPerson/>
                </button>
            </div>
        </div>
    );
}