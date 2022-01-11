// Code your solution in this file!
const aryDrivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (aryDrivers) => { 
const aryd = aryDrivers.slice(0,2)
return aryd
}

const returnLastTwoDrivers = (aryDrivers) => {
    if (aryDrivers.length >= 2) {
        return aryDrivers.slice(-2)
    }
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (num) => {
    return (fare) => num * fare;
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(drivers, driversToReturn) {
    return driversToReturn(drivers)
}