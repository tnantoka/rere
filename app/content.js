chrome.runtime.onMessage.addListener(async ({ menu }, _, sendResponse) => {
  sendResponse();

  const selector = {
    clear: '.js-reviewed-toggle.js-reviewed-file',
    mark: '.js-reviewed-toggle:not(.js-reviewed-file)'
  }[menu];

  const elements = document.querySelectorAll(selector);
  for await (const elm of elements) {
    await new Promise((resolve) => setTimeout(resolve, 100));
    elm.click();
  }
});
