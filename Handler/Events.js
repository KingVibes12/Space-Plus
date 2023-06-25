const { white, green } = require("chalk");
const { readdirSync } = require('fs');

module.exports = async (client) => {
    const loadcommand = dirs =>{
        const events = readdirSync(`./Events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../Events/${dirs}/${file}`);
            const eName = file.split('.')[0];
            client.on(eName, evt.bind(null, client));
        }
    };
    ["Client", "Guild"].forEach((x) => loadcommand(x));
    console.log(white('[') + green('INFO') + white('] ') + green('Event ') + white('Events') + green(' Loaded!'));
};