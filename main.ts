// Switch Statement
let weekEnd: string = "Saturday";
switch (weekEnd) {
    case "Sunday":
        console.log("Spend time with family.");
        break;
    case "Saturday":
        console.log("Explore the art of gardening.");
        break;
    default:
        console.log("Find a new hobby.");
}

let finalGrade = "A+";
switch (finalGrade) {
    case "A":
       console.log("Showed great performance");
       break;
    case "B":
       console.log("Satisfactory performance");
       break;
    default:
        console.log("Outstanding performance");
}   

let gotAdmission = "Karachi University";
switch (gotAdmission) {
    case "Iqra University":
        console.log("Congratulations!You got admission in Computer Science");
        break;
    case "Karachi University":
        console.log("Congratulations!You got admission in Public Health");
        break;
    case "Jinnah University For Women":
        console.log("Congratulations!You got admission in Microbiology");
        break;
    default:
        console.log("Sorry! You are not eligible");
}