import moment from "moment";

function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

function showDateTime() {
    const date = moment().format('LL');
    const time = moment().format('LTS');
    const day = moment().format('dddd');
    console.log(`Today's date is: ${date}`);
    console.log(`Current time is: ${time}`);
    console.log(`It's a great ${day}!`);
}

// Run the functions
greetUser("Saranya");
showDateTime();
