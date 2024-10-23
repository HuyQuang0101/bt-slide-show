import { useState } from "react";

const TOTAL_IMAGES = 10;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const isAtStart = index === 0;
  const isAtEnd = index === TOTAL_IMAGES - 1;

  const handlePrevious = () => setIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setIndex((prev) => Math.min(prev + 1, TOTAL_IMAGES - 1));
  const handleBackToStart = () => setIndex(0);

  return (
    <div className="slideshow">
      <h1>Slide Show</h1>

      <img
        src={`https://picsum.photos/300/200?image=${index}`}
        alt={`Slide ${index + 1}`}
        className="slideshow-image"
      />

      <div className="controls">
        <button onClick={handlePrevious} disabled={isAtStart}>
          Previous
        </button>
        <button onClick={handleNext} disabled={isAtEnd}>
          Next
        </button>
        <button onClick={handleBackToStart} disabled={isAtStart}>
          Back to Start
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
