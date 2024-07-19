import { ScreenHeader } from "../ScreenHeader/ScreenHeader";
import './Projects.scss';

export const Projects:React.FC = ()=>{

    return(
        <div id="Projects" className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text w-full h-screen">
            <ScreenHeader title="Projects"/>
        </div>
    );
}