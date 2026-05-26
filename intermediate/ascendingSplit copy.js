function ascendingSplit(numbers) {
  if (numbers.length === 0) return [];

  return numbers.reduce((result, current, i) => {
    // 첫 번째 요소이거나, 오름차순이 깨진 경우 새 서브 배열을 생성
    if (i === 0 || current < numbers[i - 1]) {
      result.push([current]);
    } else {
      // 오름차순이 유지되면 가장 최근 서브 배열에 추가
      result[result.length - 1].push(current);
    }
    return result;
  }, []);
}
