import { ScreenHeader } from "../ScreenHeader/ScreenHeader";
interface IEducationCardProps {
    logo: string;
    university: string;
    degree: string;
    major: string;
    dateRange: string;
    coursework: string;
}

const EducationCard: React.FC<IEducationCardProps> = ({ logo, university, degree, major, dateRange, coursework }) => {
    return (
        <div className="w-full max-w-md  bg-white p-20 bg-lightTheme-white-light dark:bg-darkTheme-dark">
            <div className="flex flex-col items-center mb-4">
                <img className="h-48 w-auto mb-4" src={logo} alt={`${university} logo`} />
                <h2 className="text-xl font-semibold text-center">{university}</h2>
            </div>
            <div className="text-center">
                <p className="text-lg font-medium text-red-600">{degree} 
                {/* <span className="text-xs align-top">↗</span> */}
                </p>
                <p className="text-gray-600 italic">({major})</p>
                <p className="text-sm text-gray-600 mt-2 mb-4">{dateRange}</p>
            </div>
            <div>
                <h3 className="text-sm font-semibold mb-2">Relevant Coursework:</h3>
                <p className="text-sm text-gray-600">{coursework}</p>
            </div>
        </div>
    );
};




export const Education: React.FC = () => {

    return (
        <div id="Education" className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text w-full block py-10">
            <ScreenHeader title="Education" />

            <div className="flex justify-center flex-wrap gap-10 py-[5%]">
                <EducationCard
                    logo="Images/Education/ASU-logo.png"
                    university="Arizona State University"
                    degree="Master of Science"
                    major="Computer Science"
                    dateRange="August 2023 - Present"
                    coursework="Cloud Computing, Statistical Machine Learning, Data Mining, Distribute Database System, Knowledge Representation, Information Assurance and Security"
                />
                <EducationCard
                    logo="Images/Education/BVM-logo.png"
                    university="Birla Vishvakarma Mahavidyalaya"
                    degree="Bachelor of Technology"
                    major="Computer Engineering"
                    dateRange="August 2018 - June 2022"
                    coursework="Data Structure and Algorithm, Advanced Java, Operating Systems, Computer Networks, Computer Organization, Theory of Automata, Compiler Design, Software Security"
                />
            </div>
        </div>
    );
}


