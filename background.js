browser.storage.sync.get("init").then(function(v) {
    if (!v.init) {
        browser.storage.sync.set({
            "enabled": true,
            "init": true
        });
    };
    console.log("CYBER initialized");
});

//Set correct button image on addon load
setImage();

function setImage() {
    browser.storage.sync.get("enabled").then(function(v) {
        if (v.enabled) {
            browser.browserAction.setIcon({
                path: "icon-38.png"
            });
        } else {
            browser.browserAction.setIcon({
                path: "icon-off-38.png"
            });
        };
    });
}

//Update button image automatically
browser.storage.onChanged.addListener(function(a,b) {
    setImage();
});

browser.browserAction.onClicked.addListener(function(tab) {
    browser.storage.sync.get("enabled").then(function(v) {
        browser.storage.sync.set({
            "enabled": (!v.enabled)
        });
        console.log("CYBER enabled: " + (!v.enabled));
        browser.tabs.reload();
    });
});
