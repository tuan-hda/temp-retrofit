import React, { useState } from 'react';

const Apps = () => {
  const [state, setState] = useState({
    error: 'no',
    stdout: 'no',
    stderr: 'no',
  });

  console.log(window);

  return (
    <div className="h-full w-full">
      <div className="autofill gap-8 p-7">
        <div className="h-[200px]">{state?.error}</div>
        <div className="h-[200px]">{state?.stdout}</div>
        <div className="h-[200px]">{state?.stderr}</div>
        <div
          className="h-[200px] bg-white"
          onClick={() =>
            window.electron.ipcRenderer.sendMessage('open-nautilus')
          }
        >
          Click here
        </div>
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
        <div className="h-[200px] bg-white" />
      </div>
    </div>
  );
};

export default Apps;
