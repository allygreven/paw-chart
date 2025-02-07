import { AddImmunizations } from "./AddImmunization";
import { PastImmunizations } from "./PastImmunizations";

export function Immunizations() {
  return (
    <div className="bg-background font-regular flex h-screen flex-col items-center">
      <h1 className="font-heading mt-6 text-2xl">Immunizations</h1>

      <AddImmunizations />

      <PastImmunizations />
    </div>
  );
}
