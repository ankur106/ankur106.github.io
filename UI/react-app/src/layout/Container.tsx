import { ReactNode, useState } from "react";
import { content } from "../healpers/screens.const";
import { SCREENS_ENUM } from "../healpers/util.model";
// import { Footer } from "../content/Footer/Footer";
import { Header } from "../content/Header/Header";
import { InView } from "react-intersection-observer";

function Container() {

    const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    isSystemDarkTheme.addEventListener('change', e => e.matches ? toggleDarkMode(true) : toggleDarkMode(false));
    const [darkMode, toggleDarkMode] = useState<boolean>(isSystemDarkTheme.matches);

    const [activeSection, setActiveSection] = useState<String>("Intro");

    const toggleDarkModeFn = () =>{
        toggleDarkMode(e => !e);
    }


    const mapAllScreens: ReactNode = content.map((screen) => {
        const ScreenComponent = screen[SCREENS_ENUM.COMPONENT];
        return (
            <InView as="div"  threshold = {0.6} id={screen[SCREENS_ENUM.SCREEN_NAME] as string}
                key={screen[SCREENS_ENUM.SCREEN_NAME]} onChange={() => {setActiveSection(screen[SCREENS_ENUM.SCREEN_NAME] as string)}}>
                <ScreenComponent />
            </InView>
        );
    });

    return (
        <div className={`font-sans w-screen h-screen ${darkMode && 'dark'}`}>
            <div className="h-full w-full  bg-lightTheme-white text-lightTheme-text dark:bg-darkTheme-dark-light dark:text-darkTheme-text flex">

                <Header onThemeToggle={toggleDarkModeFn} activeSection={activeSection}/>

                <div >
                    <div className='profile-container w-screen h-screen overflow-x-hidden overflow-y-scroll'>{mapAllScreens}</div>

                    <div className="absolute bottom-0 w-full">
                    {/* <Footer /> */}
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default Container;