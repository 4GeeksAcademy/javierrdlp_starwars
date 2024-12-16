import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoCh = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOnePerson(params.personId);
    }, []); 

    const person = store.onePerson;


    if (!person.properties) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }

    return (
        <div className="text-center mt-5">
            <img
                src={`https://starwars-visualguide.com/assets/img/characters/${params.personId}.jpg`}
                alt="Person"
                onError={(e) => {
                    e.target.onerror = null; // Evita un bucle infinito
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                }}
            />
            <h1 className="text-info">{person.properties?.name}</h1>
            <p className="text-info">Genero: {person.properties?.gender}</p>
            <p className="text-info">Peso: {person.properties?.mass}</p>
        </div>

    );
};

export default InfoCh;