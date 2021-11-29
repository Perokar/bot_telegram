const nodeCron = require('node-cron');

const cron = {
    addJob: ({action, schedule}) => nodeCron.schedule(schedule, action)
};

module.exports = {
    cron
}