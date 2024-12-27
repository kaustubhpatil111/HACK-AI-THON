import React from "react";
import "./Prize.css";
const PrizeCard = ({ rank, prizeAmount, medalColor }) => {
  return (
    <div className="prize-card">
      <div className="medal-container">
        <div className={`medal ${medalColor}`} />
      </div>
      <div className="prize-details">
        <p className="rank">{rank}</p>
        <p className="amount">INR {prizeAmount}</p>
        <p className="sponsor">SBI LIFE</p>
      </div>
    </div>
  );
};

const Prize = () => {
  const prizes = [
    { rank: "Winners", prizeAmount: "150,000", medalColor: "gold" },
    { rank: "1st Runner Ups", prizeAmount: "100,000", medalColor: "silver" },
    { rank: "2nd Runner Ups", prizeAmount: "75,000", medalColor: "bronze" },
  ];

  return (
    <div className="prize-container">
      {prizes.map((prize) => (
        <PrizeCard
          key={prize.rank}
          rank={prize.rank}
          prizeAmount={prize.prizeAmount}
          medalColor={prize.medalColor}
        />
      ))}
    </div>
  );
};

export default Prize;
