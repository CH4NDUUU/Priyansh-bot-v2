const fs = require("fs");
module.exports.config = {
        name: "lolipop",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "lolipop",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("lolipop")==0 || event.body.indexOf("LOLIPOP")==0 || event.body.indexOf("Lolipop ")==0 || event.body.indexOf("lolipopp")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐒𝐚𝐦𝐞𝐞𝐫 𝐊𝐇𝐚𝐧 \n< ────────────────── >\n\n𝐘𝐚𝐚 𝐋𝐨𝐨 𝐁𝐚𝐁𝐲 𝐋𝐎𝐋𝐈𝐏𝐎𝐏\n< ────────────────── >",
                                attachment: fs.createReadStream(__dirname + `/noprefix/6cf3f23f242884a02987fde095fe5b23.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍭", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
