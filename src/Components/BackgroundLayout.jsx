import React, { useEffect, useState } from "react";
import { useStateContext } from "../Context";
//images
import Clear from "../assets/images2/clear.jpeg";
import Fog from "../assets/images2/fog.avif";
import Cloudy from "../assets/images2/cloudy.avif";
import Rainy from "../assets/images2/rainy.jpg";
import Snow from "../assets/images2/snow.jpg";
import Stormy from "../assets/images2/stormy.jpg";
import Sunny from "../assets/images2/sunny.jpg";

const BackgroundLayout = () => {
  const { weather } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (weather.conditions) {
      let imageString = weather.conditions;
      if (imageString.toLowerCase().includes("clear")) {
        setImage(Clear);
      } else if (imageString.toLowerCase().includes("cloud")) {
        setImage(Cloudy);
      } else if (
        imageString.toLowerCase().includes("rain") ||
        imageString.toLowerCase().includes("shower")
      ) {
        setImage(Rainy);
      } else if (imageString.toLowerCase().includes("snow")) {
        setImage(Snow);
      } else if (imageString.toLowerCase().includes("fog")) {
        setImage(Fog);
      } else if (
        imageString.toLowerCase().includes("thunder") ||
        imageString.toLowerCase().includes("storm")
      ) {
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <img
      src={image}
      alt="weather_image"
      className="h-screen w-full fixed left-0 top-0 -z-[10]"
    />
  );
};

export default BackgroundLayout;
