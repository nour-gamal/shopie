import React from "react";
import mensShop from "../../assets/mensShop.jpg";
import womensShop from "../../assets/womensShop.jpg";
import "./styles.scss";
const Directory = (props) => {
	return (
		<div className="directory">
			<div className="wrap">
				<div
					className="item"
					style={{
						backgroundImage: `url(${womensShop})`,
					}}
				>
					<a href="/">Womens shop</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${mensShop})`,
					}}
				>
					<a href="/">Mens shop</a>
				</div>
			</div>
		</div>
	);
};

export default Directory;