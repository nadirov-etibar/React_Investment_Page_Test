import React from "react";
import Step from "../step/Step";
import Comments from "../comments/Comments";

const LeftSide = (props) => {
    const styles = {
        mainDiv: {
            background: "blue",
            width: "30%",
            height: "100vh",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column"
        },

        header: {
            color: "white",
            marginBlockStart: "0",
            marginBlockEnd: "0",
            textTransform: "uppercase",
            marginTop: "10px",
            marginLeft: "10%"
        },

        headerSpan: {
            color: "gray"
        }

    }

    return (
        <div style={styles.mainDiv}>
            <h1 style={styles.header}>United<span style={styles.headerSpan}>properties</span></h1>
            <Step pageNumber={props.pageNumber} />
            <Comments pageNumber={props.pageNumber} />
        </div>
    )
}

export default LeftSide;