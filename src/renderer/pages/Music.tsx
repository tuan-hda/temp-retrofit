import React from 'react';

const Music = () => {
  return (
    <div className="h-full w-full overflow-auto">
      <iframe
        title="music-player"
        src="http://192.168.1.92:5500"
        className="h-full w-full"
      ></iframe>
    </div>
  );
};

export default Music;
