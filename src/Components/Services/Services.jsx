import React from "react";
import "./Services.css";
import { BsCheckLg } from "react-icons/bs" 

export const Services = () => {
    return (
        <section id="services">
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>UX/UI Design</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF UX/UI DESIGN */}

                <article className="service">
                    <div className="service__head">
                        <h3>Web Development</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* WEB DEVELOPMENT */}

                <article className="service">
                    <div className="service__head">
                        <h3>Content Creation</h3>
                    </div>
                    <ul className="service__list">
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                        <li>
                            <BsCheckLg className="service__list-icon" />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </ul>
                </article>
                {/* END OF CONTENT CREATION */}
            </div>
        </section>
    )
};
