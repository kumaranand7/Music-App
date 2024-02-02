import React, { useState } from 'react';
import AudioPlayer from './Components/AudioPlayer';
import './Styles/Comman.css';

const initialAudioFiles = JSON.parse(localStorage.getItem('audioList')) || [];

const App = () => {
  const [audioUpload, setAudioUpload] = useState('');
  const [audioFiles, setAudioFiles] = useState(initialAudioFiles);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(
    parseInt(localStorage.getItem('currentAudioIndex')) || 0
  );

  const uploadAudioHandler = () => {
    if (!audioUpload) return;

    const data = new FormData();
    data.append("file", audioUpload);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "djib5oxng");
    data.append("resource_type", "audio");

    fetch("https://api.cloudinary.com/v1_1/dd9cmhunr/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        const newAudioFiles = [...audioFiles, { name: data.original_filename, url: data.url }];
        setAudioFiles(newAudioFiles);
        localStorage.setItem('audioList', JSON.stringify(newAudioFiles));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='main'>
      <div>
        <input type='file' onChange={(e) => setAudioUpload(e.target.files[0])} />
        <button onClick={uploadAudioHandler}>Upload Audio</button>
      </div>
      <AudioPlayer
        audioFiles={audioFiles}
        currentAudioIndex={currentAudioIndex}
        setCurrentAudioIndex={setCurrentAudioIndex}
      />
      <div>
        <h3>Playlist</h3>
        <ul className='audio-list'>
          {audioFiles.map((audio, index) => (
            <li key={index}>
              {audio.name}{' '}
              <button onClick={() => setCurrentAudioIndex(index)}>Play</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
