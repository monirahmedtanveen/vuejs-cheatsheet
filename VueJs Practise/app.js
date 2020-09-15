Vue.component('greeting', {
  template:'<h1>Hey there, are you {{ name }}? <button @click="changeName">Change Name</button></h1>',
  data: function () {
    return {
      name: 'Maisie Williams'
    }
  },
  methods: {
    changeName: function () {
      this.name = 'Arya Stark'
    }
  }
});

var vue_app = new Vue({
  el: '#vue-app',
  data: {
    title: 'VUE APP FUCNTIONALITY',
    name: 'Monir Ahmed',
    job: 'Backend Developer',
    age: 20,
    website: 'https://monirahmedtanveen.github.io/',
    techSite: 'https://monirahmedtanveen.github.io/tech.logs/',
    websiteTag: 'Website Tag: <a href="https://monirahmedtanveen.github.io/">monirahmedtanveen.github.io</a>',
    x: 0,
    y: 0,
    a: 0,
    b: 0,
    available: true,
    nearby: true,
    error: false,
    success: false,
    characters: ['Mario','Luigi','Yoshi','Bowser'],
    ninjas: [
      {name:'Ryp',age:25},
      {name:'Yoshi',age:35},
      {name:'Ken',age:55}
    ]
  },
  methods: {
    greet: function(time = "Morning!!") {
      return "Good " + time + ' ' + this.name;
    },
    addYear: function(year = 1) {
      this.age += year;
    },
    subtractYear: function(year = 1) {
      this.age -= year;
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    clickLink: function() {
      alert("You clicked me!!");
    },
    logName: function() {
      console.log("You entered your name!!");
    },
    logJob: function() {
      console.log("You entered your Job!!");
    },
    addToA: function () {
      this.a++;
    },
    addToB: function () {
      this.b++;
    },
    /* addAgeToA: function () {
      console.log('AddToA');
      return this.age + this.a;
    },
    addAgeToB: function () {
      console.log('AddToB');
      return this.age + this.b;
    } */
  },
  computed: {
    addAgeToA: function () {
      console.log('AddToA');
      return this.age + this.a;
    },
    addAgeToB: function () {
      console.log('AddToB');
      return this.age + this.b;
    },
    compClasses: function () {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});

var vue_game = new Vue({
  el: '#vue-game',
  data: {
    title: 'VUE GAME FUNCTIONALITY',
    health: 100,
    ended: false,
  },
  methods: {
    punch: function () {
      this.health -= 10;

      if (this.health <= 0) {
        this.ended = true;
      }
    },
    restart: function () {
      this.health = 100;
      this.ended = false;
    },
    changeTitle: function () {
      vue_app.title = 'TITLE IS CHANGED FROM VUE GAME';
    }
  },
  computed: {

  }
});

var vue_app_2 = new Vue({
  el: '#vue-app-2',
  data: {
    title: "HELLO VUE APP 2",
    output: "Your fav food"
  },
  methods: {
    readRefs: function () {
      console.log(this.$refs.input.value);
      console.log(this.$refs.test.innerText);
      this.output = this.$refs.input.value;
    }
  },
  Computed: {

  }
});

// vue_game.title = "CHANGED FROM OUTSIDE";
