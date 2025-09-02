import { connect } from "mongoose";

const Config_Db = async (dataBase) => {
    try {
        await connect (`mongodb://localhost:27017/${dataBase}`);
        console.log(`database is connecting as ${dataBase} `);
    }catch(err) {
        console.error(err);
    }
}

export default Config_Db;