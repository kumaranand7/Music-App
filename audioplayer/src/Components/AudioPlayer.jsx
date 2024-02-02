import React, { useEffect, useState, useRef } from "react";

const AudioPlayer = ({ audioFiles, currentAudioIndex, setCurrentAudioIndex }) => {
    const audioRef = useRef(new Audio());
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newAudio = audioRef.current;
        newAudio.src = audioFiles[currentAudioIndex].url;

        localStorage.setItem('currentAudioIndex', currentAudioIndex);

        const handleEnded = () => {
            if (currentAudioIndex < audioFiles.length - 1) {
                setCurrentAudioIndex(currentAudioIndex + 1);
            } else {
                setCurrentAudioIndex(0);
            }
        };

        newAudio.addEventListener('ended', handleEnded);

        if (isPlaying) {
            newAudio.play();
        } else {
            newAudio.pause();
        }

        return () => {
            newAudio.removeEventListener('ended', handleEnded);
        };
    }, [currentAudioIndex, audioFiles, setCurrentAudioIndex, isPlaying]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <h2>Now Playing: {audioFiles[currentAudioIndex].name}</h2>
            <div className="audio-instance">
                <audio ref={audioRef} controls={false} autoPlay onEnded={() => setIsPlaying(false)}>
                    <source src={audioFiles[currentAudioIndex].url} type="audio/mp3" />
                    Your browser does not support the audio tag.
                </audio>
                <button onClick={togglePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
            </div>
        </div>
    );
};

export default AudioPlayer;
