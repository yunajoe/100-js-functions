class Animal {
  #name;
  constructor(name) {
    this.#name = name;
  }
  // Getter는 메서드(함수)처럼 만들었지만, 사용할 때는 일반 변수(프로퍼티)처럼 괄호 없이 사용
  get name() {
    return this.#name;
  }
  sleep() {
    return `${this.#name} is sleeping...`;
  }

  eat() {
    return `${this.#name} is eating. Nom nom!`;
  }
}

class Dog extends Animal {
  #breed;
  constructor(name, breed) {
    // "부모 클래스의 생성자(constructor)를 그대로 호출하는 것. 부모 클래스가 생성자에서 받기로 했던 매개변수만 순서
    super(name);
    this.#breed = breed;
  }
  // breed geeter 생성
  get breed() {
    return this.#breed;
  }
  // bark 메서드

  bark() {
    return `${this.name}: Woof! Woof!`;
  }
}

class GoldenRetriever extends Dog {
  constructor(name, breed = "Golden Retriever") {
    super(name, breed);
  }
  guardHouse() {
    return `${this.name} is a ${this.breed} thus too friendly to guard the house.! `;
  }
}

// example
const myCat = new Animal("TOTO");
console.log(myCat.name);
console.log(myCat.sleep()); // TOTO is sleeping..
console.log(myCat.eat()); // TOTO is eating. Non non!

const dog = new Dog("PAPA", "German Shepherd");
console.log(dog.name); // PAPA
console.log(dog.bark()); // PAPA: Woof! Woof!

const golden = new GoldenRetriever("AHAH", "GoldenRetriever");
console.log(golden.guardHouse());
