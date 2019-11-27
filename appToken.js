const request = require("request");

const getPrimaveraToken = () => {
    var options = {
        method: 'POST',
        url: 'https://identity.primaverabss.com/connect/token',
        formData:
        {
            grant_type: 'client_credentials',
            client_id: 'SL-GBA',
            client_secret: '741e3ca0-cbad-4688-a897-547dd9ec3ffb',
            scope: 'application'
        }
    };

    request(options, (error, response, body) => {
        if(error) {
            console.error("Could not get PrimaveraAPPToken");
            process.exit(-1);   
        }
        process.env.PRIMAVERA_TOKEN = JSON.parse(body)["access_token"];
    });

}

module.exports = {
    getPrimaveraToken,
}