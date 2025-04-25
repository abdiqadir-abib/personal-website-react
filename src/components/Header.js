// src/components/About.js
import React from 'react';
import './Header.css'; // Add your about section styles

const Header = () => {
  return (
    <header id="home" className="fade-in">
        <img src="https://avatars.githubusercontent.com/u/36222441?s=400&u=462fdc85f9dfce6e117685856cc7d9f0bba9b6c4&v=4" alt="AbdiQadir" class="profile-pic" />
        <h1>AbdiQadir Abib</h1>
        <p id="typingText">Web Developer | Designer | Creator</p>
    </header>
  );
};

// const roles = ["Web Developer", "Designer", "Creator"];
// let index = 0;
// let charIndex = 0;
// let typingText = document.getElementById("typingText");

// function typeEffect() {
//   if (charIndex < roles[index].length) {
//     typingText.textContent += roles[index].charAt(charIndex);
//     charIndex++;
//     setTimeout(typeEffect, 100);
//   } else {
//     setTimeout(() => {
//       typingText.textContent = "";
//       charIndex = 0;
//       index = (index + 1) % roles.length;
//       typeEffect();
//     }, 2000);
//   }
// }

// typeEffect();

export default Header;
