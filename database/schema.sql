set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";


CREATE TABLE "users" (
  "userId" serial PRIMARY KEY,
  "username" text,
  "hashedPassword" integer
);

CREATE TABLE "pets" (
  "petId" serial PRIMARY KEY,
  "name" text,
  "type" text,
  "age" integer,
  "userId" integer
);

CREATE TABLE "medications" (
  "medId" serial PRIMARY KEY,
  "name" text,
  "dose" text,
  "petId" integer
);

CREATE TABLE "immunizations" (
  "immunizationId" serial PRIMARY KEY,
  "name" text,
  "date" date,
  "petId" integer
);

CREATE TABLE "symptomChecker" (
  "symptomId" serial PRIMARY KEY,
  "name" text,
  "diagnosis" text,
  "petId" integer
);

CREATE TABLE "interactions" (
  "interactionId" serial PRIMARY KEY,
  "risk" text,
  "description" text,
  "petId" integer,
  "medId1" integer,
  "medId2" integer
);

COMMENT ON COLUMN "pets"."type" IS 'values: dog, cat';

ALTER TABLE "pets" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");

ALTER TABLE "medications" ADD FOREIGN KEY ("petId") REFERENCES "pets" ("petId");

ALTER TABLE "immunizations" ADD FOREIGN KEY ("petId") REFERENCES "pets" ("petId");

ALTER TABLE "symptomChecker" ADD FOREIGN KEY ("petId") REFERENCES "pets" ("petId");

ALTER TABLE "interactions" ADD FOREIGN KEY ("petId") REFERENCES "pets" ("petId");

ALTER TABLE "interactions" ADD FOREIGN KEY ("medId1") REFERENCES "medications" ("medId");

ALTER TABLE "interactions" ADD FOREIGN KEY ("medId2") REFERENCES "medications" ("medId");
