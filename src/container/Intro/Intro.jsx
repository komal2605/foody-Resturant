import React from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import { meal } from "../../constants";
import "./Intro.css";

const Intro = () => {
  const [playVedio, setPlayVedio] = React.useState(false);
  const vidRef = React.useRef();

  const handleVedio = () => {
    setPlayVedio((prevPlayVedo) => !prevPlayVedo);

    if (playVedio) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        controls={false}
        loop
        muted
        type="vedio/mp4"
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVedio}
        >
          {playVedio ? (
            <BsPauseFill color="#FFF" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#FFF" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
