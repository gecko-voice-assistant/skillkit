/*
This file is part of G.E.C.K.O.
Copyright (C) 2023  Finn Wehn

G.E.C.K.O. is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
let configObject = {
    sayFunction: () => {},
    answerFunction: () => {},
    optionsFunction: () => {},
    rawTokenFunction: () => {},
    mqttPublishFunction: () => {},
    mqttSubscribeFunction: () => {}
};

function setConfigData(data) {
    for (let i in configObject) {
        if (Object.prototype.hasOwnProperty.call(data, i) && typeof data[i] === typeof configObject[i]) {
            configObject[i] = data[i];
        }
    }
}

function say(message = "") {
    configObject["sayFunction"](message);
}

function generateAnswer(answerIndex, ...args) {
    return configObject["answerFunction"](answerIndex, ...args);
}

function fail(err){
    say(err);
}

function getAllOptions(){
    return configObject["optionsFunction"]();
}

function publishMQTT(topic = "", payload) {
    configObject["mqttPublishFunction"](topic, JSON.stringify(payload));
}

function subscribeMQTT(topic = "", callback = () => {}){
    configObject["mqttSubscribeFunction"](topic, callback);
}

module.exports = {
    setConfigData,
    say,
    generateAnswer,
    fail,
    getAllOptions,
    publishMQTT,
    subscribeMQTT
};
