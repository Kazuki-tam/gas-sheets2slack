/**
 * checkSameDate Function
 * @param { String } date1 - Date you want to compare
 * @param { String } date2 - Date you want to compare
 * @return { Boolean } - Whether date1 is the same as date2
 */
function checkSameDate(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

export { checkSameDate };
