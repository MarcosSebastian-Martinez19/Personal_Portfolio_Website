import React from 'react';
import CV from "../../assets/CV-MarcosMartinez.pdf";
import "./About.css";
import { FiDownload } from "react-icons/fi"

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className='btn'> <FiDownload /> Descargar CV</a>
    </div>
  )
}
