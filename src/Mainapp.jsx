import React from "react";
import reactLogo from "./assets/react.svg"
import profilePhoto from "./assets/profile-photo.png"
import { Fragment } from "react";
import Footer from "./Footer";

export default function Main() {
    return(
        <main className="card">
            <div className="main-section">
                <img src={profilePhoto} className="profile-photo" alt="personal photo" />
                <div className="section-one">
                    <img src={reactLogo} className="img-logo" alt="React logo" />
                    <span>Tambari Samuel</span>
                </div>
                <h3>Frontend Developer</h3>
                <div className="buttons">
                    <a href="https://mail.google.com/mail/u/1/#inbox?compose=new" target="_blank"><button className="btn-1">Email</button></a>
                    <a href="https://www.linkedin.com/in/tambari-samuel-64a77819a/" target="_blank"><button className="btn-2">LinkedIn</button></a>
                </div>
                <div className="info">
                    <h2 className="about">About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with secutiy and best practices, and I'm always looking for new things to learn.</p>
                    <h2 className="interests">Interest</h2>
                    <p>Soccer, Reader, Movies, Games, IoT, Crpto & Forex trading and Food lover.</p>
                    <Footer />
                </div>
            </div>
        </main>
    )
}