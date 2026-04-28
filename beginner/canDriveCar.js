function canDriveCar(user, car) {
  return user.age >= 18 || car.engineSize < 1000;
}

export { canDriveCar };
