import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const InfoP = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    useEffect(() => {

        actions.getOnePlanet(params.planetId);
    }, []); 

    const planet = store.onePlanet;

    
    if (!planet.properties) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>)
    }

    return (
        <div className="text-center mt-5">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${params.planetId}.jpg`} alt="Planet" 
        onError={(e) =>{
            e.target.onError = null;
            e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }

        } />
        <h1 className="text-primary">{planet.properties?.name}</h1>
        <p className="text-primary">Clima: {planet.properties?.climate}</p>
        <p className="text-primary">Gravedad: {planet.properties?.gravity}</p>
    </div>
    
    );
};

export default InfoP;