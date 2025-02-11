/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   MobileNav.jsx                                      :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mbah <mbah@student.42.fr>                  +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2025/02/11 19:33:56 by mbah              #+#    #+#             */
/*   Updated: 2025/02/11 19:37:57 by mbah             ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  
  const handleScroll = (sectionId) => {
    if(isOpen) toggleMenu();
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" alt="" />

          <ul>
            <li>
              <a onClick={() => handleScroll("hero")} className="menu-item">
                Home
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("skills")} className="menu-item">
                Skills
              </a>
            </li>

			<li>
              <a onClick={() => handleScroll("education")} className="menu-item">
                Educations
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("work-exp")} className="menu-item">
                Projects
              </a>
            </li>

            <li>
              <a onClick={() => handleScroll("contact")} className="menu-item">
                Contact Me
              </a>
            </li>

			<a href="./assets/images/cv.pdf">
				<button className="contact-btn" onClick={() => {}}>
					Here Me
				</button>
			</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
