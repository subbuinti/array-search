const attendanceData = require("./data.json");

function search(name) {
  return attendanceData
    .filter((item) => {
      if (
        name &&
        item.employeName.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      ) {
        return item;
      }
    })
    .map((item) => {
      let timeStart = new Date(`${item.date} ${item.checkinTime}`).getHours();
      let timeEnd = new Date(`${item.date} ${item.checkouttime}`).getHours();

      item.workingHours = Math.abs(timeEnd - timeStart);
      return item;
    });
}

console.log(search("Test6"));
// console.log(search("test6"));
// console.log(search("test5"));
// console.log(search("test4"));
// console.log(search(""));
