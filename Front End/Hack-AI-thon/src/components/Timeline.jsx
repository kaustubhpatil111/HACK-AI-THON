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
      borderColor: "red"
    },
    {
      date: "Jan 02",
      title: "Team Formation",
      description:
        "Collaborate and form a team to bring your innovative ideas to reality.",
      duration: "18 Nov 24, 04:01 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
    {
      date: "Jan 02",
      title: "Idea Submissions",
      description:
        "Share your innovative ideas and take the first step toward turning your vision into reality.",
      duration: "18 Nov 24, 04:02 PM IST - 02 Jan 25, 11:59 PM IST",
      color: "#EDFFF4", // Light green background for this card
       borderColor: "hsl(128, 92%, 47%)"
    },
  ];

  return (
    <div className="timeline-container">
      <h2 className="timeline-title">Timeline</h2>
      {timelineData.map((item, index) => (
      <div key={index} className="timeline-row"  >
      <div className="timeline-date" style={{border: `2px solid ${item.color}`}}>
        <span className="timeline-day" style={{ backgroundColor: item.color }}>18</span>
        <span className="timeline-month">{item.date}</span>
      </div>
    
      <div className="timeline-content" style={{ backgroundColor: item.color }}>
        <div className="timeline-item" >
          <div className="timeline-quote" style={{ backgroundColor: item.color,  borderLeft: `4px solid ${item.borderColor}` }}>
               <div className="timeilne-data">
               <p className="timeline-duration">{item.duration}</p>
                  <h3 className="timeline-event">{item.title}</h3>
                  <h3 className="timeline-divider"></h3>
                  <p className="timeline-description">{item.description}</p>
                </div>
          </div>
        </div>
      </div>
    </div>
    
     
      ))}
    </div>
  );
};

export default Timeline;
