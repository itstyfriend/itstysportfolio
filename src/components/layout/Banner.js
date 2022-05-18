import {Fragment} from "react";
import image1 from "../../images/IMG_20200621_113521_320.jpg";
import classes from "./Banner.module.scss";
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

library.add(fas, fab);

const Banner = () => {
    const handleLinkedin = () => {
        window.open("https://linkedin.com/in/tyrell-friend-308a43108");
    }

    const handleGithub = () => {
        window.open("https://www.github.com");
    }

    return (
        <Fragment>
            <div className={classes.banner_container}>
                <div className={classes.banner_item_main}>
                    <img src={image1} alt=""/>
                </div>
                <div className={classes.banner_item}>
                    <h1 className={classes.banner_introduction}>Hello, my name is Tyrell Friend.</h1>
                    <h2>Skills</h2>
                    <p>
                        Work Experience: Java, JavaFx, Docker, Jenkins,
                        Groovy, Angular, HTML/CSS, Python, and MySQL.
                    </p>
                    <p>
                        Course Work: Android, C++, React, and Java.
                    </p>
                    <p> Contact and Projects Below</p>
                    <span><FontAwesomeIcon icon="fa-brands fa-linkedin" onClick={handleLinkedin}/></span>
                    <span><FontAwesomeIcon icon="fa-brands fa-github" onClick={handleGithub}/></span>
                </div>
            </div>
            <div className={classes.icons_container}>
                <div className={classes.icon_1}>
                    <span><FontAwesomeIcon icon="fa-brands fa-docker"/></span>
                </div>
                 <div className={classes.icon_2}>
                     <span><FontAwesomeIcon icon="fa-brands fa-java"/></span>
                </div>
                 <div className={classes.icon_3}>
                     <span><FontAwesomeIcon icon="fa-brands fa-angular"/></span>
                </div>
                 <div className={classes.icon_4}>
                     <span><FontAwesomeIcon icon="fa-brands fa-html5"/></span>
                </div>
                 <div className={classes.icon_5}>
                     <span><FontAwesomeIcon icon="fa-brands fa-css3"/></span>
                </div>
                 <div className={classes.icon_6}>
                     <span><FontAwesomeIcon icon="fa-brands fa-jenkins"/></span>
                </div>
                 <div className={classes.icon_7}>
                     <span><FontAwesomeIcon icon="fa-brands fa-react"/></span>
                </div>
                 <div className={classes.icon_8}>
                     <span><FontAwesomeIcon icon="fa-brands fa-android"/></span>
                </div>
            </div>
        </Fragment>
    );
}

export default Banner;