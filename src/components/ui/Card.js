import {Fragment} from "react";
import classes from './Card.module.scss';

const Card = (props, positionDetails = "", dateDetails = "") => {

    const showFooter = (show) => {
        return (
            show ? <div className={classes.card_footer}>
                {props.children}
            </div> : <div style={{display: "none"}}/>
        );
    }

    const showPosition = (showPosition, positionDetails) => {
        return (
            showPosition ? <Fragment> <h4>
                {positionDetails}
            </h4> <br/> </Fragment> : (<div style={{display: "none"}}/>)
        );
    }

    const showDate = (showDate, dateDetails) => {
        return (
            showDate ? <h5>
                {dateDetails}
            </h5> : <div style={{display: "none"}}/>
        );
    }
    return (
        <Fragment>
            <article className={classes.card}>
                <img src={props.img} alt={props.card_title}/>
                <div className={classes.card_info}>
                    <h3>{props.card_title}</h3>
                    {showPosition(props.showPosition, props.positionDetails)}
                    {showDate(props.showDetails, props.dateDetails)}
                    <p>{props.summary}</p>
                </div>
                {showFooter(props.showFooter)}
            </article>
        </Fragment>
    );
}

export default Card;