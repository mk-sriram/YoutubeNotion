chrome.runtime.onInstalled.addListener(function () {
  chrome.tabs.create({ url: chrome.runtime.getURL("options.html") });
});

//default sets it to OFF ( need it to check with the backend ( send a request to Notion API ))
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });




/*
  const extensions = 'https://youtube.com'
  chrome.action.onClicked.addListener(async (tab) => {
    if (tab.url.startsWith(extensions)) {
      // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      let nextState;
      if (prevState === 'ON') {
        nextState = 'OFF';
      } else {
        nextState = 'ON';
      }
      // Set the action badge to the next state
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
      });

      if (nextState === "ON") { // insert into notion API , send it to notion API 
        // Insert the CSS file when the user turns the extension on
        
      } else if (nextState === "OFF") {
        // removes from Notion API after seraching it ? 
        
      }
    }
  });
*/

chrome.action.onClicked.addListener(async (tab) => {

  chrome.tabs.executeScript({
    file: 'contentScript.js'
  });

});