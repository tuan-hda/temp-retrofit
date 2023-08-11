import React from 'react';
import { LuFan } from 'react-icons/lu';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'renderer/store';
import { changeTempAction } from 'renderer/store/stateSlice';

const Footer = () => {
  const { leftTemp, rightTemp } = useSelector(
    (state: RootState) => state.state,
  );
  const dispatch = useDispatch();

  const changeTemp = (type: 'left' | 'right', value: number) => () => {
    dispatch(changeTempAction({ type, value }));
  };

  return (
    <div className="flex h-24 w-full flex-shrink-0 items-center justify-between overflow-hidden bg-p-black-1 px-5">
      <div className="flex flex-1 items-center">
        <LuFan className="text-2xl text-gray-1" />

        <div className="ml-4 flex items-center gap-2">
          <button
            className="p-2 flex items-center justify-center"
            onClick={changeTemp('left', -1)}
          >
            <HiOutlineChevronLeft className="text-3xl text-gray-1" />
          </button>
          <p className="text-2xl w-9 font-medium text-p-white-1">{leftTemp}°</p>
          <button
            className="p-2 flex items-center justify-center"
            onClick={changeTemp('left', 1)}
          >
            <HiOutlineChevronRight className="text-3xl text-gray-1" />
          </button>
        </div>
      </div>

      <NavBar />

      <div className="ml-4 flex flex-1 items-center justify-end gap-2">
        <button
          className="p-2 flex items-center justify-center"
          onClick={changeTemp('right', -1)}
        >
          <HiOutlineChevronLeft className="text-3xl text-gray-1" />
        </button>
        <p className="text-2xl w-9 font-medium text-p-white-1">{rightTemp}°</p>
        <button
          className="p-2 flex items-center justify-center"
          onClick={changeTemp('right', 1)}
        >
          <HiOutlineChevronRight className="text-3xl text-gray-1" />
        </button>
      </div>
    </div>
  );
};

export default Footer;
