import React from 'react';
import "./Banner.css";

function Banner() {
    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage : `url("https://i.pinimg.com/originals/ca/f0/45/caf04534b84c3081e3972c942ffda27e.jpg")`,
            backgroungPosition : "center center",
        }}>

            <div className="banner_container">
                <h1 className="banner_title">
                    Movie Name 
                </h1>
                <div className="banner_buttons">
                    <button className="banner_butttons">Play</button>
                    <button className="banner_buttons">My List</button>
                </div>
                <h3 className="banner_description">this is a text description</h3>
            </div>

            <div className="banner_fadeButton">

            </div>
            
        </header>
    )
}

export default Banner
