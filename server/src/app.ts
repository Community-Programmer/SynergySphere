import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import globalErrorHandler from './middleware/globalErrorHandler';


config();

const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_URL,
  },
});

app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Welcome to Synergy Sphere Express Backend',
  });
});


app.use(globalErrorHandler);


export { server, io };