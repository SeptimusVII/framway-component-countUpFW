module.exports = function(app){
    var CountUpFW = Object.getPrototypeOf(app).CountUpFW = new app.Component("countUpFW");
    // CountUpFW.debug = true;
    CountUpFW.createdAt      = "2.0.0";
    CountUpFW.lastUpdate     = "2.0.0";
    CountUpFW.version        = "1";
    // CountUpFW.factoryExclude = true;
    // CountUpFW.loadingMsg     = "This message will display in the console when component will be loaded.";
    // CountUpFW.requires       = [];

    // CountUpFW.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return CountUpFW;
}