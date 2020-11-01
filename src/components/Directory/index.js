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
					<span className="button">Womens shop</span>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${mensShop})`,
					}}
				>
					<span className="button">Mens shop</span>
				</div>
			</div>
		</div>
	);
};

export default Directory;
