var CountUp = require('countup.js').CountUp;
module.exports = function(app){
    var CountUpFW = Object.getPrototypeOf(app).CountUpFW = new app.Component("countUpFW");
    // CountUpFW.debug = true;
    CountUpFW.createdAt      = "2.0.0";
    CountUpFW.lastUpdate     = "2.0.0";
    CountUpFW.version        = "1";
    // CountUpFW.factoryExclude = true;
    // CountUpFW.loadingMsg     = "This message will display in the console when component will be loaded.";
    // CountUpFW.requires       = [];

    CountUpFW.prototype.onCreate = function(){
        var countUp = this;
        countUp.startVal = (countUp.startVal !== undefined) ? countUp.startVal : countUp.getData('startval',0);
        countUp.endVal = (countUp.endVal !== undefined) ? countUp.endVal : countUp.getData('endval',0);
        countUp.decimals = (countUp.decimals !== undefined) ? countUp.decimals : countUp.getData('decimals',0);
        countUp.duration = (countUp.duration !== undefined) ? countUp.duration : countUp.getData('duration',2);
        countUp.delay = (countUp.delay !== undefined) ? countUp.delay : countUp.getData('delay',0);
        countUp.target = (countUp.$el.find('.countUpFW__num').length) ? countUp.$el.find('.countUpFW__num').get(0) : countUp.$el.get(0);
        countUp.options = {
            useEasing: true,
            useGrouping: true,
            separator: '',
            decimal: '.',
            enableScrollSpy: true,
            scrollSpyDelay: countUp.delay*1000,
            startVal: countUp.startVal,
            decimalPlaces: countUp.decimals,
            duration: countUp.duration,
        }

        countUp.anim = new CountUp(countUp.target,countUp.endVal,countUp.options);
    }
    return CountUpFW;
}