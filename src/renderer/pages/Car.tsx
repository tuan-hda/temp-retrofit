import React from 'react';
import { LuSunMedium } from 'react-icons/lu';
import { WiHumidity } from 'react-icons/wi';
import { useSelector } from 'react-redux';
import { RootState } from 'renderer/store';
import { MdLightbulbOutline } from 'react-icons/md';

const Car = () => {
  const { outTemp, humidity, lux } = useSelector(
    (state: RootState) => state.state,
  );

  return (
    <ul className="grid grid-cols-2 text-white font-medium py-10 text-center gap-10 px-20">
      <li className="flex flex-col gap-3 items-center rounded-xl bg-p-black-3 p-8">
        <LuSunMedium className="text-yellow-500 text-[36px]" />
        <p className="text-[40px] font-bold">{outTemp}°C</p>
        <p>Temperature</p>
      </li>
      <li className="flex flex-col gap-3 items-center rounded-xl bg-p-black-3 p-8 ">
        <WiHumidity className="text-blue-400 text-[36px]" />
        <p className="text-[40px] font-bold">{humidity}%</p>
        <p>Humidity</p>
      </li>
      <li className="flex flex-col gap-3 items-center rounded-xl bg-p-black-3 p-8 ">
        <MdLightbulbOutline className="text-white text-[36px]" />
        <p className="text-[40px] font-bold">{lux}</p>
        <p>Lux</p>
      </li>
    </ul>
  );
};

export default Car;
