import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

const Footer = (props) => {
    const styles = {
        mainDiv: {
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            margin: "0 auto"
        },

        previous: {
            color: "blue",
            textDecoration: "none",
            cursor: "pointer"
        },

        styleIcon: {
            fontSize: "14px",
            paddingRight: "5px"
        },

        styleSkipBtn: {
            backgroundColor: "gray",
            color: "blue",
            border: "1px solid gray",
            padding: "10px",
            marginRight: "10px"
        },

        styleNextBtn: {
            backgroundColor: "blue",
            color: "white",
            border: "1px solid blue",
            padding: "10px",
            width: "92.94px",
            height: "37px"
        },

        styleIconRight: {
            fontSize: "11px",
            paddingLeft: "5px"
        }
    }

    return (
        <div>
            <div style={styles.mainDiv}>
            <div>
                <p style={styles.previous} onClick={props.previousPage}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} style={styles.styleIcon}/> {props.pageNumber === 1 ? "Back to the homepage" : "Back to the previous page"}
                </p>
            </div>
            <div>
                <button style={styles.styleSkipBtn}>Skip for now</button>
                <button style={styles.styleNextBtn} onClick={props.nextPage}>
                    {props.pageNumber === 3 ? "Finish" : "Next step"}
                    <FontAwesomeIcon icon={faLongArrowAltRight} style={styles.styleIconRight}/>
                </button>
            </div>
            </div>
        </div>
    );
}

export default Footer;