import { connect } from "mongoose";
import { config } from "dotenv";
config();

const Config_Db = async (database) => {
    try {
        //await connect (process.env.MONGO_URI);
        await connect(`mongodb://localhost:27017/${database}`);
        console.log(`database is connecting with Atlas `);
    }catch(err) {
        console.error(err);
    }
}

export default Config_Db;