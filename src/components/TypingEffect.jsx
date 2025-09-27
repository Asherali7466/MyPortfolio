import React, { useState, useEffect } from "react";

const TypingEffect = ({ words, speed = 120, eraseSpeed = 60, delay = 1500 }) => {
  const [index, setIndex] = useState(0);       // current word index
  const [subIndex, setSubIndex] = useState(0); // current letter index
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index === words.length) {
      setIndex(0);
      return;
    }

    if (forward && subIndex === words[index].length) {
      // pause before erasing
      setTimeout(() => setForward(false), delay);
      return;
    }

    if (!forward && subIndex === 0) {
      setForward(true);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (forward ? 1 : -1));
    }, forward ? speed : eraseSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, forward, index, words, speed, eraseSpeed, delay]);

  return (
    <span className="text-[#8245ec]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default TypingEffect;
