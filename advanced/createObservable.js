function createObservable() {
  let callbackArr = [];
  return {
    subscribe: function (callback) {
      callbackArr.push(callback);
    },
    unsubscribe: function (removeCallback) {
      const result = callbackArr.filter(
        (callback) => callback !== removeCallback,
      );
      callbackArr = [...result];
    },
    notify: function (...data) {
      callbackArr.forEach((callback) => {
        console.log(callback(...data));
      });
    },
  };
}

// 예시
class User {
  name;
  weatherObservable;

  constructor(name, weatherObservable) {
    this.name = name;
    this.weatherObservable = weatherObservable;
    this.weatherObservable.subscribe(this.onWeatherChange);
  }

  onWeatherChange = (weatherDate) => {
    console.log(`${this.name} received weather updates:`, weatherDate);
  };

  stopListening() {
    this.weatherObservable.unsubscribe(this.onWeatherChange);
  }
}

const weatherObservable = createObservable();
const bob = new User("Bob", weatherObservable);

/**
 *  Should print
 *  Bob received weather updates: {temperature:20, humidity: 80}
 */

weatherObservable.notify({ temperature: 20, humidity: 80 });

/**
 *  Should print
 *  Bob received weather updates: {temperature:25, humidity: 75}
 */

weatherObservable.notify({ temperature: 25, humidity: 75 });

bob.stopListening();

// shout not print anything.
weatherObservable.notify({ temperature: 105, humidity: 35 });

const youtubeObservable = createObservable();
