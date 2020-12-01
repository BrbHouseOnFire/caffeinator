




const commandKey = new KeyboardEvent("keypress", {
    code: 91
} as KeyboardEventInit);


// setInterval(commandKey, 3000);

setInterval(dispatchEvent(commandKey), 3000);

