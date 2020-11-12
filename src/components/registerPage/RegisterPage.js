import React from 'react';
import Radium from "radium";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLongArrowAltRight} from "@fortawesome/free-solid-svg-icons";

const RegisterPage = (props) => {
    const styles = {
        mainDiv: {
            width: "70%",
            marginLeft: "5%",
        },

        inputName: {
            border: "none",
            borderBottom: "1px solid gray",
            outline: "none",
            width: "350px",
            ':focus': {
                borderBottom: "1px solid blue"
            }
        },

        inputEmail:{
            width: "100%",
            border: "none",
            borderBottom: "1px solid gray",
            outline: "none",
            ':focus': {
                borderBottom: "1px solid blue"
            }
        },

        nameDiv: {
            display: "flex",
            justifyContent: "space-between"
        },

        colorGray: {
            color: "gray"
        },

        selectStyle: {
            width: "100%",
            border: "none",
            borderBottom: "1px solid gray",
            outline: "none",
            backgroundColor: "transparent",
            fontSize: "18px"
        },

        colorBlue: {
            color: "blue",
            cursor: "pointer"
        },

        styleIcon: {
            fontSize: "14px",
            paddingLeft: "5px"
        },

        styleInputRange: {
            width: "100%",
            marginTop: "50px"
        }
    }

    if (props.pageNumber === 1){
        return (
            <div style={styles.mainDiv}>
                <h1>Сontact details</h1>
                <p style={{...styles.colorGray, marginBottom: "50px"}}>Welcome to United Properties, we are glad to see you! Let’s get started by letting us know a little bit about you</p>
                <p style={styles.colorGray}>First Name</p>
                <div style={styles.nameDiv}>
                    <input type="text" key="1" style={styles.inputName} onChange={(e) => props.changeName(e)} value={props.name}/>
                    <input type="number" key="2" style={styles.inputName} onChange={(e) => props.changeNumber(e)} value={props.number}/>
                </div>
                <p style={styles.colorGray}>E-mail address</p>
                <input type="email" style={styles.inputEmail} onChange={(e) => props.changeEmail(e)} value={props.email}/>
                <p style={styles.colorGray}>Country</p>
                <select key="3" style={styles.selectStyle} value={props.country} onChange={(e) => props.changeCountry(e)}>
                    {props.countries.map((option) => (
                        <option key={option.id} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <h4 style={{marginTop: "50px"}}>Privacy policy</h4>
                <p style={styles.colorGray}>
                    We know you care about how your personal information is used and shared, so we take your privacy seriously
                </p>
                <p style={styles.colorBlue}>Expand privacy policy
                <FontAwesomeIcon icon={faLongArrowAltRight} style={styles.styleIcon}/>
                </p>
            </div>
        );
    }

    if (props.pageNumber === 2){
        return (
            <div style={styles.mainDiv}>
                <h1>Investment plans</h1>
                <p>Let us know about your investment plans. This will help us get you to the right expert who will help you further</p>
                <h3>How much are you planning to invest in this year?</h3>
                <div style={styles.nameDiv}>
                    <div>
                        <p>From</p>
                        <input key="4" type="text" style={styles.inputName} defaultValue={props.investment.min} />
                    </div>
                    <div>
                        <p>To</p>
                        <input key="5" type="text" style={styles.inputName} value={props.investment.current} onChange={(e) => props.changeInvest(e)} />
                    </div>
                </div>
                <input
                    type="range" min={props.investment.min}
                    value={props.investment.current.length === 0? 10000: props.investment.current}
                    max={props.investment.max} style={styles.styleInputRange}
                    step={10000}
                    onInput={(e) => props.changeInvest(e)}
                    onChange={(e) => props.changeInvest(e)}
                />

                <h3>Are you an accredited investor?</h3>
                <div>
                    <div>
                        <input type="radio"/>
                        <span>Yes</span>
                    </div>
                    <div>
                        <input type="radio"/>
                        <span>No</span>
                    </div>
                </div>
            </div>
        );
    }

    if (props.pageNumber === 3){
        return (
            <div>

            </div>
        );
    }

}

export default Radium(RegisterPage);