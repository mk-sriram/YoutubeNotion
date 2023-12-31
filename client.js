
const videoURL = window.location.href;
const currentTime = document.querySelector('video').currentTime;

const dataToSend = {
  youtubeURL: videoURL,
  timestamp: currentTime,
  // Add other necessary data for your Notion entry
};

const newDBResponse = await fetch("/databases", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  })
  const newDBData = await newDBResponse.json()