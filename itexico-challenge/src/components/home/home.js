import React from 'react';
import './home.css';

function home() {
  return (
    <section className="welcome-message">
      <h1>Welcome to your <span className="highlighted">List Administrator</span> Tool!</h1>
      <p>Navigate over the menu above to start playing with your lists.</p>
    </section>
  );
}

export default home;
