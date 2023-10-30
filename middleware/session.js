import expressSession from 'express-session';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';

dotenv.config();

const sessionMiddleware = expressSession({
    genid: (req) => {
        return uuidv4();
    },
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 3600000 },
});

const sessionHandler = (req, res, next) => {
    sessionMiddleware(req, res, () => {
        req.session.active = true;
        next();
    });
};

export { sessionMiddleware, sessionHandler };