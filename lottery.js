const fs = require('fs');
const numberSimulations = parseInt(process.argv[2]);
const appDensity = parseFloat(process.argv[3]);
const numberAdditionalParticipants = parseInt(process.argv[4]);
const ourName = process.argv[5];
const ourAppCount = parseInt(process.argv[6]);

console.log('Starting simulator with parameters:');
console.log(`Number Simulations: ${numberSimulations}`);
console.log(`Application Density: ${appDensity}`);
console.log(`Number Additional Participants: ${numberAdditionalParticipants}`);
console.log(`Company Name: ${ourName}`)
console.log(`Our App Count: ${ourAppCount}`);

const lottery = {
    licensesAvailable: 47,
    participants: [{
            name: ourName,
            appCount: ourAppCount
        },{
            name: '127 IL LLC',
            appCount: 1
        },{
            name: 'Alchemy Curations LLC',
            appCount: 1
        },{
            name: 'AmeriCanna Dream LLC',
            appCount: 15
        },{
            name: 'Black Rain LLC',
            appCount: 1
        },{
            name: 'Clean Slate Opco LLC',
            appCount: 10
        },{
            name: 'Dealership LLC',
            appCount: 10
        },{
            name: 'Deer Park Partners LLC',
            appCount: 5
        },{
            name: 'EHR Holdings LLC',
            appCount: 3
        },{
            name: 'Fortunate Son Partners LLC',
            appCount: 10
        },{
            name: 'Green Equity Ventures 1 LLC',
            appCount: 3
        },{
            name: 'GRI Holdings LLC',
            appCount: 20
        },{
            name: 'Mint IL LLC',
            appCount: 5
        },{
            name: 'SB IL LLC', 
            appCount: 4
        },{
            name: 'So Baked Too LLC',
            appCount: 2        
        },{
            name: 'Suite Greens LLC',
            appCount:  4       
        },{
            name: 'Terra House LLC',
            appCount: 6     
        },{
            name: 'TPFB LLC',
            appCount:  1       
        },{
            name: 'V3 Illinois Vending LLC',
            appCount: 5        
        },{
            name: 'Vertical Management LLC',
            appCount: 10     
        }
    ]
};
const generateAdditionalPlayers = (numberToGenerate, participants) => {
    for(n = 1; n <= numberToGenerate; n++){
        participants.push({
            name: `NPC${n} INC`,
            appCount: appDensity
        });
    }
};
const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const runLottery = (lottery) => {
    const results = lottery.participants.reduce((agg, cur, ind, arr) => {
        agg[cur.name] = 0;
        return agg;
    }, {});
    for(i = lottery.licensesAvailable; i >= 1 ; i--){
        const flattenedLottery = lottery.participants.reduce((agg, cur, ind, arr) => {
            // Each win reduces number of apps left.
            const numAppsLeft = cur.appCount - results[cur.name];
            // Limit participants to no more apps than number of licenses available in BLS region.
            const numAppsInPlay = Math.min(numAppsLeft, i);
            
            for(j = 1; j <= numAppsInPlay; j++){
                agg.push(cur.name);
            }
            return agg;
        }, []);
        const diceRoll = randomIntFromInterval(1, flattenedLottery.length);
        const winner = flattenedLottery[diceRoll-1];
        results[winner]++;
    }
    
    return results;
};
console.log('Generating Players...');
generateAdditionalPlayers(numberAdditionalParticipants, lottery.participants);
console.log('Playing field:');
// console.log(lottery);
console.log('Simulating...');
const simulations = [];
for(s = 1; s <= numberSimulations; s++){
    const results = runLottery(lottery);
    simulations.push(results);
}
fs.writeFileSync(`simulations.json`,'const resultData = '.concat(JSON.stringify(simulations)).concat(';'));
const simulationResults = simulations.reduce((agg, cur, ind, arr) => {
    if(!agg){
        return cur;
    }
    Object.keys(cur).forEach((key) => {
        agg[key] = agg[key] + cur[key];
    });
    return agg;
}, null);

Object.keys(simulationResults).forEach((key) => {    
    simulationResults[key] = (simulationResults[key] / numberSimulations);
});
console.log(simulationResults);