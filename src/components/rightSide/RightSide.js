import React, {useState} from 'react';
import Numerate from "../numerate/Numerate";
import Footer from "../footer/Footer";
import RegisterPage from "../registerPage/RegisterPage";

const RightSide = (props) => {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const countries = [
        {
            id: 1,
            label: "Azerbaijan",
            value: "Azerbaijan"
        },
        {
            id: 2,
            label: "Ukraine",
            value: "Ukraine"
        },
        {
            id: 3,
            label: "Turkey",
            value: "Turkey"
        },
        {
            id: 4,
            label: "Pakistan",
            value: "Pakistan"
        },
        {
            id: 5,
            label: "Israel",
            value: "Israel"
        }
    ]

    const [investment, setInvestment] = useState({
        min: 10000,
        max: 1000000,
        current: 10000
    })

    let changeName = (e) => {
        let name = e.target.value;
        setName(name);
    }

    let changeNumber = (e) => {
        let number = e.target.value;
        setNumber(number);
    }

    let changeEmail = (e) => {
        let email = e.target.value;
        setEmail(email);
    }

    let changeCountry = (e) => {
        let country = e.target.value;
        setCountry(country);
    }

    let changeInvest = (e) => {
        let invest = {...investment};
        // if (e.target.value > invest.min){
            invest["current"] = e.target.value;
        // }

        // else if (e.target.value < invest.min){
        //     invest["current"] = 10000
        // }
        setInvestment(invest);
    }

    const styleMainDiv = {
        width: "70%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    }

    return (
        <div style={styleMainDiv}>
            <Numerate
                pageNumber={props.pageNumber}
            />
            <RegisterPage
                pageNumber={props.pageNumber}
                changeName={changeName}
                changeNumber={changeNumber}
                changeEmail={changeEmail}
                changeCountry={changeCountry}
                changeInvest={changeInvest}
                name={name}
                number={number}
                email={email}
                country={country}
                countries={countries}
                investment={investment}
            />
            <Footer
                pageNumber={props.pageNumber}
                previousPage={props.previousPage}
                nextPage={props.nextPage}
            />
        </div>
    );
}

export default RightSide;