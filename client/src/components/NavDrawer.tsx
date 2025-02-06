import { Link, Outlet } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
import { useState } from 'react';
import { IconType } from 'react-icons';

// ${<${icon.signOut} />}

export type MenuItem = {
  name: string;
  icon: IconType;
  path: string;
};

type Props = {
  menuItems: MenuItem[];
};

export function NavDrawer({ menuItems }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-background h-screen">
      <header className="w-full m-auto bg-gradient-to-r from-[#6A7A62] to-[#B5CCAA] p-1 text-white">
        <div className="flex items-center space-x-4">
          <IoIosMenu
            onClick={() => setIsOpen(!isOpen)}
            className="ml-4 text-4xl hover:text-[#E9E9E9] cursor-pointer"
          />

          {/* LOGO  */}

          <h1 className="ml-8 text-5xl font-logo ">
            <Link to="/home" className="flex items-center">
              PawChart
              <img
                src="/images/vecteezy_paw-icon-set-black-icon-png-transparent_9664031.png"
                alt="paw prints"
                className="w-15"
              />
            </Link>
          </h1>
        </div>

        {/* MENU ITEMS */}

        {isOpen && (
          <div>
            <ul className="flex flex-col font-inter font-light">
              {menuItems.map((menu) => (
                <li key={menu.name} className="inline-block py-2 px-4">
                  <Link
                    to={menu.path}
                    className="text-white hover:text-[#E9E9E9]"
                    onClick={() => setIsOpen(false)}>
                    <menu.icon />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>

      <Outlet />
    </div>
  );
}
