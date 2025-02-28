chrome.webRequest.onCompleted.addListener(
  function (details) {
    console.log(details); // Capture the request details
  },
  { urls: ["<all_urls>"] },
);
