function getBusinessAddress(business) {
  const {
    address: { number, street, zipCode },
  } = business;
  return [street, `number ${number}`, zipCode].join(", ");
}

export { getBusinessAddress };
