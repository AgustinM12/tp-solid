import express, { Application } from "express"
import cors from "cors"
import morgan from "morgan"
import { env } from "../types/types"
import { PORT } from "../config/config"
import clientRoutes from "../routes/client.routes"
import vehicleRoutes from "../routes/vehicle.routes"

export class Server {
    private app: Application;
    public port: env;

    constructor() {
        this.app = express();
        this.port = PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json());
    }

    routes(): void {
        this.app.use("/api", clientRoutes);
        this.app.use("/api", vehicleRoutes);
    }

    listen(): void {
        this.app.listen(this.port, () => console.log("Servidor corriendo en http://localhost:" + this.port))
    }
}