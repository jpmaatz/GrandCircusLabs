let actualTemp = 70;
let desiredTemp = 70;

if (actualTemp > desiredTemp){
    console.log("Run A/C");
} else if 
    (actualTemp < desiredTemp){
        console.log("Run heat");
    } else {
        console.log("Standby");
}

const name1 = "Roger";
const name2 = "Rodger";
const name3 = "Rahdger";

if (name1.length > name2.length && name1.length > name3.length){
    console.log(name1 + " has a longer name than " + name2 + " and " + name3 + ".")
} else if (name2.length > name1.length && name2.length > name3.length) {
    console.log(name2 + " has a longer name than " + name1 + " and " + name3 + ".")
} else if (name3.length > name1.length && name3.length > name2.length){
    console.log(name3 + " has a longer name than " + name1 + " and " + name2 + ".")
} else if (name1.length === name2.length && name1.length > name3.length){
    console.log(name1 + "and" + name2 + " have a name that is the same length.")
} else if (name1.length === name3.length && name1.length > name2.length){
    console.log(name1 + "and" + name3 + " have a name that is the same length.")
} else if (name2.length === name3.length && name2.length > name1.length){
    console.log(name2 + "and" + name3 + " have a name that is the same length.")
} else {
    console.log(name1 + "and" + name2 + name3 + " all have a name that is the same length.")
}