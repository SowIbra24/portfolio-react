import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
		<h2>Transformer des idées en expériences digitales inoubliables</h2>  
		<p>  
		    Développeur full-stack web & mobile | Étudiant à 42 | Créer, optimiser, repousser les limites du possible   
		</p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/cpp.png" alt="" title="C++"/>
          </div>
          <img src="./assets/images/mbah.jpeg" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/angular.png" alt="" title="ANGULAR"/>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.png" alt="" title="JAVASCRIPT"/>
          </div>
          <div className="tech-icon">
            <img src="./assets/images/spring.png" alt="" title="SPRING BOOT" />
          </div>
		  <div className="tech-icon">
            <img src="./assets/images/java.png" alt="" title="JAVA"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
