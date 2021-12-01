const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

const connection = async (crudFunc, dataObj) => {
    try {
        await client.connect();
        console.log("connection successful");
        const db = client.db("CN_database");
        const collection = db.collection("books");
        await crudFunc(collection, dataObj);
        client.close();
    } catch (error) {
        console.log(error);
    }
}

module.exports = connection;