import 'reflect-metadata'
import express from 'express';
// import "./database"
// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
const app = express();
const PORT = process.env.PORT || 8080;

// const rocketApi = require("../routes/api/rocketApi")
import rocketApi from "./routes/api/rocketApi"
import crewApi from "./routes/api/crewApi"
import crewmanApi from "./routes/api/crewmanApi"
import launchApi from "./routes/api/launchApi"
import AppDataSource from './data-source';


AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.use(express.json())
app.use("/rocket", rocketApi);
app.use("/crew", crewApi);
app.use("/crewman", crewmanApi);
app.use("/launch", launchApi);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));