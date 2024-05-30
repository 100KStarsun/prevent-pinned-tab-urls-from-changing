chrome.tabs.onUpdated.addListener(function(tabId) {
    chrome.tabs.get(tabId, function(tab) {
        if (tab.pinned) {
            chrome.scripting.executeScript({
                target : {tabId : tabId},
                files : [ "./scripts/content-script.js" ],
            });
        }
    });
});