import React from "react";
import "./Timeline.css"; // Import CSS for styling

const Timeline = () => {
  const timelineData = [
    {
      date: "Dec 22",
      title: "Registration",
      description:
        "Join the innovation wave! Register now to secure your spot and bring your ideas to life.",
      duration: "18 Nov 24, 04:00 PM IST - 22 Dec 24, 11:59 PM IST",
      color: "#FDEDED", // Light red background for this card
    },
    {
      date: "Jan 02",
      title: "Team Formation",
      description:
        "Collaborate and form a team to bring your innovative ideas to reality.",
      duration: "18 Nov 24, 04:01 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Timeline</h2>
      {timelineData.map((item, index) => (
        <div
          key={index}
          className="timeline-item"
          style={{ backgroundColor: item.color }}
        >
          <div className="timeline-date">
            <span className="timeline-day">18</span>
            <span className="timeline-month">{item.date}</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-event">{item.title}</h3>
            <p className="timeline-duration">{item.duration}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
