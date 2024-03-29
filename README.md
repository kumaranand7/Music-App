# React Audio Player App

## Overview
The React Audio Player is a web application designed for uploading audio files (e.g., mp3) and creating playlists. It leverages React.js and utilizes Browser APIs for storing audio files locally. Users can seamlessly manage playlists, with a "now playing" view indicating the currently active audio file. Playback is facilitated through the standard HTML audio player, allowing smooth transitions between playlist items.

To enhance user experience, the application persists the last played audio file and its playback position. This ensures that users can resume playback from where they left off even after reloading the page.

## Tech Stacks
- **React.js:** The JavaScript library for building user interfaces.
- **localStorage:** Browser storage for persisting data such as playlists and playback positions.
- **React Components:** Modular building blocks for the application's user interface.
- **Browser API:** Utilized for local storage and file management.
- **HTML, CSS, JS:** Standard web technologies for structure, styling, and behavior.
- **HTML Audio Element and Player:** Employed for audio file playback within the application.

## Features
- **Upload Audio Files:** Users can easily upload audio files, expanding their playlist.
- **Create Playlists:** Build and manage playlists with the flexibility to add, remove, and rearrange audio files.
- **Now Playing View:** A dedicated section showcasing the currently playing audio file.
- **Persistent Playback:** The application saves the last played audio file and its position, ensuring continuity upon page reload.

## How to Use
1. **Clone Repository:**
   ```bash
   git clone https://github.com/yourusername/React-Audio-Player.git
   ```

2. **Install Dependencies:**
   ```bash
   cd React-Audio-Player
   npm install
   ```

3. **Run the Application:**
   ```bash
   npm start
   ```

4. **Access the Application:**
   Open your web browser and go to `http://localhost:3000` to use the React Audio Player.
