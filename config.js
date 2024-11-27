const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "EtQiHKab#WKhBkKqWeshlRGH3IQA0T0er5N_4tvQDUQKMmgBRIQk",
MONGODB: process.env.MONGODB || "mongodb://mongo:ANhaXesuaDgitpHJaZkzNoyoxdRnXLSd@junction.proxy.rlwy.net:34193",
};
config.js
Displaying config.js.
