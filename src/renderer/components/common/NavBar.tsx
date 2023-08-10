import React from 'react';
import classNames from 'classnames';
import { LuMusic } from 'react-icons/lu';
import { BiSolidNavigation } from 'react-icons/bi';
import { IoCallOutline } from 'react-icons/io5';
import { AiOutlineCar, AiOutlineAppstore } from 'react-icons/ai';
import { Link, matchRoutes, useLocation } from 'react-router-dom';

const MENU_ITEMS = [
  { icon: BiSolidNavigation, path: '/' },
  { icon: AiOutlineAppstore, path: '/apps' },
  { icon: LuMusic, path: '/music' },
  { icon: IoCallOutline, path: '/dial' },
  { icon: AiOutlineCar, path: '/car' },
];

const NavBar = () => {
  const location = useLocation();
  const route = matchRoutes(MENU_ITEMS, location)?.at(0);

  return (
    <ul className="flex h-full flex-1 items-center justify-center gap-2">
      {MENU_ITEMS.map((item, index) => {
        const Item = item.icon;
        return (
          <Link
            to={item.path}
            key={index}
            className="relative flex h-full items-center justify-center p-4 hover:no-underline"
          >
            <Item
              className={classNames(
                'text-3xl',
                item.path === route?.route.path ? 'text-white' : 'text-gray-1'
              )}
            />
            {item.path === route?.route.path && (
              <>
                <p className="absolute bottom-4 h-[6px] w-[6px] rounded-full bg-blue-1 shadow-inner shadow-blue-500" />
                <p className="absolute -bottom-7 h-12 w-12 rounded-full bg-blue-500/70 blur-lg"></p>
              </>
            )}
          </Link>
        );
      })}
    </ul>
  );
};

export default NavBar;
