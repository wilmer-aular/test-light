const fs = require("fs");
const buffer = fs.readFileSync("data.txt", "utf-8");

const data = buffer.toString();
const room = data.split("\n").map((e) =>
  e
    .split(" ")
    .filter((i) => i !== "")
    .map(Number)
);

const verifyRoom = () => {
  const illuminatedRoom = [];
  let illuminatedY = [];
  const lamp = [];
  room.forEach((row, x) => {
    const columns = [];
    let illuminatedX = false;
    row.forEach((column, y) => {
      if (column === 0) {
        if (!illuminatedY.includes(y) && !illuminatedX) {
          illuminatedX = true;
          lamp.push({ x, y });
          illuminatedY.push(y);
          columns.push(3);
        } else {
          columns.push(0);
        }
      } else {
        illuminatedX = false;
        illuminatedY = illuminatedY.filter((e) => e !== y);
        columns.push(1);
      }
    });
    illuminatedRoom.push(columns);
  });
  return illuminatedRoom;
};

module.exports = verifyRoom;
