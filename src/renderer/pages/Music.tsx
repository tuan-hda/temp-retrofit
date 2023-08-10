import React from "react"

const Music = () => {
  return (
    <div className="h-full w-full">
      <iframe
        title="music-player"
        src="http://localhost:5500/temp-music-player/index.html"
        className="h-full w-full bg-black"
      ></iframe>
    </div>
  )
}

export default Music
