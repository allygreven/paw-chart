import { Route, Routes } from 'react-router-dom';
import { Immunizations } from './pages/Immunizations';
import { Medications } from './pages/Medications';
import { SymptomChecker } from './pages/SymptomChecker';
import { NavDrawer } from './components/NavDrawer';
import { Homepage } from './pages/Homepage';
import { Register } from './pages/Register';
import { SignIn } from './pages/SignIn';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NavDrawer />}>
        <Route path="sign-in" element={<SignIn />} />
        <Route path="register" element={<Register />} />
        <Route index element={<Homepage />} />
        <Route path="immunizations" element={<Immunizations />} />
        <Route path="medications" element={<Medications />} />
        <Route path="symptom-checker" element={<SymptomChecker />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
