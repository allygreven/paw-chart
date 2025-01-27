import { Outlet } from 'react-router-dom';
import { IoIosMenu } from 'react-icons/io';

const menuItems = [
  { name: 'Home', iconUrl: '/hylian-emblem.svg', path: '/' },
  { name: 'Medications', iconUrl: '/catalog.png', path: '/medications' },
  {
    name: 'Symptom Checker',
    iconUrl: '/catalog.png',
    path: '/symptom-checker',
  },
  { name: 'Immunizations', iconUrl: '/catalog.png', path: '/immunizations' },
  { name: 'About', iconUrl: '/catalog.png', path: '/about' },
  { name: 'Sign-out', iconUrl: '/catalog.png', path: '/sign-out' },
];

export function NavDrawer() {
  return (
    <div>
      <header className="w-full m-auto bg-gradient-to-r from-[#6A7A62] to-[#B5CCAA] p-5 text-white ">
        <IoIosMenu className="text-4xl" />
      </header>
      <Outlet />
    </div>
  );
}
