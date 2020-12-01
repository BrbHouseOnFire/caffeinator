const { command } = require("yargs");





const commandKey = new KeyboardEvent("keypress", {
    // code: 91
    // code: "right-command key"
    // code: "OSRight"
    code: kVK_Command
} as KeyboardEventInit);

function dis() {
    console.log(commandKey);
    console.log(commandKey.code);
    dispatchEvent(commandKey);
}

// setInterval(commandKey, 3000);

setInterval(dis(), 3000);

