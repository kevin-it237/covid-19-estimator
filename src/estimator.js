import { processImpact } from './impact';

const covid19ImpactEstimator = (data) => {
    const impact = processImpact(data, 10);
    const severeImpact = processImpact(data, 50);
    return {
        data: data,
        impact: impact,
        severeImpact: severeImpact
    };
};

export default covid19ImpactEstimator;
