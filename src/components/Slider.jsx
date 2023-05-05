import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import "./Slider.css";
import { slideritems } from "../data";

function Slider() {
  const [sildeIndex, setSlideIndex] = useState(1);
  const handleClick = (direction) => {
    if (direction === "left") {
      if (sildeIndex > 0) {
        setSlideIndex(sildeIndex - 1);
      } else {
        setSlideIndex(2);
      }
    } else {
      if (sildeIndex < 2) {
        setSlideIndex(sildeIndex + 1);
      } else {
        setSlideIndex(0);
      }
    }
  };

  return (
    <div className="slider">
      <div className="arrow a1" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </div>
      <div
        className="sliderWrapper"
        style={{ transform: `translateX(${sildeIndex * -100}vw)` }}
      >
        {slideritems.map((item) => {
          return (
            <div
              className="slide"
              style={{ backgroundColor: item.bg }}
              key={item.id}
            >
              <div className="ImgContainer">
                <img src={item.img} alt="" className="Image" />
              </div>
              <div className="InfoContainer">
                <h1>{item.title}</h1>
                <p>{item.desc}</p>
                <button>Shop Now</button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="arrow a2" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
}

export default Slider;
