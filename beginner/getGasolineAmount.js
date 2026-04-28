function getGasolineAmount(distance, consumptionPer100Km) {
  const roundTrip = distance * 2;
  const answer = (roundTrip / 100) * consumptionPer100Km;
  return answer;
}

export { getGasolineAmount };
