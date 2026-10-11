function lengthStr(str, maxLength){
  return str.length <= maxLength;
}
function palindrome(str) {
  const cleaned = str.toLowerCase().replace(/\s/g, '');
  const reversed = cleaned.split('').reverse().join('');
  return cleaned === reversed;
}

