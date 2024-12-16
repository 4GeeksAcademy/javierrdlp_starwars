import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoSS = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOneStarShip(params.shipId);
    }, []); // actions, params.shipId

    const starShip = store.oneStarShip;


    if (!starShip.properties) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }

    return (
        <div className="text-center mt-5 ">
            <img
                src={`https://starwars-visualguide.com/assets/img/starships/${params.shipId}.jpg`}
                alt="Starship"
                onError={(e) => {
                    e.target.onerror = null; // Evita un bucle infinito
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
            />
            <h1 className="text-danger">{starShip.properties?.model}</h1>
            <p className="text-danger">Fabricante: {starShip.properties?.manufacturer}</p>
            <p className="text-danger">Clase: {starShip.properties?.starship_class}</p>
        </div>

    );
};

export default InfoSS;