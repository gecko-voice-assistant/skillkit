let configObject = {
    sayFunction: (message) => console.log(message)
}

let sessionObject = {
    siteId: "",
    sessionId: "",
    answers: []

};

function setConfigData(data) {
    for (let i in configObject){
        if (data.hasOwnProperty(i) && typeof data[i] === typeof configObject[i]) {
            configObject[i] = data[i];
        }
    }
}

function setSessionData(data) {
    for (let i in sessionObject){
        if (data.hasOwnProperty(i) && typeof data[i] === typeof sessionObject[i]) {
            sessionObject[i] = data[i];
        }
    }
}

function say(message = "") {
    configObject["sayFunction"](message);
}

module.exports = {
    setConfigData, setSessionData, say
}