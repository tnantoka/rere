chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    "id": "clear",
    "title": "Clear All Viewed Files",
    "documentUrlPatterns": ["https://github.com/*/pull/*/files"]
  });

  chrome.contextMenus.create({
    "id": "mark",
    "title": "Mark All Files Viewed",
    "documentUrlPatterns": ["https://github.com/*/pull/*/files"]
  });
});

chrome.contextMenus.onClicked.addListener(({ menuItemId: menu }, tab) => {
  chrome.tabs.sendMessage(tab.id, { menu });
});
