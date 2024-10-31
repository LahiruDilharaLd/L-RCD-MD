 // config.js
const fs = require("fs");
require("dotenv").config();

const config = {
 
  SESSION_ID: process.env.SESSION_ID || "RCD-MD&PrBWYJkC",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : true,
  STATUS_SEND_RAW_URL: process.env.STATUS_SEND_RAW_URL || "",
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true'
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true'
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true'
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true'
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true'
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true'
   /*auto block only for 212 */
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false'
  
  
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true'
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true'
  MODE: process.env.MODE || "public",
  PREFIX: process.env.PREFIX || "!",
  OWNER_NAME: process.env.OWNER_NAME || "Edith",
  SUDO_NUMBER: process.env.OWNER_NUMBER || "0741794556",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyCUPaxfIdZawsKZKqCqJcC-GWiQPCXKTDc",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true'
};


module.exports = config;
