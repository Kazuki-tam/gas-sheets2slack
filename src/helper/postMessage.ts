import type { fechOptionsType } from "./../type/fechOptions.d";

/**
 * postMessage Function
 * @param { String } message - Message from Google sheets to slack
 */
function postMessage(message: string): void {
  const SLACK_WEBHOOK_URL = process.env.SLACK_WEBHOOK_URL;
  if (message === "" || SLACK_WEBHOOK_URL === undefined) return;
  const jsonData = {
    text: message,
  };
  const payload = JSON.stringify(jsonData);
  const options: fechOptionsType = {
    method: "post",
    contentType: "application/json",
    payload: payload,
  };
  UrlFetchApp.fetch(SLACK_WEBHOOK_URL, options);
}

export { postMessage };
