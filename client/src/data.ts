// import { User } from '../components/UserContext';

import { User } from './components/UserContext';

export type Immunization = {
  immunizationId?: number;
  name: string;
  date: string;
  petId?: number;
};

export type Medication = {
  medId?: number;
  name: string;
  dose: string;
  directions: string;
  petId?: number;
};

type Auth = {
  user: User;
  token: string;
};

// IMMUNIZATIONS

export async function readImmunizations(): Promise<Immunization[]> {
  const req = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const res = await fetch('/api/immunizations', req);
  if (!res.ok) {
    throw new Error(`Failed to fetch immunizations. Status: ${res.status}`);
  }
  const immunizations = await res.json();
  return immunizations as Immunization[];
}

export async function readImmunization(
  immunizationId: number
): Promise<Immunization | undefined> {
  const response = await fetch(`/api/immunizations/${immunizationId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch immunization. Status: ${response.status}`);
  }
  const data = (await response.json()) as Immunization;
  return data;
}

export async function addImmunization(newImmunization: Immunization) {
  const response = await fetch('/api/immunizations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(newImmunization),
  });
  if (!response.ok) throw new Error(`response status ${response.status}`);
  const data = (await response.json()) as Immunization;
  return data;
}

export async function removeImmunization(immunizationId: number) {
  const response = await fetch(`/api/immunizations/${immunizationId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  });
  if (!response.ok)
    throw new Error(`Failed to delete immunization ${response.status}`);
}

// MEDICATIONS

export async function readMeds(): Promise<Medication[]> {
  const req = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
  };
  const res = await fetch('/api/medications', req);
  if (!res.ok) {
    throw new Error(`Failed to fetch medications. Status: ${res.status}`);
  }
  const meds = await res.json();
  return meds as Medication[];
}

export async function readMed(medId: number): Promise<Medication | undefined> {
  const response = await fetch(`/api/medications/${medId}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch medication. Status: ${response.status}`);
  }
  const data = (await response.json()) as Medication;
  return data;
}

export async function addMed(newMed: Medication) {
  const response = await fetch('/api/medications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(newMed),
  });
  if (!response.ok) throw new Error(`response status ${response.status}`);
  const data = (await response.json()) as Medication;
  return data;
}

export async function updateMed(med: Medication) {
  const response = await fetch(`/api/medications/${med.medId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${readToken()}`,
    },
    body: JSON.stringify(med),
  });
  if (!response.ok)
    throw new Error(`Failed to update medication ${response.status}`);
  const data = (await response.json()) as Medication;
  return data;
}

export async function removeMed(medId: number) {
  const response = await fetch(`/api/medications/${medId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  });
  if (!response.ok)
    throw new Error(`Failed to delete medication ${response.status}`);
}

// OPENAI

export async function readInteraction(): Promise<string> {
  const response = await fetch('/api/compare', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${readToken()}`,
    },
  });
  if (!response.ok) throw new Error(`response status ${response.status}`);
  const data = (await response.json()) as string;
  return data;
}

// USER MANAGEMENT

const authKey = 'um.auth';

export function saveAuth(user: User, token: string): void {
  const auth: Auth = { user, token };
  localStorage.setItem(authKey, JSON.stringify(auth));
}

export function removeAuth(): void {
  localStorage.removeItem(authKey);
}

export function readUser(): User | undefined {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return (JSON.parse(auth) as Auth).user;
}

export function readToken(): string | undefined {
  const auth = localStorage.getItem(authKey);
  if (!auth) return undefined;
  return (JSON.parse(auth) as Auth).token;
}
