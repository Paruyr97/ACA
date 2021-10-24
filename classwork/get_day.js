function getDay(date) {

    const days = {
        Sun: 'Sunday',
        Mon: 'Monday',
        Tue: 'Thuesday',
        Wed: 'Wednesday',
        Thu: 'Thursday',
        Fri: 'Friday',
        Sat: 'Saturday',
    };

    const splited = date.split('/');
    
    const tmp = splited[0];
    splited[0] = splited[1];
    splited[1] = tmp;

    const shortDay = new Date(splited.join('/')).toString().substring(0, 3);

    return days[shortDay];
}
