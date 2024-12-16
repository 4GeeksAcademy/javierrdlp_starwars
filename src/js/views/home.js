import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardPlanet from "../component/CardPlanet";
import CardStarShip from "../component/CardStarShip";
import CardPeople from "../component/CardPeople";

export const Home = () => {
    const { store } = useContext(Context);

    return (
        <div className="text-center mt-5 ">
            <h1 className="mb-5 text-warning" style={{ fontFamily: "Star Wars" }}>
                STAR WARS Archives
            </h1>

            <div className="row ms-5 mt-5">
                <div className="col-3" />
                <div className="col-1">
                    <h3 className="text-primary" style={{ fontFamily: "Star Wars" }}>
                        Planets
                    </h3>
                </div>
                <div className="col-8" />
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                    <div className="scroll-container">
                        {store.planets.map((value) => (
                            <CardPlanet key={value.uid} id={value.uid} name={value.name} url={value.url} />
                        ))}
                    </div>
                </div>
                <div className="col-3" />
            </div>

            <div className="row ms-5 mt-5">
                <div className="col-3" />
                <div className="col-1">
                    <h3 className="text-danger" style={{ fontFamily: "Star Wars" }}>
                        StarShips
                    </h3>
                </div>
                <div className="col-8" />
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                    <div className="scroll-container">
                        {store.starShips.map((value) => (
                            <CardStarShip key={value.uid} id={value.uid} name={value.name} url={value.url} />
                        ))}
                    </div>
                </div>
                <div className="col-3" />
            </div>

            <div className="row ms-5 mt-5">
                <div className="col-3" />
                <div className="col-1">
                    <h3 className="text-info" style={{ fontFamily: "Star Wars" }}>
                        Characters
                    </h3>
                </div>
                <div className="col-8" />
            </div>
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                    <div className="scroll-container">
                        {store.people.map((value) => (
                            <CardPeople key={value.uid} id={value.uid} name={value.name} url={value.url} />
                        ))}
                    </div>
                </div>
                <div className="col-3" />
            </div>
        </div>
    );
};

