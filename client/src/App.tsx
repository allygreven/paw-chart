// import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
// import { Immunizations } from './pages/Immunizations';
// import { Medications } from './pages/Medications';
// import { SymptomChecker } from './pages/SymptomChecker';
import { NavDrawer } from './components/NavDrawer';
import { Homepage } from './pages/Homepage';
import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';

export default function App() {
  return (
    <>
      <SignIn />
      <Register />
      <NavDrawer />
      <Header />
      <Homepage />

      {/* <Immunizations />
      <Medications />
      <SymptomChecker />
      <NotFound /> */}
    </>
  );
}
