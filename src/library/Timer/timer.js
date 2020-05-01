export const convertTimeSlots = (timeSlots) => {

    // we will just use a static date for now
    let date = "2020-12-12";
    let baseTime = Date.parse("2020-12-12 00:00:00");

    timeSlots.map((i) => {
        return i.timeDetails = { fromTime: Date.parse(date + ' ' + i.fromTime), toTime: Date.parse(date + ' ' + i.toTime) };
    });

    timeSlots.map((i) => {
        let beginingPoint = ((i.timeDetails.fromTime-baseTime)/(1000*60));
        let width = ((i.timeDetails.toTime-baseTime)/(1000*60)) - beginingPoint;
        return i.timeDetailsInMinutes = { beginingPoint, width};
    });

    // Return sorted object of the target object depending on the content of time details
    timeSlots.sort((a,b) => {
       return (a.timeDetailsInMinutes.beginingPoint - b.timeDetailsInMinutes.beginingPoint);
    });

    let widthArray = generateSingleArray(timeSlots);

    return widthArray;
};

const generateSingleArray = (timeSlots) => {

    let previousBegin = 0;
    let previousWidth = 0;
    let widthArray = [];
    let sum = 0;

    for (let i=0; i<timeSlots.length; i++) {
        let currentBeginPoint = timeSlots[i].timeDetailsInMinutes.beginingPoint;
        let currentWidth = timeSlots[i].timeDetailsInMinutes.width;

        if (currentBeginPoint == (previousBegin + previousWidth)) {
            widthArray.push({width: currentWidth, work: timeSlots[i].taskName});
            sum += currentWidth;
        } else {
            widthArray.push({width: (currentBeginPoint-(previousBegin+previousWidth)), work: null}); //this is a gap nothing was done in this time
            widthArray.push({width: currentWidth, work: timeSlots[i].taskName}); // Work time is this
            sum += currentBeginPoint-(previousBegin+previousWidth);
            sum += currentWidth;
        }

        previousBegin = currentBeginPoint;
        previousWidth = currentWidth;
    }

    if (sum !== 1440) {
        widthArray.push({width: (1440-sum), work: null});
    }

    return widthArray;
};

// validate function for validating that time slots dfo not coincide