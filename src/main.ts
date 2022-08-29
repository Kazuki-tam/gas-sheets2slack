import { checkSameDate } from "./utility/checkSameDate";
import { postMessage } from "./helper/postMessage";
import { createMessage } from "./helper/createMessage";

/**
 * main function
 */
function main() {
  const today = new Date();
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  // Replace the sheet name with yours
  const sheet = ss.getSheetByName("Sheet1");
  if (sheet === null) return;
  // Define row setting
  const firstRow = 2;
  const rowLength = sheet.getLastRow() - (firstRow - 1);
  // Define col setting
  const notificationDateCol = 1;
  const titleCol = 2;
  const contentCol = 3;
  const urlCol = 4;

  for (let i = 0; i < rowLength; i++) {
    const notificationDate = new Date(
      sheet.getRange(firstRow + i, notificationDateCol).getValue()
    );
    const title = sheet.getRange(firstRow + i, titleCol).getValue();
    const content = sheet.getRange(firstRow + i, contentCol).getValue();
    const url = sheet.getRange(firstRow + i, urlCol).getValue();
    // Check date
    const isSameDate = checkSameDate(today, notificationDate);
    if (isSameDate) {
      const message = createMessage(title, content, url);
      postMessage(message);
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(global as any).main = main;
