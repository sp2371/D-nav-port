import React, { useEffect, useRef } from "react";
import "./backgroundcss.css";
const Background = () => {
  const bubbleContainerRef = useRef(null);
  const lightRef = useRef(null);
  const bubbleCount = 8;
  useEffect(() => {
    const bubbleContainer = bubbleContainerRef.current;
    const light = lightRef.current;
    const bubbles = [];
    window.mouseX = window.innerWidth / 2; // Initialize to center of screen
    window.mouseY = window.innerHeight / 2; // Initialize to center of screen
    window.mouseMoved = false;

    const defaultPositions = [
      { x: 50, y: 50 },
      { x: 500, y: 200 },
      { x: 900, y: 400 },
      { x: 1300, y: 600 },
      { x: 1700, y: 800 },
      { x: 300, y: 1000 },
      { x: 700, y: 850 },
      { x: 1100, y: 650 },
      { x: 1500, y: 450 },
      { x: 1900, y: 250 },
      { x: 400, y: 900 },
      { x: 800, y: 750 },
      { x: 1200, y: 550 },
      { x: 1600, y: 350 },
      { x: 200, y: 150 },
    ];

    class Bubble {
      constructor(defaultPosition, isAlt, speedMultiplier) {
        this.element = document.createElement("div");
        this.size = Math.random() * 250 + 60; // Random size between 50px and 350px
        this.element.classList.add("bubble");
        if (isAlt) {
          this.element.classList.add("alt");
        }
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;

        // Set default position
        this.defaultX = defaultPosition.x;
        this.defaultY = defaultPosition.y;
        this.element.style.left = `${this.defaultX}px`;
        this.element.style.top = `${this.defaultY}px`;

        // Random initial direction
        this.directionX = (Math.random() - 0.5) * 2; // Value between -1 and 1
        this.directionY = (Math.random() - 0.5) * 2; // Value between -1 and 1

        // Set speed multiplier
        this.speedMultiplier = speedMultiplier;

        // Add the bubble to the container
        bubbleContainer.appendChild(this.element);
        this.updatePosition();
      }

      updatePosition() {
        let bubbleX = parseFloat(this.element.style.left);
        let bubbleY = parseFloat(this.element.style.top);

        
          // Move back to default position and add random movement
          let dx = this.defaultX - bubbleX + (Math.random() - 0.5) * 10; // Smaller random movement
          let dy = this.defaultY - bubbleY + (Math.random() - 0.5) * 10; // Smaller random movement
          let distance = Math.sqrt(dx * dx + dy * dy);

          this.directionX += (dx / distance) * 0.01;
          this.directionY += (dy / distance) * 0.01;

        // Normalize direction
        let length = Math.sqrt(
          this.directionX * this.directionX + this.directionY * this.directionY
        );
        this.directionX /= length;
        this.directionY /= length;

        // Move the bubble in its current direction
        let moveDistance = 0.5 * this.speedMultiplier; // Reduced overall speed
        let newX = bubbleX + this.directionX * moveDistance;
        let newY = bubbleY + this.directionY * moveDistance;

        // Boundary checking
        if (newX < 0) newX = 0;
        if (newX > window.innerWidth - this.size)
          newX = window.innerWidth - this.size;
        if (newY < 0) newY = 0;
        if (newY > window.innerHeight - this.size)
          newY = window.innerHeight - this.size;

        this.element.style.left = `${newX}px`;
        this.element.style.top = `${newY}px`;

        requestAnimationFrame(this.updatePosition.bind(this));
      }
    }

    for (let i = 0; i < bubbleCount; i++) {
      let speedMultiplier = Math.random() * 2 + 1; // Random speed multiplier between 0.5 and 1
      bubbles.push(
        new Bubble(
          defaultPositions[i % defaultPositions.length],
          i % 2 === 0,
          speedMultiplier
        )
      );
    }

    const handleMouseMove = (event) => {
      window.mouseX = event.clientX;
      window.mouseY = event.clientY;
      window.mouseMoved = true;
      light.style.left = `${window.mouseX - light.offsetWidth / 2}px`;
      light.style.top = `${window.mouseY - light.offsetHeight / 2}px`;
    };

    const handleMouseLeave = () => {
      window.mouseMoved = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div>
      <div ref={bubbleContainerRef} className="bubble-container" />
      <div className="overlay">
        <div ref={lightRef} className="light" />
      </div>
    </div>
  );
};

export default Background;