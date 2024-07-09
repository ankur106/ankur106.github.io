import { ReactNode, useState } from "react";
import { content } from "../healpers/screens.const";
import { SCREENS_ENUM } from "../healpers/util.model";
// import { Footer } from "../content/Footer/Footer";
import { Header } from "../content/Header/Header";

function Container() {

    const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");

    isSystemDarkTheme.addEventListener('change', e => e.matches ? toggleDarkMode(true) : toggleDarkMode(false));
    const [darkMode, toggleDarkMode] = useState<boolean>(isSystemDarkTheme.matches);

    const toggleDarkModeFn = () =>{
        console.log("here");
        toggleDarkMode(e => !e);
    }


    const mapAllScreens: ReactNode = content.map((screen) => {
        const ScreenComponent = screen[SCREENS_ENUM.COMPONENT];
        return (
            <div id={screen[SCREENS_ENUM.SCREEN_NAME] as string}
                key={screen[SCREENS_ENUM.SCREEN_NAME]}
                className="w-full">
                <ScreenComponent />
            </div>
        );
    });

    return (
        <div className={`font-sans w-screen h-screen ${darkMode && 'dark'} `}>
            <div className="h-full w-full  bg-lightTheme-white text-lightTheme-text dark:darkTheme-dark-light dark:text-darkTheme-text flex">

                <Header onThemeToggle={toggleDarkModeFn}/>

                <div className="w-full h-full overflow-x-hidden overflow-y-scroll">
                    <div className='profile-container w-full h-full'>{mapAllScreens}</div>

                    <div className="absolute bottom-0 w-full">
                    {/* <Footer /> */}
                    </div>
                    
                </div>

            </div>
        </div>
    );
}


export default Container;