import { useState, useEffect } from 'react'
import './App.css'
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  function handleClick() {
    setShowMessage(!showMessage);
  }

  return (
      <div>
        {showMessage && <ConfettiComponent />}
        {!showMessage && (
          <button onClick={handleClick}>Tap Me!</button>
        )}
      </div>
  )
}

function ConfettiComponent() {
  const [width, height] = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 4000);
    const removeTimer = setTimeout(() => setShowConfetti(false), 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    }
  }, []);

  return (
    <div>
      <div className={`confetti-container ${fadeOut ? 'fade-out' : ''}`}>
        {showConfetti && <Confetti width={width} height={height}/>}
      </div>
      <h1>Happy Friday!</h1>
      <VideoPlayer />
    </div>
  )
}

function VideoPlayer() {
  return (
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/9XLjz3OMUPI?si=nFC9FM9MsMnVL5h7&autoplay=1&loop=1&playlist=9XLjz3OMUPI"
      title="YouTube video"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      frameBorder="0"
    />
  );
}
export default App