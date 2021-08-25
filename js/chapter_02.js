// 조건문 : swich, if

let day = new Date().getDay();
console.log(day);

switch (day) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Satursday");
    break;

  default:
    console.log("What ?");
}

if (day === 0) {
  console.log("일요일");
} else if (day === 1) {
  console.log("월요일");
} else if (day === 2) {
  console.log("화요일");
} else if (day === 3) {
  console.log("수요일");
} else if (day === 4) {
  console.log("목요일");
} else {
  console.log("금토 중에 하루");
}
