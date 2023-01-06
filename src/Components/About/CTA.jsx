import React from 'react';
import CV from "../../assets/CV-MarcosMartinez-FrontEndDeveloper.pdf";
import "./About.css";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'>Descargar CV</a>
    </div>
  )
}
