chrome.storage.sync.get(["init"], function(v) {
    if (!v.init) {
        chrome.storage.sync.set({
            "enabled": true,
            "init": true
        });
    };
    console.log("CYBER initialized");
});

//Set correct button image on addon load
setImage();

function setImage() {
    chrome.storage.sync.get(["enabled"], function(v) {
        if (v.enabled) {
            chrome.browserAction.setIcon({
                path: "icon-38.png"
            });
        } else {
            chrome.browserAction.setIcon({
                path: "icon-off-38.png"
            });
        };
    });
}

//Update button image automatically
chrome.storage.onChanged.addListener(function(a,b) {
    setImage();
});

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.storage.sync.get(["enabled"], function(v) {
        chrome.storage.sync.set({
            "enabled": (!v.enabled)
        });
        console.log("CYBER enabled: " + (!v.enabled));
        chrome.tabs.reload();
    });
});
