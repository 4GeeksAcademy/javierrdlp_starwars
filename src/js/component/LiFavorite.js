import React, { useContext } from "react";
import { Context } from "../store/appContext";


const LiFavorite = ({name}) => {
     const {store, actions} = useContext(Context)

    return (
        <li>
           <a class="dropdown-item" type="button">
                {name} 
                <i className="bi bi-trash-fill ms-2" style={{fontSize:"18px"}} onClick={
                    () =>{
                        actions.removeFavorite(name)
                    }
                }></i>
            </a>
        </li>
    );
};

export default LiFavorite