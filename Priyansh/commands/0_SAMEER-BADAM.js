const fs = require("fs");
module.exports.config = {
        name: "badamdrink",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "badamdrink",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("badam drink")==0 || event.body.indexOf("Badam drink")==0 || event.body.indexOf("BADAMDRINK")==0 || event.body.indexOf("Badamdrink")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐀𝐦𝐞𝐞𝐫 𝐊𝐡𝐀𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐁𝐚𝐃𝐚𝐦𝐃𝐫𝐢𝐧𝐤\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/BadamDrinkCan.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🥛", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
