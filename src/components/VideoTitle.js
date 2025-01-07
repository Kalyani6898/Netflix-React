import React from "react";

const VideoTitle = (props) => {
  const { title, overview } = props;
  console.log(title, overview);
  return (
    <div className="pt-[15%]  px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold ab">{title}</h1>
      <p className="py-6 text-lg w-2/6 font-light">{overview}</p>
      <div>
        <button className="bg-white text-black text-lg rounded-lg font-bold px-16 p-4 hover:bg-opacity-90">
          ▶️ Play
        </button>
        <button className="bg-gray-500 text-black text-lg rounded-lg mx-2 px-12 p-4 hover:bg-opacity-90 ">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
