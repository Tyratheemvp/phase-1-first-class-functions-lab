// Define returnFirstTwoDrivers function
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  }
  
  // Define returnLastTwoDrivers function
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  }
  
  // Define selectingDrivers array
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Define createFareMultiplier higher-order function
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    }
  }
  
  // Define fareDoubler function
  const fareDoubler = createFareMultiplier(2);
  
  // Define fareTripler function
  const fareTripler = createFareMultiplier(3);
  
  // Define selectDifferentDrivers function
  const selectDifferentDrivers = function(drivers, selectFunction) {
    return selectFunction(drivers);
  }
     //testing
                                                                                                                               