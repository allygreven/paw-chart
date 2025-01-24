import { Outlet } from 'react-router-dom';

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
];

export function NavDrawer() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
