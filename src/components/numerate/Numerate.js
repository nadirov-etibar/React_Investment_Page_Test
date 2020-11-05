import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

const Numerate = (props) => {
    const styles = {
        header: {
            display: "flex",
            width: "90%",
            justifyContent: "space-between",
            margin: "0 auto"
        },

        colorGray: {
            color: "gray"
        },

        styleIcon: {
            fontSize: "14px",
            paddingLeft: "5px"
        },

        styleLink: {
            textDecoration: "none",
            color: "blue"
        }
    }

    return (
        <div style={styles.header}>
            <p style={{...styles.colorGray, textTransform: "uppercase"}}>Step {props.pageNumber} of 3</p>
            <p style={styles.colorGray}>Lost or get trouble?
                <a href="" style={styles.styleLink}> Get help
                <FontAwesomeIcon icon={faLongArrowAltRight} style={styles.styleIcon}/>
                </a>
            </p>
        </div>
    );
}

export default Numerate;