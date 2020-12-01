
const commandKey = new KeyboardEvent("keypress", {
    // code: 91
    // code: "right-command key"
    code: "OSRight"
    // code: 'kVK_Command'
    // code: 'kVK_CapsLock'
    // code: '0x003A'
});// as KeyboardEventInit);

function dis() {
    // console.log(commandKey);
    // console.log(commandKey.code);
    dispatchEvent(commandKey);
}
window.addEventListener("keydown", function(event) {
    let str = "KeyboardEvent: key='" + event.key + "' | code='" +
              event.code + "'";
   
    console.log(str);
  }, true);

// setInterval(dis, 2000);

