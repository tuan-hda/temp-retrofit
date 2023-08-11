import React from 'react';
import { BiBell } from 'react-icons/bi';
import { IoMdBluetooth } from 'react-icons/io';
import { IoBatteryFull } from 'react-icons/io5';
import { LuVolume2 } from 'react-icons/lu';
import { FaSignal } from 'react-icons/fa';
import { LuSunMedium } from 'react-icons/lu';
import moment from 'moment-timezone';
import { useSelector } from 'react-redux';
import { RootState } from 'renderer/store';
import { WiHumidity } from 'react-icons/wi';

const Header = () => {
  const { outTemp, humidity } = useSelector((store: RootState) => store.state);

  return (
    <div className="flex h-12 w-full flex-shrink-0 justify-between bg-p-black-1 px-6 text-[15px] font-medium text-white">
      <div className="flex items-center gap-7">
        <BiBell className="text-xl text-white" />
        <IoMdBluetooth className="text-xl text-white" />
        <LuVolume2 className="text-xl text-white" />
        <FaSignal className="text-xl text-white" />
      </div>
      <div className="flex items-center gap-7">
        <div className="flex items-center gap-1">
          <IoBatteryFull className="text-xl text-white" />
          <p className="text-white">89%</p>
        </div>

        <div className="flex items-center gap-1">
          <LuSunMedium className="text-xl text-yellow-500" />
          <p className="text-white">{outTemp}°C</p>
        </div>
        <div className="flex items-center gap-1">
          <WiHumidity className="text-xl text-white" />
          <p className="text-white">{humidity}%</p>
        </div>

        <div>{moment.tz('Asia/Ho_Chi_Minh').format('HH:mm')}</div>
      </div>
    </div>
  );
};

export default Header;
