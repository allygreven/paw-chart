import { useEffect, useState } from 'react';
import { Immunization, readImmunizations } from '../../data';
// import { FaRegTrashCan } from 'react-icons/fa6';

export function PastImmunizations() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [immunizations, setImmunizations] = useState<Immunization[]>([]);

  useEffect(() => {
    async function load() {
      try {
        const immunizations = await readImmunizations();
        setImmunizations(immunizations);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
    load();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    return (
      <div>
        Error Loading Entries:
        {error instanceof Error ? error.message : 'Unknown Error'}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <h2 className="mt-1 mr-60">Past Immunizations</h2>
      <table className="w-full border-collapse bg-white mt-4 m-20 rounded-xl shadow-lg">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="px-6 py-2 text-left">NAME</th>
            <th className="px-6 py-2 text-right">DATE</th>
          </tr>
        </thead>
        <tbody>
          {immunizations.map((row) => (
            <tr key={row.immunizationId} className="border-b border-gray-200">
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2 text-right">
                {new Date(row.date).toLocaleDateString('en-us', {
                  month: 'numeric',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </td>
              {/* <td>
                <FaRegTrashCan />
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
