switch ((month = 2)) {
  case 1:
    console.log("Month is January");
    break;
  case 2:
    console.log("Month is February");
  // break;
  case 3:
    console.log("Month is March");
    break;
  default:
    console.log("Out of Range");
}

switch ((month = "Mar")) {
  case "Jan":
    console.log("First month");
    break;
  case "Feb":
    console.log("Secong month");
    break;
  case "Mar":
    console.log("Third month");
    break;
  case "Apr":
    console.log("Fourth month");
    break;
}
