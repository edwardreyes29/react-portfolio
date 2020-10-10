import React from 'react';
import './style.css';

const styles = {
  background: "red"
}
export const Footer = () => {

  return (
    <footer className="footer" style={styles}>
      <div>
        <div>This is the footer</div>
      </div>
    </footer>
  )
}