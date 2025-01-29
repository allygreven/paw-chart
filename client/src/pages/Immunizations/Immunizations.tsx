import { AddImmunizations } from './AddImmunization';
import { PastImmunizations } from './PastImmunizations';

export function Immunizations() {
  return (
    <div className="flex flex-col bg-background h-screen font-regular items-center">
      <h1 className="font-heading text-2xl mt-6">Immunizations</h1>

      {/* ADD IMMUNIZATION */}

      <AddImmunizations />

      {/* PAST IMMUNIZATIONS */}

      <PastImmunizations />
    </div>
  );
}
