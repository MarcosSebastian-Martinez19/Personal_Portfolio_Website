import React from 'react'
import CV from "../../assets/CV-MarcosMartinez-FrontEndDeveloper.pdf"
import "./Header.css"

export const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}
