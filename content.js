chrome.runtime.onMessage.addListener(({ menu }, _, sendResponse) => {
  const selector = {
    clear: '.js-reviewed-toggle.js-reviewed-file',
    mark: '.js-reviewed-toggle:not(.js-reviewed-file)'
  }[menu];
  document
    .querySelectorAll(selector)
    .forEach((elm) => elm.click());
  sendResponse();
});
