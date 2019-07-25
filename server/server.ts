import * as express from 'express';
import {Application} from "express";


const app: Application = express();


const httpServer = app.listen(5000, () => {
    console.log("HTTP REST API Server running at http://localhost:" + httpServer.address().port);
});