// import { object } from "prop-types"; // Check this later on
import { Subject } from 'rxjs';
import { content } from "./screens.const";
import { SCREENS_ENUM } from "./util.model";

export default class scrollService{
    static scrollHandler = new scrollService();
    static currentScreenBroadCaster : Subject<any> = new Subject();
    static currentScreenFadeIn = new Subject()

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewPort);
    } 
    scrollToHireMe = () =>{
        let contactMeScreen =  document.getElementById("CONTACT ME")
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: "smooth"});
    }
    scrollToHome = () =>{
        let HomeScreen =  document.getElementById("HOME")
        if(!HomeScreen) return;
        HomeScreen.scrollIntoView({behavior: "smooth"});
    }
    isElementInView=(elem : HTMLElement, type : 'partial' | 'complete')=>{
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elementBottom = rec.bottom;
        let partiallyVisible = elementTop < window.innerHeight && elementBottom >= 0;
        let completelyVisible = elementTop >=0 && elementBottom <= window.innerHeight;
        switch(type){
            case "partial":
                return partiallyVisible;
            case "complete":
                return completelyVisible;
            default:
                return false;
        }
    }
    checkCurrentScreenUnderViewPort = (event : any) =>{
        if(!event || Object.keys(event).length < 1) return;
        for(let screen of content){
            let screenFromDOM = document.getElementById(screen[SCREENS_ENUM.SCREEN_NAME] as string);
            if(!screenFromDOM) continue;

            let fullyVisible = this.isElementInView(screenFromDOM, "complete");
            let partiallyVisible = this.isElementInView(screenFromDOM, "partial");

           
                if(fullyVisible || partiallyVisible){
                    scrollService.currentScreenBroadCaster.next({
                        screenInView: screen[SCREENS_ENUM.SCREEN_NAME],
                    });
                    break;
                }

            
        }
    }
}