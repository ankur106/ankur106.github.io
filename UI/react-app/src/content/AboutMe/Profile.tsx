
import { ScreenHeader } from '../ScreenHeader/ScreenHeader';
import './Profile.scss';
export const Profile: React.FC = () => {


    return (
        <div className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text w-full flex flex-col justify-center items-center py-10" >
            <div className="about-me-parent h-full w-[80%] max-w-[1200px]">
                <ScreenHeader
                    title={"About Me"}
                    subHeading={
                        "Leveraging New Technologies: AI Agents, Cloud Computing, Serverless, Full Stack"
                    }
                />
                <div className='py-[5%] flex flex-col w-full items-center'>
                <div className="about-me-card flex h-[650px] w-fit bg-lightTheme-white-light dark:bg-darkTheme-dark">
                    <div className="about-me-profile"></div>
                    <div className="about-me-details flex flex-col p-[20px] w-[60%] text-justify ">
                        <div className="about-me-description text-base font-mono">
                        Experienced software engineer adept in developing scalable multi-tenant applications using Angular, TypeScript, NGXS, and React.js. Skilled in back-end development with Node.js, Flask, and Java, Spring Boot, leveraging AWS, Docker, and NGINX. Proficient in Agile methodologies, actively participating in Sprint planning, code reviews, and cross-functional collaboration. Notable achievements include implementing SSO, RBAC, and developing an internal tool. Passionate about leveraging technologies for innovative solutions. AWS Certified Solution Architect. Committed to continuous learning.
                        </div>

                        <div className="about-me-options">
                            <a href="https://github.com/ankur106" target="_blank">
                                <button className="p-2 bg-orange-light rounded-md transition duration-300 transform hover:scale-9 relative z-10">Github</button>
                            </a>
                        </div>

                    </div>
                </div></div>
            </div>
        </div>
    );
}