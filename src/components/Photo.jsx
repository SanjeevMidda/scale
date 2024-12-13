import React, { useState } from "react";

const Photo = ({ colors }) => {
  const [status, setStatus] = useState(true);

  let styles = {
    background: `linear-gradient(${colors[0]}, ${colors[1]})`,
    transform: `scale(${status ? 1 : 0.1})`,
  };
  return (
    <div
      className="photo"
      style={styles}
      onClick={() => setStatus(!status)}
    ></div>
  );
};

export default Photo;
