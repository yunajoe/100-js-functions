function everyNPositions(message, step) {
  let answer = "";
  for (let i = 0; i < message.length; i += step) {
    answer += message[i];
  }
  return answer;
}

export { everyNPositions };
