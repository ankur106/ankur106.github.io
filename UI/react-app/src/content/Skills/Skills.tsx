import { ScreenHeader } from "../ScreenHeader/ScreenHeader";
import './Skills.scss';

export const Skills: React.FC = () => {

    const skillsData = [
        { name: 'Java', image: 'Images/Skills/java.png' },
        { name: 'JavaScript', image: 'Images/Skills/javascript.png' },
        { name: 'TypeScript', image: 'Images/Skills/typescript.png' },
        { name: 'Python', image: 'Images/Skills/python.png' },
        { name: 'SQL', image: 'Images/Skills/sql.png' },
        { name: 'Angular', image: 'Images/Skills/angular.png' },
        { name: 'RxJS', image: 'Images/Skills/rxjs.png' },
        { name: 'NGXS', image: 'Images/Skills/ngxs.png' },
        { name: 'React', image: 'Images/Skills/react.png' },
        { name: 'Redux', image: 'Images/Skills/redux.png' },
        { name: 'Sass', image: 'Images/Skills/scss.png' },
        { name: 'Flask', image: 'Images/Skills/flask.png' },
        { name: 'Node.js', image: 'Images/Skills/node.png' },
        // { name: 'Spring Boot', image: 'Images/Skills/spring.png' },
        { name: 'LlamIndex', image: 'Images/Skills/llamaindex.png' },
        { name: 'LangChain', image: 'Images/Skills/langchain.png' },
        { name: 'AWS', image: 'Images/Skills/aws.png' },
        { name: 'Docker', image: 'Images/Skills/docker.png' },
        { name: 'Kafka', image: 'Images/Skills/kafka.png' },
        { name: 'Elastic Search', image: 'Images/Skills/elastic.png' },
        { name: 'Postgers', image: 'Images/Skills/postgres.png' },
        { name: 'Mongo DB', image: 'Images/Skills/mongo.png' },
        { name: 'Git', image: 'Images/Skills/git.png' },
        { name: 'Postman', image: 'Images/Skills/postman.png' },
        { name: 'Swagger', image: 'Images/Skills/swagger.png' },












    ];

    return (
        <div className="dark:bg-darkTheme-dark-light dark:text-darkTheme-text w-full">
            <ScreenHeader title="Skills" />

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3 items-center justify-items-center py-[5%] px-[5%]">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-2 bg-white rounded-lg shadow-md w-36 h-48 bg-lightTheme-white-light dark:bg-darkTheme-dark">
                        <div className="mb-2 flex justify-center items-center">
                            <img src={skill.image} alt={skill.name} className="w-12 h-24 object-contain" />
                        </div>
                        <span className="text-xs text-center">{skill.name}</span>
                    </div>
                ))}
            </div>
            {/* Temporary Assing AWS Certi Here */}
            <div className="py-10 flex justify-center">

                <div className="cursor-pointer hover:scale-125 transition duration-500 ">
                    <a href="https://www.credly.com/badges/0c8348b7-0d9d-4d05-af95-e2c9ec0b608a/public_url" target="_blank">
                        <img src="Images/Skills/aws-solution.png" className="w-48 h-48 object-contain" />

                    </a>

                </div>
            </div>
        </div>
    );
}