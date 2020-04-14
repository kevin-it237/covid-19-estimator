/**
 * Normalize duration into days
 * @param {String} periodType that is "DAYS","WEEKS" or "MONTHS"
 * @param {Number} timeToElapse the time to elapse
 */
const normalizeDuration = (periodType, timeToElapse) => {
    let time;
    if (periodType === 'days') {
        time = timeToElapse;
    } else if (periodType === 'weeks') {
        time = (7 * timeToElapse);
    } else if (periodType === 'months') {
        time = (30 * timeToElapse);
    }
    return time;
};

export default normalizeDuration;
