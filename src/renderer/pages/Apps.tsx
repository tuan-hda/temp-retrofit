import React, { useState } from 'react';

const Apps = () => {
  return (
    <div className="h-full w-full">
      <div className="autofill gap-8 p-7">
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
