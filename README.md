# PawChart :paw_prints:

A dynamic PERN stack solo project for pet owners to track their pets’ health and medical records.

## Take a look :eyes:

---

### About PawChart

  This project is a little personal for me. I have two middle-age dogs, one with every health problem under the sun who takes a plethora of medications at all hours of the day. I’m constantly challenging her many vets and specialists (all at different veterinary clinics--go figure) <i>“Are you sure she can take that with the medications she’s already on?”</i>
  
  I can’t be the only one dealing with this struggle, which is what led me to develop PawChart for my school project. With PawChart, users can ditch the messy file folders and keep track of their pet’s medical records digitally. Easily upload medications and dosages, then check for potential interactions with a click of a button. Whether your pet is on two meds or ten, PawChart analyzes them using OpenAI and gives you a clear, concise breakdown of any notable interactions—classified as ‘moderate’ or ‘high.’

---

### Let's talk code

I built a custom API from scratch to securely store and manage pet medication data and immunization history. To take it up a notch, I integrated OpenAI’s API with some advanced prompting magic, allowing PawChart to provide medication interaction insights and a handy symptom checker. Security is important, so I implemented user authentication and management to ensure sensitive pet data remains protected. This whole application was developed with the PERN stack, and because I like a challenge, I taught myself Tailwind CSS along the way to give the app a sleek, responsive design.

LearningFuze provided the configuration files and server middleware code in client-error.ts (for error handling) and authorization-middleware.ts (for user management), while I wrote all other code from the ground up.

![Screenshot 2025-02-13 at 1 36 42 PM](https://github.com/user-attachments/assets/eccbf135-d42d-4228-b9d6-0c68a0ad8d16)
![Screenshot 2025-02-13 at 1 37 10 PM](https://github.com/user-attachments/assets/076c70c6-05bb-444a-b5c0-b9c1714da027)


---

### Run and test project setup

#### Getting Started

1. Install all dependencies with `npm install`.

#### Create the database

If your project will be using a database, create it now.

1. Start PostgreSQL
   ```sh
   sudo service postgresql start
   ```
1. Create database (replace `name-of-database` with a name of your choosing, such as the name of your app)
   ```sh
   createdb name-of-database
   ```
1. In the `server/.env` file, in the `DATABASE_URL` value, replace `changeMe` with the name of your database, from the last step
1. While you are editing `server/.env`, also change the value of `TOKEN_SECRET` to a custom value, without spaces.
1. Make the same changes to `server/.env.example`.

If your project will _not_ be using a database, edit `package.json` to remove the `dev:db` script.

#### Start the development servers

1. Start all the development servers with the `"dev"` script:
   ```sh
   npm run dev
   ```
1. Later, when you wish to stop the development servers, type `Ctrl-C` in the terminal where the servers are running.

#### Verify the client

1. A React app has already been created for you.
1. Take a minute to look over the code in `client/src/App.tsx` to get an idea of what it is doing.
1. Go to the app in your browser. You should see the home webpage of PawChart.
   ![pawchart-home](https://github.com/user-attachments/assets/22215393-41c8-4a09-b270-a9249c3e4df4)


1. If you see the message from the server in your browser you are good to go, your client and server are communicating.

#### Set up the database

1. In your browser navigate to the site you used for your database design.
1. Export your database as PostgreSQL, this should generate the SQL code for creating your database tables.
   - Reach out to an instructor if you have any issues with this step
1. Copy the generated SQL code and paste it into `database/schema.sql` below the preexisting sql code in the file. The end result should look something like: _(You will likely have more tables)_

   ```SQL
   set client_min_messages to warning;

   -- DANGER: this is NOT how to do it in the real world.
   -- `drop schema` INSTANTLY ERASES EVERYTHING.
   drop schema "public" cascade;

   create schema "public";

   create table "todos" (
       "todoId"      serial PRIMARY KEY,
       "task"        text not null,
       "isCompleted" boolean not null,
       "createdAt"   timestamptz not null DEFAULT now(),
       "updatedAt"   timestamptz not null DEFAULT now()
   );
   ```

1. In a separate terminal, run `npm run db:import` to create your tables
1. Use `psql` to verify your tables were created successfully (see [LFZ Database Guide](https://lms.learningfuze.com/code-guides/Learning-Fuze/curriculum/database) for tips). Your database and tables should be listed; if not, stop here and reach out to an instructor for help
1. At this point your database is setup and you are good to start using it. However there is no data in your database, which isn't necessarily a bad thing, but if you want some starting data in your database you need to add insert statements into the `database/data.sql` file. You can add whatever starting data you need/want. Here is an example:
   ```SQL
   insert into "todos" ("task", "isCompleted")
   values
       ('Learn to code', false),
       ('Build projects', false),
       ('Get a job', false);
   ```
1. After any changes to `database/schema.sql` or `database/data.sql` re-run the `npm run db:import` command to update your database. Use `psql` to verify your changes were successfully applied.

## Deployment

Once your template is set up and functional, deploy it. This will get all the deployment issues ironed out early. During development, you should re-deploy frequently to make sure that your code works properly in your production environment. Deployment instructions can be found [HERE](https://lms.learningfuze.com/code-guides/Learning-Fuze/curriculum/Full-Stack-Project_Deploy-To-EC2)

---

### Available `npm` commands explained

Below is an explanation of all included `npm` commands in the root `package.json`. Several are only used for deployment purposes and should not be necessary for development.

1. `start`
   - The `start` script starts the Node server in `production` mode, without any file watchers.
1. `build`
   - The `build` script executes `npm run build` in the context of the `client` folder. This builds your React app for production. This is used during deployment, and not commonly needed during development.
1. `db:import`
   - The `db:import` script executes `database/import.sh`, which executes the `database/schema.sql` and `database/data.sql` files to build and populate your database.
1. `dev`
   - Starts all the development servers.
1. `lint`
   - Runs ESLint against all the client and server code.
1. `psql`
   - When used on the EC2 instance, runs `psql` attached to the project database. Helpful for debugging issues with the database.
1. `tsc`
   - Runs the TypeScript compiler against all the client and server code.
1. Not directly used by developer
   1. `install:*`
   - These scripts install dependencies in the `client` and `server` folders, and copy `.env.example` to `.env` if it doesn't already exist.
   1. `dev:*`
   - These scripts start the individual development servers.
   1. `lint:*`
   - These scripts run lint in the client and server directories.
   1. `tsc:*`
   - These scripts run tsc in the client and server directories.
   1. `postinstall`
      - The `postinstall` script is automatically run when you run `npm install`. It is executed after the dependencies are installed. Specifically for this project the `postinstall` script is used to install the `client` and `server` dependencies.
   1. `prepare`
      - The `prepare` script is similar to `postinstall` — it is executed before `install`. Specifically for this project it is used to install `husky`.
   1. `deploy`
      - The `deploy` script is used to deploy the project by pushing the `main` branch to the `pub` branch, which triggers the GitHub Action that deploys the project.
