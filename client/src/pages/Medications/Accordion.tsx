// import { useState } from 'react';
// import { CurrentMeds } from './CurrentMeds';

// export type CurrentMeds = {
//   id: number;
//   name: string;
//   dose: string;
//   directions: string;
// };

// type Props = {
//   meds: CurrentMeds[];
// };

// export function Accordion({ meds }: Props) {
//   const [medId, setMedId] = useState<number>();

//   return (
//     <div>
//       {meds.map((med) => (
//         <CurrentMeds
//           key={med.id}
//           med={med}
//           isOpen={medId === med.id}
//           onClick={() =>
//             medId === med.id ? setMedId(undefined) : setMedId(med.id)
//           }
//         />
//       ))}
//     </div>
//   );
// }
