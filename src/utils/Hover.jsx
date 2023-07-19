import React from "react";
import { invoke } from "@tauri-apps/api/tauri";
import { useState } from "react";
import { listen } from "@tauri-apps/api/event";
import ProgressBar from "@ramonak/react-progress-bar";

function Hover() {
	const [fileData, setFileData] = useState({});
	const [frames, setFrames] = useState();
	const [framesProgress, setFramesProgress] = useState();
	listen("tauri://file-drop", (event) => {
		setFileData(event);
	});

	function norm(value, min, max) {
		return (value - min) / (max - min);
	}

  async function progressBar(){
    for (let i = 1; i <= frames; ) {
			let a = parseInt((i - 0) / (frames - 0) * 100);

			setFramesProgress(a);
			i += 1;
		}
  }

	async function submit() {

    invoke("get_frames", { inputpath: fileData.payload[0] }).then(
			(frames) => setFrames(frames)
		);

		invoke('convert_video',{ inputpath: fileData.payload[0], outputpath: "C:/Users/PC/multy_media/series/EEE/ssn_01/03.mp4" })

    // await progressBar()

	}

	return (
		<>
			<div>
				<p>HOVER</p>
				{/* <ProgressBar
					completed={framesProgress}
					bgColor="pink"
					animateOnRender={true}
				/> */}
        <p>Frames: {frames}</p>
				<button onClick={submit}>Submit</button>
			</div>
		</>
	);
}

export default Hover;
