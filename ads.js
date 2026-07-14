var preloader = null;

function showMyAds() {
    console.log("Ads skipped");
    adEndComplete = true;
}

function onAdsManagerLoaded() {
    adCompleteFlag = true;
}

function onAdError() {
    adCompleteFlag = true;
    adEndComplete = true;
}

function onContentResumeRequested() {
    adCompleteFlag = true;
    adEndComplete = true;
}

function noAdGoToScene() {
    var GameConfig = __require("GameConfig");
    var launchScene = GameConfig.launchScene;
    cc.director.loadScene(launchScene, null, function() {
        adCompleteFlag = false;
        cc.loader.onProgress = null;
    });
}