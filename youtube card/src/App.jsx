import { useState } from "react";
import "./App.css";
import { YoutubCard } from "./components/youtubecard";

const arry = [
  {
    img: "/image.png",
    channelImage: "/chi.jpg",
  },
  {
    img: "/image.png",
    channelImage: "/chi.jpg",
  },
  {
    img: "/image.png",
    channelImage: "/chi.jpg",
  },
  {
    img: "/image.png",
    channelImage: "/chi.jpg",
  },
  {
    img: "/image.png",
    channelImage: "/chi.jpg",
  },
];

function App() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 p-2 bg-black">
        {/* <YoutubCard
          image={arry[0].img}
          channelImage={arry[0].channelImage}
          className="bg-slate-800"
        ></YoutubCard> */}
        {arry.map((card) => {
          return (
            <YoutubCard
              image={card.img}
              channelImage={card.channelImage}
              className="bg-slate-800"
            ></YoutubCard>
          );
        })}
      </div>
    </>
  );
}

export default App;
