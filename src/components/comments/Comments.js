import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faQuoteLeft} from "@fortawesome/free-solid-svg-icons";


const Comments = (props) => {
    const styles = {
        mainDiv: {
            width: "100%"
        },

        bgWhite: {
            width: "80%",
            margin: "0 auto",
            backgroundColor: "white",
            paddingTop: "30px",
            paddingBottom: "20px",
            marginBottom: "20px",
            borderRadius: "5px"
        },

        textDiv: {
            width: "80%",
            fontSize: "14px",
            textAlign: "justify",
            margin: "0 auto"
        },

        textColorGray: {
            color: "gray",

        },

        textReset: {
            marginBlockStart: "0",
            marginBlockEnd: "0"
        },

        textName: {
            color: "black",
            fontWeight: "700",
            fontSize: "16px",
            marginTop: "20px",
            marginBottom: "5px"
        },

        divFooter: {
            display: "flex",
            justifyContent: "space-between"
        },

        textFooterP:{
            color: "black",
            fontSize: "20px",
            fontWeight: "700"
        },

        textFooterSpan: {
            color: "blue"
        },

        quotesDiv: {
            width: "50px",
            height: "50px",
            backgroundColor: "white",
            position: "relative",
            left: "30px",
            top: "30px",
            boxShadow: "5px 5px 10px #8888",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "content",
            borderRadius: "5px"
        },

        quotesH: {
            fontSize: "22px",
            marginBlockStart: "0",
            marginBlockEnd: "0",
            color: "blue",
        }
    }

    return (
        <div style={styles.mainDiv}>
            <div style={styles.quotesDiv}>
                <h1 style={styles.quotesH}><FontAwesomeIcon icon={faQuoteLeft} /></h1>
            </div>
            <div style={styles.bgWhite}>
                <div style={styles.textDiv}>
                    <p style={{...styles.textColorGray, ...styles.textReset}}>
                        {
                            props.pageNumber === 1?
                                "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
                                :
                            props.pageNumber === 2?
                                "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
                                : "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"
                        }
                    </p>
                    <p style={{...styles.textReset, ...styles.textName}}>
                        {
                            props.pageNumber === 1?
                                "William Mac"
                                :
                                props.pageNumber === 2?
                                    "Jodie Sears"
                                    : "Ollie Manahan"
                        }
                    </p>
                    <div style={styles.divFooter}>
                        <p style={{...styles.textColorGray, ...styles.textReset}}>
                            {
                                props.pageNumber === 1?
                                    "CO-FOUNDER, INVESTOR"
                                    :
                                    props.pageNumber === 2?
                                        "SALE AGENT"
                                        : "ART DIRECTOR"
                            }
                        </p>
                    <p style={{...styles.textReset, ...styles.textFooterP}}>U<span style={styles.textFooterSpan}>P</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;