/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { authMiddleware, ClientError, errorMiddleware } from './lib/index.js';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

type Medication = {
  name: string;
  dose: string;
  medId: number;
};

type Immunizations = {
  immunizationId: number;
  name: string;
  date: string;
};

type SymptomChecker = {
  name: string;
  diagnosis: string;
  symptomId: number;
};

type Interactions = {
  interactionId: number;
  risk: string;
  description: string;
  medId1: number;
  medId2: number;
};

type Pets = {
  petId: number;
  name: string;
  type: string;
  age: number;
};

type User = {
  userId: number;
  username: string;
  hashedPassword: string;
};

type Auth = {
  user: User;
  token: string;
  username: string;
  password: string;
};

const hashKey = process.env.TOKEN_SECRET ?? '';
if (!hashKey) throw new Error('TOKEN_SECRET not found in env');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

/// SIGN - UP

app.post('/api/auth/sign-up', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      throw new ClientError(400, 'Username and password are required fields');
    }
    const hashedPassword = await argon2.hash(password);
    const sql = `
      insert into "users" ("username", "hashedPassword")
      values ($1, $2)
      returning "userId", "username";
    `;
    const result = await db.query<User>(sql, [username, hashedPassword]);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/// SIGN - IN

app.post('/api/auth/sign-in', async (req, res, next) => {
  try {
    const { username, password } = req.body as Partial<Auth>;
    if (!username || !password) {
      throw new ClientError(401, 'Invalid login');
    }
    const sql = `
      select "userId", "hashedPassword"
        from "users"
       where "username" = $1;
    `;
    const result = await db.query<User>(sql, [username]);
    const user = result.rows[0];
    if (!user) throw new ClientError(401, 'Invalid login');
    const { userId, hashedPassword } = user;
    if (!(await argon2.verify(hashedPassword, password)))
      throw new ClientError(401, 'Invalid login');
    const payload = { userId, username };
    const token = jwt.sign(payload, hashKey);
    res.json({ user: payload, token });
  } catch (err) {
    next(err);
  }
});

/** MEDICATIONS
 * GET all medications
 * READS a medication
 * UPDATES a medication
 * DELETE a medication
 */

app.get('/api/medications', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "medications";
    `;
    const result = await db.query<Medication>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/medications/:medId', async (req, res, next) => {
  try {
    const { medId } = req.params;
    if (!Number.isInteger(+medId)) {
      throw new ClientError(400, 'Invalid medication');
    }
    const sql = `
      select * from "medications"
      where "medId" = $1
    `;
    const params = [medId];
    const result = await db.query(sql, params);
    const med = result.rows[0];
    if (!med) throw new ClientError(404, 'Medication not found');
    res.json(med);
  } catch (err) {
    next(err);
  }
});

app.post('/api/medications', async (req, res, next) => {
  try {
    const { name, dose } = req.body;
    if (!name || !dose) {
      throw new ClientError(400, 'Medication information is required');
    }
    const sql = `
      insert into "medications" ("name", "dose")
        values ($1, $2)
        returning *
    `;
    const params = [name, dose];
    const result = await db.query<Medication>(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put('/api/medications/:medId', async (req, res, next) => {
  try {
    const { medId } = req.params;
    const { name, dose } = req.body;
    if (!name || !dose) {
      throw new ClientError(400, 'Medication information is required');
    }
    if (!Number.isInteger(+medId)) {
      throw new ClientError(400, 'Invalid medication');
    }
    const sql = `
      update "medications"
      set "name" = $1, "dose" = $2
      where "medId" = $4
      returning *;
    `;
    const params = [name, dose, medId];

    const result = await db.query(sql, params);
    const updatedMed = result.rows[0];
    if (!updatedMed) {
      throw new ClientError(404, 'Medication not found');
    }
    res.json(updatedMed);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/medications/:medId', async (req, res, next) => {
  try {
    const { medId } = req.params;
    if (!medId) {
      throw new ClientError(400, 'Invalid medication');
    }
    const sql = `
      delete from "medications"
      where "medId" = $1
      returning *
    `;
    const result = await db.query(sql, [medId]);
    if (result.rowCount === 0) {
      throw new ClientError(404, 'Medication not found');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/** IMMUNIZATIONS
 * GET all immunizations
 * GET an immunization
 * VIEW an immunization
 * DELETE an immunization
 */

app.get('/api/immunizations', async (req, res, next) => {
  try {
    const sql = `
      select *
        from "immunizations"
    `;
    const result = await db.query<Immunizations>(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/immunizations/:immunizationId', async (req, res, next) => {
  try {
    const { immunizationId } = req.params;
    if (!Number.isInteger(+immunizationId)) {
      throw new ClientError(400, 'Invalid immunization');
    }
    const sql = `
      select * from "immunizations"
      where "immunizationId" = $1 and "petId"= $2;
    `;
    const params = [immunizationId];
    const result = await db.query(sql, params);
    const immunization = result.rows[0];
    if (!immunization) throw new ClientError(404, 'Immunization not found');
    res.json(immunization);
  } catch (err) {
    next(err);
  }
});

app.post('/api/immunizations', async (req, res, next) => {
  try {
    const { name, date } = req.body;
    if (!name || !date) {
      throw new ClientError(400, 'Immunization information is required');
    }
    // if (name === name) {
    //   throw new ClientError(403, 'Immunization already exists')
    // }
    const sql = `
      insert into "immunizations" ("name", "date")
        values ($1, $2)
        returning *
    `;
    const params = [name, date];
    const result = await db.query<Immunizations>(sql, params);
    res.status(201).json(result.rows[0]);
    console.log('added immunization');
  } catch (err) {
    next(err);
  }
});

app.delete('/api/immunizations/:immunizationId', async (req, res, next) => {
  try {
    const { immunizationId } = req.params;
    if (!immunizationId) {
      throw new ClientError(400, 'Invalid immunization');
    }
    const sql = `
      delete from "immunizations"
      where "immunizationId" = $1
      returning *
    `;
    const result = await db.query(sql, [immunizationId]);
    if (result.rowCount === 0) {
      throw new ClientError(404, 'Immunization not found');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

/** SYMPTOM CHECKER
 * GET all symptoms
 * GET a symptom
 * READ a symptom
 * UPDATE a symptom
 * DELETE a symptom
 */

app.get('/api/symptomChecker', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select *
        from "symptomChecker"
        where "petId" = $1;
    `;
    const result = await db.query<SymptomChecker>(sql, [req.user?.userId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get(
  '/api/symptomChecker/:symptomId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { symptomId } = req.params;
      if (!Number.isInteger(+symptomId)) {
        throw new ClientError(400, 'Invalid symptom');
      }
      const sql = `
      select * from "symptomChecker"
      where "symptomId" = $1 and "petId"= $2;
    `;
      const params = [symptomId, req.user?.userId];
      const result = await db.query(sql, params);
      const symptom = result.rows[0];
      if (!symptom) throw new ClientError(404, 'Symptoms not found');
      res.json(symptom);
    } catch (err) {
      next(err);
    }
  }
);

app.post('/api/symptomChecker', authMiddleware, async (req, res, next) => {
  try {
    const { name, diagnosis, sex } = req.body;
    if (!name || !diagnosis || !sex) {
      throw new ClientError(400, 'Symptom information is required');
    }
    const sql = `
      insert into "symptomChecker" ("name", "diagnosis", "sex", "petId")
        values ($1, $2, $3, $4)
        returning *
    `;
    const params = [name, diagnosis, sex, req.user?.userId];
    const result = await db.query<SymptomChecker>(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.put(
  '/api/symptomChecker/:symptomId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { symptomId } = req.params;
      const { name, diagnosis } = req.body;
      if (!name || !diagnosis) {
        throw new ClientError(400, 'Symptom information are required');
      }
      if (!Number.isInteger(+symptomId)) {
        throw new ClientError(400, 'Invalid symptom');
      }
      const sql = `
      update "symptomChecker"
      set "name" = $1, "diagnosis" = $2
      where "symptomId" = $4 and "petId" = $5
      returning *;
    `;
      const params = [name, diagnosis, symptomId, req.user?.userId];
      const result = await db.query(sql, params);
      const updatedSymptom = result.rows[0];
      if (!updatedSymptom) {
        throw new ClientError(404, 'Symptom not found');
      }
      res.json(updatedSymptom);
    } catch (err) {
      next(err);
    }
  }
);

app.delete(
  '/api/symptomChecker/:symptomId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { symptomId } = req.params;
      if (!symptomId) {
        throw new ClientError(400, 'Invalid symptom');
      }
      const sql = `
      delete from "symptomChecker"
      where "symptomId" = $1 and "petId"= $2
      returning *
    `;
      const result = await db.query(sql, [symptomId, req.user?.userId]);
      if (result.rowCount === 0) {
        throw new ClientError(404, 'Symptom not found');
      }
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

/** INTERACTIONS
 * GET all medication interactions
 * GET interaction by medication pair medId1 and medId2 and names
 * READ medId1 and medId2 interactions
 * UPDATE medId1 and medId2 to change the interaction and message
 * DELETE an interaction
 */

app.get('/api/interactions', authMiddleware, async (req, res, next) => {
  try {
    const sql = `
      select *
        from "interactions"
        where "petId" = $1;
    `;
    const result = await db.query<Interactions>(sql, [req.user?.userId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get(
  '/api/interactions/:interactionId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { interactionId } = req.params;
      if (!Number.isInteger(+interactionId)) {
        throw new ClientError(400, 'Invalid interaction');
      }
      const sql = `
      select "i"."interactionId",
              "m1"."name" as "med1Name",
              "m2"."name" as "med2Name"
      from "interactions" as "i"
      join "medications" as "m1" on "i"."med1" = "m1"."medId"
      join "medications" as "m2" on "i"."med2" = "m2"."medId"
      where "i"."petId" = $1;
    `;
      const params = [interactionId, req.user?.userId];
      const result = await db.query(sql, params);
      const interaction = result.rows[0];
      if (!interaction) throw new ClientError(404, 'Interaction not found');
      res.json(interaction);
    } catch (err) {
      next(err);
    }
  }
);

app.post('/api/interactions', authMiddleware, async (req, res, next) => {
  try {
    const { risk, description, medId1, medId2 } = req.body;
    if (!risk || !description || !medId1 || !medId2) {
      throw new ClientError(400, 'Interaction is required');
    }
    const sql = `
      insert into "interactions" ("risk", "description", "medId1", "medId2", "petId")
        values ($1, $2, $3, $4, $5)
        returning *
    `;
    const params = [risk, description, medId1, medId2, req.user?.userId];
    const result = await db.query<Interactions>(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

/// change medID to med NAME!!!!!!!
app.put(
  '/api/interactions/:interactionId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { interactionId } = req.params;
      const { risk, description, medId1, medId2 } = req.body;
      if (!risk || !description || !medId1 || !medId2) {
        throw new ClientError(400, 'Interaction information is required');
      }
      if (!Number.isInteger(+interactionId)) {
        throw new ClientError(400, 'Invalid interaction');
      }
      const sql = `
      update "interactions"
      set "risk" = $1, "description" = $2, "medId" = $3, "medId2" = $4
      where "interactionId" = $5 and "petId" = $6
      returning *;
    `;
      const params = [
        risk,
        description,
        medId1,
        medId2,
        interactionId,
        req.user?.userId,
      ];
      const result = await db.query(sql, params);
      const updatedInteraction = result.rows[0];
      if (!updatedInteraction) {
        throw new ClientError(404, 'Interaction not found');
      }
      res.json(updatedInteraction);
    } catch (err) {
      next(err);
    }
  }
);

app.delete(
  '/api/interactions/:interactionId',
  authMiddleware,
  async (req, res, next) => {
    try {
      const { interactionId } = req.params;
      if (!interactionId) {
        throw new ClientError(400, 'Invalid interaction');
      }
      const sql = `
      delete from "interactions"
      where "interactionId" = $1 and "petId"= $2
      returning *
    `;
      const result = await db.query(sql, [interactionId, req.user?.userId]);
      if (result.rowCount === 0) {
        throw new ClientError(404, 'Interaction not found');
      }
      res.sendStatus(204);
    } catch (err) {
      next(err);
    }
  }
);

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
