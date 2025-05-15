Create a scalable Node.js + Express server project using TypeScript with the following specifications:

1. **Project Overview**:

   - A WhatsApp bot built using the "Baileys" library.
   - MongoDB as the primary database (use Mongoose).
   - JWT-based user authentication system (with access and refresh tokens).
   - Use `dotenv` for environment variable management.
   - Apply best practices in terms of structure, security, and maintainability.

2. **Folder Structure** (clean architecture):

   - `src/`
     - `config/` — config files for DB, auth, etc.
     - `controllers/` — route handlers.
     - `middlewares/` — custom middlewares (auth, error handling, etc.).
     - `models/` — Mongoose models.
     - `routes/` — route definitions.
     - `services/` — business logic (WhatsApp integration, user service, etc.).
     - `utils/` — helper functions.
     - `whatsapp/` — setup and logic for Baileys connection.
     - `types/` — custom TypeScript definitions.
     - `app.ts` — express app configuration.
     - `server.ts` — app entry point.

3. **Authentication Features**:

   - Sign up / Login routes.
   - Password hashing using `bcrypt`.
   - Token generation using `jsonwebtoken`.
   - Middleware to protect private routes.

4. **Security Best Practices**:

   - Use `helmet`, `cors`, `express-rate-limit`, `xss-clean`, `hpp`, and `mongo-sanitize`.
   - Use `morgan` for logging.
   - Sanitize and validate incoming requests.

5. **WhatsApp Integration**:

   - Setup `Baileys` WhatsApp bot connection inside `src/whatsapp/`.
   - Maintain session or re-authentication handling if applicable.
   - Provide a simple placeholder message handler function.

6. **Scripts & Tooling**:

   - Add `nodemon` and `ts-node-dev` for dev mode.
   - ESLint and Prettier for linting and formatting.
   - `.env.example` file for environment variable references.

7. **Packages to Install**:
   - `express`, `mongoose`, `bcrypt`, `jsonwebtoken`, `cors`, `helmet`, `express-rate-limit`, `xss-clean`, `hpp`, `morgan`, `dotenv`, `cookie-parser`, `mongo-sanitize`
   - Dev: `nodemon`, `ts-node`, `typescript`, `@types/express`, `@types/node`, `eslint`, `prettier`

Initialize the project with a Git repository and TypeScript config. Ensure everything is typed properly.

Also, set up a sample protected route (`/api/user/me`) to verify auth middleware.

Create this as a base boilerplate that I can expand to build the WhatsApp bot and user dashboard later.
