import React, {Fragment, useEffect, useState} from "react";
import classes from './Header.module.scss'
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import Banner from "./Banner";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    }
    const [size, setSize] = useState({
        width: undefined,
        height: undefined
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    useEffect(() => {
        if (size.width > 992 && menuOpen) {
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);


    const handleClose = () => {
        setMenuOpen(false);
    }

    return (
        <Fragment>
            <header className={classes.header}>
                <div className={classes.header_content}>
                    <div className={classes.header_content_logo}>
                        <h2>Ty's Portfolio</h2>
                    </div>
                    <nav className={`${classes.header_content_nav} ${menuOpen ? classes.isMenu : ""}`}>
                        <ul>
                            <li>
                                <a href="#" onClick={handleClose}>Home</a>
                            </li>
                            <li>
                                <a href="#Work" onClick={handleClose}>Work Experience</a>
                            </li>
                            <li>
                                <a href="#Projects" onClick={handleClose}>Projects</a>
                            </li>
                        </ul>
                    </nav>
                    <div className={classes.header_content_toggle}>
                        {!menuOpen ? (<BiMenuAltRight onClick={menuToggleHandler}/>) :
                            (<AiOutlineClose onClick={menuToggleHandler}/>)}
                    </div>
                </div>
            </header>
            <Banner/>
        </Fragment>
    );
}

export default Header;