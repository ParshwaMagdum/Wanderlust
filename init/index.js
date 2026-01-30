const mongoose = require("mongoose");
const intiData = require("./data.js");
const listing = require("../models/listing.js");

main()
    .then(() => {
        console.log("connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const initDB = async() => {
    await listing.deleteMany({});
    intiData.data = intiData.data.map((obj) => ({...obj, owner: '696b41efbee3bf91339efc94' }));
    await listing.insertMany(intiData.data);
    console.log("Data is initialized");
};

initDB();