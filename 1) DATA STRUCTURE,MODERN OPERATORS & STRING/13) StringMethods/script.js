console.log("############### STRING ###############");
let myName = "I love Bangladesh";
console.log(myName);
console.log(myName[0]);
for (const x of myName) {
    console.log(x);
}
console.log("######## Direct Into String #########");
console.log("Hello"[0]);

console.log("######## Length #########");
console.log(myName.length);
console.log("Santo".length);

console.log("######## IndexOf & lstIndexOf #########");
console.log(myName.indexOf('l'));
console.log(myName.lastIndexOf('l'));

console.log("######## Slice #########");
console.log(myName.slice(4));
console.log(myName.slice(0, 8));
console.log(myName.slice(2, myName.indexOf('B')));
console.log(2, myName.lastIndexOf('h'));

console.log("######## Reverse Slicing #########");
console.log(myName.slice(1, -1));
console.log(myName.slice(-8, -1));
console.log(myName.slice(-1));

console.log("######## Simple Task #########");

let seatChecker = (seat) => {
    const s = seat.slice(-1);
    console.log(s);
    if (s === 'C' || s === 'D' || s === 'E') {
        console.log(`You got the middle seat 🎉🎉`);
    } else if (s === 'A' || s === 'B' || s === 'G') {
        console.log(`You got the first seat 😊😊`);
    } else {
        console.log(`You got the last seat 😔😔`);
    }
}

seatChecker('99A');
seatChecker('00C');
seatChecker('45D');
seatChecker('88K');



console.log("######## lower & Upper Case #########");
let facebookEmail = 'email@gmail.com';
let googleEmail = ' Email@Gmail.Com ';

let trimmed = googleEmail.trim().toLowerCase();
console.log(trimmed);

if (facebookEmail === trimmed) {
    console.log(`you can login both google and facebook with this email ${trimmed}`);
}

let friend = "mAsUd";
let convertedNames = friend[0].toUpperCase() + friend.slice(1).toLowerCase()
console.log(convertedNames);

let lowerFriendNames = friend[0].toUpperCase() + friend.slice(1).toLowerCase();
console.log(lowerFriendNames);

if (convertedNames === lowerFriendNames) {
    console.log(`Both names are matched`);
}


console.log("######## Replace #########");

let licence = "You are eligble we for licence, we Also be careful from now to break we laws and rules, Congratulation we for your patience! we ";
console.log(licence);

let lowerLicence = licence.toLowerCase().replace('you', 'we');

console.log(lowerLicence);
console.log(lowerLicence.replaceAll('we', ','));

console.log("######## Boolean #########");

let ticket = 'A20158TRAIN';
console.log(ticket.includes('A2015'));
console.log(ticket.includes('158'));
console.log(ticket.includes('TRAIN'));
console.log(ticket.includes('train'.toUpperCase()));
console.log(ticket.includes('train'));
console.log(ticket.includes('a20158'));
console.log(ticket.includes('a20158'.toUpperCase()));

let checkTicket = (ticketStart, ticketEnd) => {
    let start = ticketStart.toUpperCase();
    let end = ticketEnd.toUpperCase();

    if (start.includes(start) === ticket.includes(start) && end.includes(end) === ticket.includes(end)) {
        console.log('Ticket is valid ! You are elighble for tour');
    } else {
        console.log('Sorry,It\s a fake ticket');
    }
}

checkTicket('A2015', 'TRAIN');
checkTicket('a2015', 'train');
checkTicket('g2015', 'tradf');


console.log("######## split,join,repeat,padding #########");

let text = "I+love+my+parents";
console.log(text.split('+'));
let splitText = text.split('+');
let joinText = splitText.join(' ');
console.log(joinText);

let nameCapitalize = (name, char) => {
    if (name.includes('+')) {
        let nameT = name.split(char);
        let nameStore = [];
        for (const n of nameT) {
            // nameStore.push(n[0].toUpperCase() + n.slice(1));
            nameStore.push(n.replace(n[0], n[0].toUpperCase()))
        }
        console.log(nameStore.join(' '));
    }
}

nameCapitalize("ibrahim+khalil", '+');

console.log("######## padding #########");
let message = 'love';
console.log(message.padStart(21, '-'));
console.log(message.padStart(21, '-').padEnd(39, '-'));


console.log('Card Masking'.padStart(30, '#').padEnd(50, '#'));

let CardMasking = (card) => {
    let last4Digit = card.slice(-4);
    console.log(last4Digit.padStart(24, '*'));
}

CardMasking('45875558456545488789');


console.log("######## repeat #########");
let message2 = 'For weather change ... All plane is delayed \n';
// console.log(message2.repeat(5));

let messageDelayed = (n) => {
    let t = `${n} plane is waiting ${'✈️'.repeat(n)}`;
    console.log(t);
}

messageDelayed(10);





