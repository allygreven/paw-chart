import { useEffect, useState } from 'react';
import { Immunization, readImmunizations } from '../../data';

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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {immunizations.map((row) => (
            <tr key={row.immunizationId}>
              {/* <td>{row.immunizationId}</td> */}
              <td>{row.name}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
