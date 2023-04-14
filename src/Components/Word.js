import React from "react";
import "./word.css";
import "./responsiveWord.css";
const Word = ({ urlImage }) => {
  const [image, setImage] = React.useState(urlImage);
  return (
    <div className="box-word">
      <h5 className="title-word">Lorem ipsum dolor sit amet</h5>
      <div className="word-txt">
        <img
          src={
            image
              ? image
              : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fabstr"
          }
          className="img-word"
          alt="img"
        />
        <p className="text-word">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          voluptatum, voluptatem, quod, quia voluptates quibusdam quidem
          voluptatibus quae quos nemo quas voluptatem quia voluptates quibusdam
          voluptatum, voluptatem, quod, quia voluptates quibusdam quidem
          voluptatibus quae quos nemo quas voluptatem quia voluptates quibusdam
        </p>
      </div>
    </div>
  );
};

export default Word;
