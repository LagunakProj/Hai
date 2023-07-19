import axios from "axios";
import { Link } from "react-router-dom";

function Header(props) {
	function logMeOut() {
		axios({
			method: "POST",
			url: "/logout",
		})
			.then((response) => {
				props.token();
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response);
					console.log(error.response.status);
					console.log(error.response.headers);
				}
			});
	}

	return (
		<header className="App-header">
			<Link to={"/"}>HAI APP</Link>
			{/* <img src={logo} className="App-logo" alt="logo" /> */}
			{/* <button onClick={logMeOut}>
                Logout
            </button> */}
		</header>
	);
}

export default Header;
