import express from 'express';
import cors from "cors";
import * as dotenv from "dotenv";
import { RegisterRoutes } from "./controller"

dotenv.config();

const PORT = process.env.PORT


if (!PORT) {
    console.log("No port!")
    process.exit(1);
}

export const app = express();

RegisterRoutes(app);

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('*', function (req: any, res: express.Response) {
    res.status(404).send("Page not found. Check if server is running or check the request URL")
})

const server = app.listen(PORT);
const listening = () => {
    const addr = server.address();
    console.log(`Server listening on ${PORT}`);
    console.log("  Press CTRL-C to stop\n");
};
const throwError = (error: any) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    if (error.code === 'EACCES') {
        console.error("You do no have appropriate access prvileges to access this endpoint");
        process.exit(1);
    }
    else if (error.code === 'EADDRINUSE') {
        console.error(`${PORT} is already in use. Check your running services`);
        process.exit(1);
    }
    else if (error.code) {
        throw error;
    }
};

server.on('error', throwError);
server.on('listening', listening);
