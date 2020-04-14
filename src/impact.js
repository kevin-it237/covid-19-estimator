import { normalizeDuration } from './utils';

/**
 * Process estimation. 
 * 
 * @param {Object} data the input data
 * @param {Number} severity the impact of covid-19, 10 for impact and 50 for several impact
 * @returns {Object} An object that contains the impact data
 */
export const processImpact = (data, severity) => {
    /** The number of currently infected people */
    const currentlyInfected = data.reportedCases * severity;
    /** get time To Elapse In Days */
    const timeToElapseInDays = normalizeDuration (data.periodType, data.timeToElapse);
    /** infections By Requested Time */
    const infectionsByRequestedTime = Math.floor(currentlyInfected * Math.pow(2, timeToElapseInDays / 3));
    /** number of severe positive cases that will require hospitalization */
    const severeCasesByRequestedTime = Math.floor(infectionsByRequestedTime * 15 / 100);
    /** total number of available beds */
    const totalAvailableBeds = Math.floor(data.totalHospitalBeds * 35 / 100);
    /** number of available beds by requested time */
    const hospitalBedsByRequestedTime = totalAvailableBeds - severeCasesByRequestedTime;
    /** number of severe positive cases that will require ICU care. */
    const casesForICUByRequestedTime = Math.floor(infectionsByRequestedTime * 5 / 100);
    /** number of severe positive cases that will require ventilators. */
    const casesForVentilatorsByRequestedTime = Math.floor(infectionsByRequestedTime * 2 / 100);
    /** estimate how much money the economy is likely to lose daily */
    const dollarsInFlight = Math.floor(infectionsByRequestedTime * data.region.avgDailyIncomePopulation * data.region.avgDailyIncomeInUSD / timeToElapseInDays);
    
    return {
        currentlyInfected: currentlyInfected,
        infectionsByRequestedTime: infectionsByRequestedTime,
        severeCasesByRequestedTime: severeCasesByRequestedTime,
        hospitalBedsByRequestedTime: hospitalBedsByRequestedTime,
        casesForICUByRequestedTime: casesForICUByRequestedTime,
        casesForVentilatorsByRequestedTime: casesForVentilatorsByRequestedTime,
        dollarsInFlight: dollarsInFlight
    }
};