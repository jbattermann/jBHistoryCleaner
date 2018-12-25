chrome.windows.onRemoved.addListener(function (windowId) {
  chrome.windows.getAll(function(windows) {
    if (windows.length === 0) {
      chrome.history.deleteAll(function() {
        console.log("jB History Cleaner: browsing history cleaned.");
      });

      chrome.downloads.erase({ state:"interrupted" }, (erasedIds) => {
        if (erasedIds.length > 0) {
          console.log("jB History Cleaner: download history cleaned ('interrupted' items).");
        }
      });

      chrome.downloads.erase({ state:"complete" }, (erasedIds) => {
        if (erasedIds.length > 0) {
          console.log("jB History Cleaner: download history cleaned ('complete' items).");
        }
      });
    }
  });
});