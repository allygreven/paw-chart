import { Link, Outlet } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';
// import { IoHome } from 'react-icons/io5';
// import { PiSignOut } from 'react-icons/pi';
// import { GoInfo } from 'react-icons/go';
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
    <div>
      <header className="w-full m-auto bg-gradient-to-r from-[#6A7A62] to-[#B5CCAA] p-5 text-white ">
        <IoIosMenu onClick={() => setIsOpen(!isOpen)} className="text-4xl" />
        {isOpen && (
          <div>
            <ul className="flex flex-col">
              {menuItems.map((menu) => (
                <li key={menu.name} className="inline-block py-2 px-4">
                  <Link to={menu.path} className="text-white">
                    <menu.icon />
                    <span>{menu.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <h1 className="flex text-5xl font-logo space-x-4">
          <Link to="/">PawChart</Link>
        </h1>
      </header>

      <Outlet />
    </div>
  );
}
