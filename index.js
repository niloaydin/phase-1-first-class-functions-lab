let drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

const returnFirstTwoDrivers = (driver) => {
    return driver.slice(0, 2)
}

const returnLastTwoDrivers = (driver) => {
    return driver.slice(-2)

}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function innerFunction(fare) {
       return integer * fare
   }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(array, funct) {
    return funct(array)
}
