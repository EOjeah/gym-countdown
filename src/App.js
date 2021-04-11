// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const calculateTimeLeft = () => {
    // var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();

    // let year = new Date().getFullYear();
    const difference = +new Date('April 12, 2021 06:00:00') - +new Date();
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
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach(interval => {
    // console.log('timeLeft', timeLeft);
    // if (!timeLeft[interval]) {
    //   timerComponents.push(<span>00</span>);
    //   return;
    // }
    if (timeLeft[interval] < 10) {
      timeLeft[interval] = '0' + +timeLeft[interval];
    }
    if (interval !== 'seconds') {
      if (!timeLeft[interval]) {
        timerComponents.push(<span>00 {interval[0]}:</span>);
      } else {
        timerComponents.push(
          <span>
            {timeLeft[interval]} {interval[0]}:{' '}
          </span>
        );
      }
    } else {
      if (!timeLeft[interval]) {
        timerComponents.push(<span>00 </span>);
      } else {
        timerComponents.push(<span>{timeLeft[interval]}</span>);
      }
      // timerComponents.push(<span>{timeLeft[interval]}</span>);
    }
    // console.log(timerComponents);
  });

  // console.log(timerComponents);
  return (
    <p>
      {timeLeft.days + timeLeft.hours + timeLeft.minutes > 0
        ? timerComponents
        : 'OPEN!'}
    </p>
  );
}

export default App;
