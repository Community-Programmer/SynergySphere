import express, { Request, Response } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';
import globalErrorHandler from './middleware/globalErrorHandler';
import authRoutes from './auth/authRoutes';
import projectRoutes from './project/projectRoutes';
import taskRoutes from './task/taskRoutes';


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


app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use(globalErrorHandler);


export { server, io };