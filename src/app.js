import Express  from "express";
import groceriesRoutes from "./routes/groceries.routes.js";

// Instanciar Express
 const app = Express();
 app.use(Express.json());
 app.use('/api/students/', groceriesRoutes)
 export default app;