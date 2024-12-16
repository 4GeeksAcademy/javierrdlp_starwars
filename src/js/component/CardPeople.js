import React, { useContext, useState, useEffect } from 'react';
import chImage from "../../img/usuario.png";
import { Link } from "react-router-dom";
import { Context } from '../store/appContext';

const CardPeople = ({ id, name, url }) => {

    const { store, actions } = useContext(Context);
    const isFavorite = store.favoriteList.includes(name);
    const [Icon, setIcon] = useState(isFavorite ? "bi bi-star-fill text-warning" : "bi bi-star text-warning");


    useEffect(() => {
        setIcon(isFavorite ? "bi bi-star-fill text-warning" : "bi bi-star text-warning");
    }, [isFavorite]);

    return (
        <div className="card p-3">
            <img className='p-4' src={chImage} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className="d-flex align-items-center justify-content-between mt-3">
                    <Link to={`/people/${id}`}>
                        <button type="button" className="btn btn-primary">+ Info</button>
                    </Link>
                    <i className={Icon}
                        onClick={() => {
                            if (isFavorite) {
                                actions.removeFavorite(name);
                            } else {
                                actions.addFavorite(name);
                            }
                        }}
                    >
                    </i>
                </div>
            </div>
        </div>
    )
}

export default CardPeople