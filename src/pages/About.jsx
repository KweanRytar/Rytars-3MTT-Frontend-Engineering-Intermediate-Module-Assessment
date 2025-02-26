import React, { useState, useEffect } from 'react';

const AboutMe = () => {
  const thingsAboutMe = [
   "Hey there! I'm Kwean Rytar, a passionate frontend developer with a knack for building sleek, functional, and accessible web applications.", "I thrive on solving complex problems, debugging tricky code, and making sure every pixel is in its right place.","I specialize in React.js, and I’m currently working on a GitHub portfolio web app that dynamically fetches repositories using the GitHub API, complete with pagination, filtering, and nested routing. My projects prioritize clean UI, seamless user experience, and accessibility—because good design isn’t just about looks; it’s about making the web work for everyone.", "When I'm not coding, you’ll probably find me fine-tuning my CSS magic (because perfect layouts matter) or exploring the latest web dev trends. I don’t just write code—I craft experiences.", "Tech Stack", "💻 React.js, JavaScript, HTML, CSS, Git, GitHub API", " Responsive UI/UX Design, CSS Modules, Styled Components" 
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % thingsAboutMe.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="about-container">
      <h2>About Me</h2>
      <p className="about-text">{thingsAboutMe[index]}</p>
    </div>
  );
};

export default AboutMe;
