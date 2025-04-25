import { changeBackgroundListener } from "./message_passing"

chrome.runtime.onMessage.addListener(changeBackgroundListener)
