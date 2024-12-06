const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PypDSaqB#ALg5_QS-mRhUe32-Uwimlb87E4tjctvtuCv4s7Ixwm8",
MONGODB: process.env.MONGODB || "mongodb://mongo:rMqkSeEtKJNSjhqkKaRSzScJoLoyxulo@junction.proxy.rlwy.net:41051",
};
