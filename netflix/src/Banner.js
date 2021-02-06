import React from "react";
import "./Banner.css";

function Banner() {
	return (
		<header className="banner" style={{
			backgroundImage: `url("https://mediaincanada.com/wp/wp-content/uploads/2020/09/netflix-banner.png")`,
			backgroundSize: "cover",
			backgroundPosition: "center center",
		}}>
			<div className="banner__contents">
				<h1 className="banner__title">Movie Name</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner__description">A testing description for the app banner</h1>
			</div>
			<div className="banner--fadeBottom" />
		</header>
	);
}

export default Banner;