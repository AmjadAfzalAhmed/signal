import chalk from 'chalk';
var trafficLights;
(function (trafficLights) {
    trafficLights["red"] = "red";
    trafficLights["yellow"] = "yellow";
    trafficLights["green"] = "green";
})(trafficLights || (trafficLights = {}));
function trafficSignal(light) {
    switch (light) {
        case trafficLights.red:
            console.log("\n Currently, the lights are red. You must stop!");
            console.log("");
            console.log(chalk.red.inverse("\t      "));
            break;
        case trafficLights.yellow:
            console.log("\n The lights have turned yellow, just a few seconds more!!");
            console.log("");
            console.log(chalk.yellow.inverse("\t      "));
            break;
        case trafficLights.green:
            console.log("\n The lights are green. You may move to your destination.");
            console.log("");
            console.log(chalk.green.inverse("\t      "));
            break;
    }
}
console.log("");
console.log(chalk.greenBright.bold("\t You reached at the Traffic Signal"));
setTimeout(() => {
    trafficSignal(trafficLights.red);
}, 2000);
setTimeout(() => {
    trafficSignal(trafficLights.yellow);
}, 6000);
setTimeout(() => {
    trafficSignal(trafficLights.green);
}, 9000);
