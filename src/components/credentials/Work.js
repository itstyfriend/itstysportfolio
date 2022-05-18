import {Fragment} from "react";
import classes from './Work.module.scss'
import image2 from "../../images/Keyboard.JPG";
import image1 from "../../images/pexels-nimit-kansagra-4509131.jpg";
import image3 from "../../images/pexels-pixabay-270632.jpg"
import Card from "../ui/Card";
const Work = () => {
    return (
        <Fragment>
            <section id={"Work"} className={classes.cards}>
                <div className={classes.title}>
                    <h1>Work Experience</h1>
                </div>
                <div className={classes.cards_center}>
                    <Card
                        img={image1}
                        card_title={"Tactical Engineering and Analysis"}
                        showFooter={false}
                        showPosition={true}
                        showDetails={true}
                        positionDetails={"Junior Software Engineer"}
                        dateDetails={"February 2020 - March 2022"}
                        summary={"Added additional software features for an automated test tool. Allowing testers to simulate scenarios for a weapons defense system (Java Application). Created unit tests using JUnit and Mockito for automated test application. Resolved software defects for automated test application. Delivered new versions of the automate test application to testers."}/>
                    <Card
                        img={image2}
                        card_title={"Tactical Engineering and Analysis Cont'd"}
                        showFooter={false}
                        showPosition={true}
                        showDetails={true}
                        positionDetails={"Junior Software Engineer"}
                        dateDetails={"February 2020 - March 2022"}
                        summary={"Documented and updated setup configuration for new hires. Helped mentor interns. Conducted code reviews. Experience with creating Docker, Jenkins, and Groovy files in order to build DevOps build pipeline. Build pipeline helps automatically build artifacts after the code was pushed to the repository."}/>
                    <Card
                        img={image3}
                        card_title={"CxLoyalty, Glen Allen VA"}
                        showFooter={false}
                        showPosition={true}
                        showDetails={true}
                        positionDetails={"Information Technology Intern"}
                        dateDetails={"July 2019 - February 2020"}
                        summary={"Created front end web pages (Angular) based on request from business administrators. Solved defects for front-end (Angular & HTML CSS (legacy)) and (Java) back-end web applications. Gained knowledge of how to form basic MySQL statements. Exposed JIRA and gained an understanding of the working relationship between business administration, web developers, quality assurance, and database teams."}/>
                </div>
            </section>
        </Fragment>
    );
}

export default Work;