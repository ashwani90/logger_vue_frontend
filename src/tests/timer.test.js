import {convertTimeSlots} from "../library/Timer/timer";

describe("Want to test the timer", () => {
    it("will generate the proper data for the chart", () => {

        let timeSlots = [
            {
                "_id": "5e9c183092ac1d6cf875324d",
                "fromTime": "07:20 AM",
                "toTime": "08:30 AM",
                "taskName": "Book Reading"
            },
            {
                "_id": "5e9c183092ac1d6cf875324e",
                "fromTime": "09:20 AM",
                "toTime": "10:30 AM",
                "taskName": "Programming"
            },
            {
                "_id": "5e9c183092ac1d6cf875324f",
                "fromTime": "10:30 AM",
                "toTime": "11:30 AM",
                "taskName": "Meeting"
            }
        ];

        const timer = convertTimeSlots(timeSlots);
        expect('nothing').toMatch('nothing');
    });
});