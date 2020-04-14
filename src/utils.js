/**
 * Normalize duration into days
 * 
 * @param {String} periodType that is "DAYS","WEEKS" or "MONTHS"
 * @param {Number} timeToElapse the time to elapse
 */
export const normalizeDuration = (periodType, timeToElapse) => {
    if(periodType === 'days') {
        return timeToElapse;
    } else if (periodType === 'weeks') {
        return (7 * timeToElapse);
    } else if (periodType === 'months') {
        return (30 * timeToElapse);
    }
};