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
    <div>
      <h2>Past Immunizations</h2>
      <table className="mt-4 m-20 bg-white rounded-xl shadow-lg">
        <thead>
          <tr>
            <th>NAME</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {immunizations.map((row) => (
            <tr key={row.immunizationId}>
              <td>{row.name}</td>
              <td>
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
