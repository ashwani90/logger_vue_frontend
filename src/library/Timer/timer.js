export const convertTimeSlots = (timeSlots) => {
    // we will just use a static date for now

    for (let i =0; i<timeSlots.length;i++) {
        timeSlots[i].timeDetails = getTimeInterval(timeSlots[i]);
    }
    console.log(timeSlots);
};

const getTimeInterval = (timeSlot) => {
    let date = "2020-12-12";
    let fromTime = Date.parse(date + timeSlot.fromTime);
    let toTime = Date.parse(date + timeSlot.toTime);
    return { fromTime: fromTime, toTime: toTime };
};