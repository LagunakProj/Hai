import ReactPlayer from "react-player";
import "./App.css";
import Library from "./views/Library";
import Home from "./views/Home";
import { Route, Routes } from "react-router-dom";
import Movies from "./views/Movies";
import PlayTest from "./views/PlayTest";
import Settings from "./views/Settings";
import Profile from "./utils/Profile";
import useToken from "./utils/useToken";
import Header from "./utils/Header";

import Hover from "./utils/Hover";
import { useState } from "react";
import { listen } from "@tauri-apps/api/event";

function App() {
	const { token, removeToken, setToken } = useToken();
	const [isHover, setIsHover] = useState(false);

	listen("tauri://file-drop-hover", (event) => {
		setIsHover(true);
	});
	listen("tauri://file-drop-cancelled", (event) => {
		setIsHover(false);
	});

	return (
		<div className="App">
			{/* <Header token={removeToken} />
          {!token && token !== "" && token !== undefined ?
              <Login setToken={setToken} />
              : ( */}
			{isHover ? <Hover /> : <p>NOT FOUND</p>}
			<Header />
			<>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<Movies />} />
					<Route path="/dash" element={<Library />} />
					<Route path="/play-test" element={<PlayTest />} />
					<Route path="/settings" element={<Settings />} />
					<Route
						exact
						path="/profile"
						element={<Profile token={token} setToken={setToken} />}
					></Route>
				</Routes>
			</>
		</div>
	);
}

export default App;
