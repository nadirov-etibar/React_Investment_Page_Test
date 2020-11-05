import React from 'react';

const Step = (props) => {
    const styles = {
        mainDiv: {
            marginLeft: "10%"
        },

        whiteBorder: {
            width: "50px",
            height: "50px",
            border: "1px solid white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },

        centerDiv: {
            width: "30px",
            height: "30px",
            border: "1px solid white",
            backgroundColor: "white",
        },

        parentDiv: {
            width: "50px",
            height: "50px",
            border: "1px solid gray"
        },

        steps: {
            width: "3px",
            height: "10px",
            border: "1px solid white",
            margin: "0 auto",
            backgroundColor: "white",
            marginTop: "2px",
            marginBottom: "2px"
        },

        stepsWidth: {
            width: "52px"
        },

        stepsFlex: {
            display: "flex",
        },

        pDetails: {
            marginLeft: "5%",
            color: "white"
        }
    }

    return (
        <div style={styles.mainDiv}>
            <div style={styles.stepsFlex}>
                <div style={styles.whiteBorder}>
                    <div style={styles.centerDiv}></div>
                </div>
                <p style={styles.pDetails}>Contact details</p>
            </div>
            <div style={styles.stepsWidth}>
                <div style={styles.steps}></div>
                <div style={styles.steps }></div>
            </div>
            <div style={styles.stepsFlex}>
                <div style={props.pageNumber === 2 || props.pageNumber === 3? styles.whiteBorder: styles.parentDiv}>
                    <div style={props.pageNumber === 2 || props.pageNumber === 3? styles.centerDiv: {display: "none"}}></div>
                </div>
                <p style={styles.pDetails}>Contact details</p>
            </div>
            <div style={styles.stepsWidth}>
                <div style={styles.steps}></div>
                <div style={styles.steps }></div>
            </div>
            <div style={styles.stepsFlex}>
                <div style={props.pageNumber === 3? styles.whiteBorder: styles.parentDiv}>
                    <div style={props.pageNumber === 3? styles.centerDiv: {display: "none"}}></div>
                </div>
                <p style={styles.pDetails}>Contact details</p>
            </div>
        </div>
    );
}

export default Step;