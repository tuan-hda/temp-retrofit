import React, { useState } from 'react';

const Apps = () => {
  const initialState = [
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
      name: 'YouTube',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
      name: 'Facebook',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://static-00.iconduck.com/assets.00/setting-fill-icon-1024x1024-10yek59x.png',
      name: 'Settings',
      appPath: 'nautilus --browser .',
    },

    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
      name: 'YouTube',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
      name: 'Facebook',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://static-00.iconduck.com/assets.00/setting-fill-icon-1024x1024-10yek59x.png',
      name: 'Settings',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://static-00.iconduck.com/assets.00/setting-fill-icon-1024x1024-10yek59x.png',
      name: 'Settings',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
      name: 'YouTube',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
      name: 'Facebook',
      appPath: 'nautilus --browser .',
    },
    {
      icon: 'https://static-00.iconduck.com/assets.00/setting-fill-icon-1024x1024-10yek59x.png',
      name: 'Settings',
      appPath: 'nautilus --browser .',
    },
  ];

  const [apps, setApps] = useState(initialState);

  return (
    <div className="h-full w-full bg-black">
      <ul className="autofill gap-10 p-7">
        {apps.map((app, index) => (
          <li key={index}>
            <div
              className="aspect-square w-full p-10 flex items-center justify-center flex-col bg-white/25 rounded-[30px]"
              key={index}
            >
              <img className="object-contain h-full w-full" src={app.icon} />
            </div>
            <p className="text-white text-lg font-semibold text-center mt-4">
              {app.name}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apps;
