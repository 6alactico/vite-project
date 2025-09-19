import { useState, useEffect } from 'react'
import './App.css'
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function App() {
  const [showMessage, setShowMessage] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    console.log("🎯 Someone opened the page!");
  }, []);


  function handleClick() {
    setShowMessage(true);
    setShowVideo(true);
  }

  return (
      <section>
        {showMessage && <ConfettiComponent showVideo={showVideo}/>}
        {!showMessage && !showVideo && (
          <button onClick={handleClick}>Tap Me!</button>
        )}
      </section>
  )
}

function ConfettiComponent({ showVideo }) {
  const [showConfetti, setShowConfetti] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000); 
    const removeTimer = setTimeout(() => setShowConfetti(false), 7000); 

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    }
  }, []);

  return (
    <div className='content'>
      <div className={`confetti-container ${fadeOut ? 'fade-out' : ''}`}>
        {showConfetti && <Confetti width={375} height={812}/>}
      </div>
      <h1>Happy Friday!</h1>
      {showVideo && <VideoPlayer />}
      <span className='emoji'>🤣🤣🤣</span>
    </div>
  )
}

function VideoPlayer() {
  return (
    <iframe
      src="https://www.youtube.com/embed/9XLjz3OMUPI?si=nFC9FM9MsMnVL5h7&autoplay=1&loop=1&playlist=9XLjz3OMUPI"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      playsInline
      frameBorder="0"
    />
  );
}
export default App