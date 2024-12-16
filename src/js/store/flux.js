const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			planets: [],
			people: [],
			starShips: [],
			oneStarShip:{},
			onePlanet:{},
			onePerson:{},
			favoriteList:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			addFavorite:(favorite) =>{
				const store = getStore();
				setStore({favoriteList:[...store.favoriteList, favorite]});
				
			},
			removeFavorite:(favorite)=>{
				const store = getStore();
				const updatedList = store.favoriteList.filter((name) => name !== favorite);
				setStore({ favoriteList: updatedList }); 				
			},
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							setStore({ planets: data.results })							
							const store = getStore();

							console.log(store.planets)
						}
					)
					.catch(err => console.error(err))

			},
			getPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							setStore({ people: data.results })
						}
					)
					.catch(err => console.error(err))
			},
			getStarShips: () => {
				fetch("https://www.swapi.tech/api/starships/")
					.then(res => res.json())
					.then(
						data => {
							console.log(data)
							setStore({ starShips: data.results })						
						}
					)
					.catch(err => console.error(err))
			},
			getOneStarShip: (id) => {
				fetch(`https://www.swapi.tech/api/starships/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ oneStarShip: data.result }); 
					})
					.catch(err => console.error(err));
			},
			getOnePlanet: (id) => {
				fetch(`https://www.swapi.tech/api/planets/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ onePlanet: data.result }); 
					})
					.catch(err => console.error(err));
			},
			getOnePerson: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						setStore({ onePerson: data.result }); 
					})
					.catch(err => console.error(err));
			}
			
		}
	};
};

export default getState;
