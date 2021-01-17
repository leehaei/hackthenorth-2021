
export function getDate(year, month, day) {
    var date = new Date();
    date.toLocaleString('en-US', { timeZone: 'America/New_York' });
    var currMonth = date.getMonth() + 1;
    var currDay = date.getDate();
    var currYear = date.getFullYear();
    if((currYear === year) && (currMonth === month) && (currDay === day)) {
        return true;
    } else {
        return false;
    }
}

