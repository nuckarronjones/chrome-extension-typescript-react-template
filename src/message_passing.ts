export const changeBackground = () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const tab = tabs[0]
    if (tab.id) {
      chrome.tabs.sendMessage(
        tab.id,
        {
          color: "#ada8c9",
        },
        (msg) => {
          console.log("result message:", msg)
        }
      )
    }
  })
}

export function changeBackgroundListener(
  msg: any,
  sender: chrome.runtime.MessageSender,
  sendResponse: Function
) {
  if (msg.color) {
    console.log("Receive color = " + msg.color)
    document.body.style.backgroundColor = msg.color
    sendResponse("Change color to " + msg.color)
  } else {
    sendResponse("Color message is none.")
  }
}
