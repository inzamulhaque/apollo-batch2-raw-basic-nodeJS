const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.on("birthday", () => {
  console.log(`HAPPY BIRTHDAY TO YOU`);
});

myEmitter.on("birthday", (gift) => {
  console.log(`I will send a ${gift}`);
});

myEmitter.emit("birthday", "watch");
