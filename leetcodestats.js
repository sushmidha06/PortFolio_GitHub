import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    // Replace with real API or use an unofficial LeetCode stats endpoint
    fetch("https://leetcode-stats-api.herokuapp.com/msushmidha")

      .then(res => res.json())
      .then(setStats);
  }, []);

  if (!stats) return <div>Loading LeetCode stats...</div>;

  return (
    <div style={{ display: "flex", gap: 32 }}>
      <div>
        <h3>LeetCode Problems Solved</h3>
        <CircularProgressbar
          value={stats.totalSolved}
          maxValue={stats.totalQuestions}
          text={`${stats.totalSolved}/${stats.totalQuestions}`}
          styles={buildStyles({ textColor: "#000", pathColor: "#00bfae" })}
        />
      </div>
      <div>
        <h4>Ranking: {stats.ranking}</h4>
        <h4>Easy: {stats.easySolved} / {stats.totalEasy}</h4>
        <h4>Medium: {stats.mediumSolved} / {stats.totalMedium}</h4>
        <h4>Hard: {stats.hardSolved} / {stats.totalHard}</h4>
      </div>
    </div>
  );
};

export default LeetCodeStats;
