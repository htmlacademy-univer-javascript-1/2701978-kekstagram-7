function lengthStr(str, maxLength){
  return str.length <= maxLength;
}
function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}
function isMeetingInWorkDay(workStart, workEnd, meetingStart, duration) {
  const parseTime = (timeStr) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  };

  const workStartMinutes = parseTime(workStart);
  const workEndMinutes = parseTime(workEnd);
  const meetingStartMinutes = parseTime(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + duration;

  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
}

// eslint-disable-next-line no-console
console.log(isMeetingInWorkDay('08:00', '17:30', '14:00', 90)); // true
// eslint-disable-next-line no-console
console.log(isMeetingInWorkDay('8:0', '10:0', '8:0', 120)); // true
// eslint-disable-next-line no-console
console.log(isMeetingInWorkDay('08:00', '14:30', '14:00', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingInWorkDay('14:00', '17:30', '08:0', 90)); // false
// eslint-disable-next-line no-console
console.log(isMeetingInWorkDay('8:00', '17:30', '08:00', 900)); // false
