// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]


mod video_converter;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn convert_video(inputpath: &str, outputpath: &str)  {
    // format!("Hello, {}! You've been greeted from Rust {}!", inputpath, outputpath)
    video_converter::convert_video2(inputpath, outputpath);
}

#[tauri::command]
fn get_frames(inputpath: &str) -> i128 {
    let frames: i128 = video_converter::get_frames(inputpath);
    frames
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![convert_video, get_frames])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
