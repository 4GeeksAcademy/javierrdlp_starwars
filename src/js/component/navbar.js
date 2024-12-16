import React, { useContext } from "react";
import logo from "../../img/logo.png"
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import LiFavorite from "./LiFavorite";

export const Navbar = () => {
	const {store} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<img className='ms-5' src={logo} />
			</Link>
			<div className="ml-auto">
				<div className="dropdown me-5">
					<button className="btn btn-warning dropdown-toggle me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites {store.favoriteList.length}
					</button>
					<ul className="dropdown-menu">
						{
							store.favoriteList.length !=0?
							store.favoriteList.map((value, index) =>(
								<LiFavorite key={index} name={value}/>
							))
							:
							<p class="text-center">-Empty-</p>
								
						}
					</ul>
				</div>
			</div>
		</nav>
	);
};
