// 3.
// let today = new Date('October 11, 2021')
// let day = today.getDay();
// console.log(day === 1 ? 'Monday' : day === 2 ? 'Tuesday' : day === 3 ? 'Wednesday': day === 4 ? 'Thursday' : day === 5 ? 'Friday');

// 4.

function howOld (birthday) {
    let difference = Date.now() - birthday.getTime();
    let age = new Date(difference);
    return age.getFullYear() - 1970;
}
console.log(howOld(new Date(1989, 9, 16))); //edo
console.log(howOld(new Date(1955, 3, 8))); // papá 
console.log(howOld(new Date(1959, 4, 17))); // mamma
console.log(howOld(new Date(1985, 4, 15))); // brother
console.log(howOld(new Date(2001, 12, 21))); //sister

// 5.
function diff (string1, string2) {
    //    let millisec = Math.abs(string1 - string2) / 1000;
    //    let hours = Math.floor(hours/ 3600) % 24;
    //    millisec -= hours * 3600;
    //    let minutes = Math.floor(minutes / 60) % 60;
    //    millisec -= minutes * 60;
    //    let seconds = Math.floor(seconds / 1000) % 1000;
    //    millisec -= seconds * 1000;
    let date1= Date.now(string1);
    let date2 = Date.now(string2);
    let hours = Math.floor((date1 - date2)/60);
    let minutes = hours % 60;
    let seconds = minutes % 60;
    return `${hours}:${minutes}:${seconds}`;
}
console.log(diff('12 October, 2021 12:00:00', '13 October, 2021 12:00:00'))


