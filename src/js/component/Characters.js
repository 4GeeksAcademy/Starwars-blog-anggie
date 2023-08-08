import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, action } = useContext(Context);

	return (
		<div className="card-group">
			<div className="d-flex overflow-scroll">
				{store.characters.map((item, id) => (
					<div id="card-wrap" className="card" key={id}>
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"} className="card-img-top" />
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<p className="card-text">Gender: {item.gender}</p>
							<p className="card-text">Hair Color: {item.hair_color}</p>
							<p className="card-text">Eye Color: {item.eye_color}</p>
							<button type="button" className="btn btn-primary">Learn more</button>
							<button type="button" className="btn btn-outline-warning">💛</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
