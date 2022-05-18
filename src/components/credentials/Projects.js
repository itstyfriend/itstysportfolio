import {Fragment} from "react";
import image1 from "../../images/ecommerce/shop.png";
import image2 from "./../../images/image.png";
import classes from './Projects.module.scss';
import Card from "../ui/Card";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas, fab);


const Projects = () => {
    const handleEcommerceRedirect = () => {
        window.open("https://www.github.com");
    }

    const handlePortfolioRedirect = () => {
        window.open("https://www.github.com");
    }

    return (
        <Fragment>
            <section id={"Projects"} className={classes.cards}>
                <div className={classes.title}>
                    <h1>Course & Personal Projects</h1>
                    <div className={classes.container_info}>
                        <h3>Certificates</h3>
                        <ul>
                            <li>
                                CompTia Security+
                            </li>
                            <li>
                                React - The Complete Guide (Hooks, React Router, Redux) by Maximilian
                                Schwarzmuller (Udemy)
                            </li>
                            <li>
                                MERN Stack React Node Ecommerce from Scratch to Deployment by Ryan
                                Dhungel
                            </li>
                            <li>
                                MERN Stack Web Development with Ultimate Authentication by Ryan Dhungel (Udemy)
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.cards_center}>
                    <Card
                        img={image1}
                        card_title={"MERN Stack Ecommerce Project - Udemy"}
                        showFooter={true}
                        showPosition={false}
                        showDetails={false}
                        summary={"Ecommerce site created by taking MERN Stack React Node Ecommerce from Scratch to Deployment by Ryan Dhungel (Udemy). Full stack development course utilizing Node Js, Mongo DB, Express, and React. Manage orders, add categories, add products through admin dashboard. Protected routes for admin users. Regular users (customers) can view purchase history and checkout items through the store. Ecommerce site utilizes BrainTree to process payments. Users can search for items using the search bar or filter items. Ecommerce site also provides users with best sellers, new arrivals, and related products."}>
                        <span><FontAwesomeIcon icon="fa-brands fa-github" onClick={handleEcommerceRedirect}/></span>
                        <span><FontAwesomeIcon icon="fa-brands fa-react" /></span>
                        <span><FontAwesomeIcon icon="fa-brands fa-node" /></span>
                        <span><FontAwesomeIcon icon="fa-solid fa-database" /></span>
                    </Card>
                    <Card
                        img={image2}
                        card_title={"Portfolio Project"}
                        showFooter={true}
                        showPosition={false}
                        showDetails={false}
                        summary={"Portfolio project built by using react and netlify. Highlights skills, projects, and work history. Provides visitors to links to project repositories."}>
                        <span><FontAwesomeIcon icon="fa-brands fa-github" onClick={handlePortfolioRedirect}/></span>
                    </Card>
                </div>
            </section>
        </Fragment>
);
}

export default Projects;