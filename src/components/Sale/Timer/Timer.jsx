import { useState, useEffect } from "react";
import "./Timer.css";
import TopHead from "../../TopHead/TopHead";

function Timer() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-10-10") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="timer-item" key={interval}>
        <p>{interval}</p>
        <p>{timeLeft[interval]}</p>
      </div>
    );
  });

  return (
    <div className="time-parent">
      <TopHead sub="Today’s" title="Flash Sales" />
      <div className="timer-content">
        {timerComponents.length ? (
          timerComponents
        ) : (
          <span className="timer">Time is up 🤷‍♂️⏳🚫</span>
        )}
      </div>
    </div>
  );
}

export default Timer;
