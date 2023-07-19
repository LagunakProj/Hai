use std::process::Command;

pub fn convert_video2(inputpath: &str, outputpath: &str) {
    let ffmpeg_path = r#"dist\ffmpeg.exe"#;

    let output = Command::new(ffmpeg_path)
        .args(&["-i", inputpath, outputpath])
        .spawn();

    match output {
        Ok(_) => println!("¡Conversión de video exitosa!"),
        Err(e) => eprintln!("Error al convertir el video: {:?}", e),
    }
}

pub fn get_frames(inputpath: &str) -> i128 {
    let ffprobe_path = r#"dist\ffprobe.exe"#;

    // Execute the ffprobe command and store the output in the 'output' variable
    let output = Command::new(ffprobe_path)
        .args(&[
            "-v", "error",              // Set log level to error to suppress non-error messages
            "-select_streams", "v:0",   // Select only the first video stream
            "-count_packets",           // Count packets (frames)
            "-show_entries", "stream=nb_read_packets",  // Show the number of read packets (frames)
            "-of", "csv=p=0",           // Output the result in CSV format without any additional formatting
            inputpath                   // The input path of the video file
        ])
        .output();

    // 'output' is a Result containing the output of the ffprobe command
    // We can extract the stdout data and parse it as a string
    match output {
        Ok(output) => {
            let stdout = String::from_utf8_lossy(&output.stdout);
            let frames = stdout.trim().parse::<i128>().unwrap_or(0);
            return frames;
        },
        Err(_) => 0, // In case of an error, return 0 frames
    }
}