let configObject = {
    sayFunction: () => {},
};

let sessionObject = {
    siteId: "",
    sessionId: "",
    answers: [],
};

function setConfigData(data) {
    for (let i in configObject) {
        if (Object.prototype.hasOwnProperty.call(data, i) && typeof data[i] === typeof configObject[i]) {
            configObject[i] = data[i];
        }
    }
}

function setSessionData(data) {
    for (let i in sessionObject) {
        if (Object.prototype.hasOwnProperty.call(data, i) && typeof data[i] === typeof sessionObject[i]) {
            sessionObject[i] = data[i];
        }
    }
}

function say(message = "") {
    configObject["sayFunction"](message);
}

module.exports = {
    setConfigData,
    setSessionData,
    say,
};
