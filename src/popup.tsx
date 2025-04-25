import React, { useEffect, useState } from "react"
import { createRoot } from "react-dom/client"
import { changeBackground } from "./message_passing"

const Popup = () => {
  const [count, setCount] = useState(0)
  const [currentURL, setCurrentURL] = useState<string>()

  useEffect(() => {
    chrome.action.setBadgeText({ text: count.toString() })
  }, [count])

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url)
    })
  }, [])

  return (
    <>
      <ul style={{ minWidth: "700px", minHeight: "500px"  }}>
        <li>Current URL: {currentURL}</li>
        <li>Current Time: {new Date().toLocaleTimeString()}</li>
      </ul>
      <button onClick={() => setCount(count + 1)} style={{ marginRight: "5px" }}>
        count up
      </button>
      <button onClick={changeBackground}>change background</button>
    </>
  )
}

const root = createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
)
