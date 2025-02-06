import { Route, Routes } from "react-router-dom";
import { Immunizations } from "./pages/Immunizations/Immunizations";
import { Medications } from "./pages/Medications/Medications";
import { SymptomChecker } from "./pages/SymptomChecker";
import { NavDrawer } from "./components/NavDrawer";
import { Homepage } from "./pages/Homepage";
import { NotFound } from "./pages/NotFound";
import { About } from "./pages/About";
import { IoHome } from "react-icons/io5";
import { CgPill } from "react-icons/cg";
import { FaNotesMedical, FaThermometerFull } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { PiSignOut } from "react-icons/pi";
import { AuthPage } from "./pages/AuthPage";
import { Welcome } from "./pages/Welcome";

const menuItems = [
  { name: "Home", icon: IoHome, path: "/home" },
  { name: "Medications", icon: CgPill, path: "/medications" },
  {
    name: "Symptom Checker",
    icon: FaThermometerFull,
    path: "/symptom-checker",
  },
  { name: "Immunizations", icon: FaNotesMedical, path: "/immunizations" },
  { name: "About", icon: GoInfo, path: "/about" },
  { name: "Sign-out", icon: PiSignOut, path: "/sign-out" },
];

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavDrawer menuItems={menuItems} />}>
        <Route path="sign-in" element={<AuthPage mode="sign-in" />} />
        <Route path="register" element={<AuthPage mode="register" />} />
        <Route index element={<Welcome />} />
        <Route path="immunizations" element={<Immunizations />} />
        <Route path="medications" element={<Medications />} />
        <Route path="symptom-checker" element={<SymptomChecker />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
