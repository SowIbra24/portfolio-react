import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
	return (
	  <div className="work-experience-card">
		<h6>{details.title}</h6>
		<div className="work-duration">{details.date}</div>
		<a class="github work-duration" href={details.git} title="Voir le projet">Github</a>
		<ul>
		  {details.responsibilities.map((item, index) => (
			<li key={index}>{item}</li>
		  ))}
		</ul>
	  </div>
	);
  };
  

export default ExperienceCard;
