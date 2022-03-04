// 1.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe(){
        console.log(`${this.name}, ${this.age} years old`)
    }
};
let john = new Person('John', 19);
john.describe();

// 2.
class Volume {
    constructor(r, h) {
      this.radius = r;
      this.height = h;
    }
  
    calculate() {
      let volume = Math.PI * Math.pow(this.radius, 2) * this.height;
      return volume.toFixed(2);
    }
  }
  
  const cylinder = new Volume(5, 2);
  console.log(cylinder.calculate());

// 3.
class Clock {
    constructor({template}) {
        this.template = template;
        this.timer 
    }
  
    render = () => {
      let date = new Date();
  
      let hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
  
      let mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
  
      let secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
  
      let output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
  
      console.log(output);
    }
  
    stop = function(){
        clearInterval(this.timer);

    };
    
    
  
    start = function() {
      this.render();
      this.timer = setInterval(this.render.bind(this), 1000)
      setTimeout(this.stop.bind(this), 5000);
    };
    
}

let clock = new Clock({template: 'h:m:s'});
clock.start();

// stop = setTimeout(stop = () => {
// this.timer
// }, 5000)

// 4.
class Tv {
    constructor(brand) {
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    setVolume() {
        this.volume = Math.floor(Math.random() * Math.floor(100));
        return this.volume;
    }
    setChannel() {
        this.channel = Math.floor(Math.random() * Math.floor(50));
        return this.channel;
    }
    reset() {
        this.channel = 1;
        this.volume = 50;
        return this.channel, this.volume;
    };
    status() {
        if(this.volume < 0) {
            this.volume = 0;
        } else if (this.volume > 100) {
            this.volume = 100;
        }
        return `${this.brand} at channel ${this.channel} at volume ${this.volume}`;
    }}
    let television = new Tv('Panasonic');
    television.reset();
    console.log(television.setVolume());
    console.log(television.setChannel());
    console.log(television.status());
