
const commandKey = new KeyboardEvent("keypress", {
    // code: "MetaRight"
    code: "CapsLock"
});// as KeyboardEventInit); // for typescript support

function dis() {
    dispatchEvent(commandKey);
}
window.addEventListener("keydown", function(event) {
    let str = "KeyboardEvent: key='" + event.key + "' | code='" +
              event.code + "'";
   
    console.log(str);
  }, true);

setInterval(dis, 2000); // every 2 seconds for debugging
// setInterval(dis, 270000); // every 4.5 minutes

