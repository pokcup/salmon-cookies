'use strict'

// JS for Salmon Cookies

var shopList = document.getElementById('shopList');

// Pike location object literal
var pike = {
  name: 'Pike',
  location: '1st and Pike',
  minCustomerPerHr: 23,
  maxCustomerPerHr: 65,
  avgCookiesPerCustomer: 6.3,
  cookiesPurchasedPerHr: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(avgPerCustomer, customersPerHr) {
    return Math.ceil(avgPerCustomer * customersPerHr); 
  },
  render: function() {
    // create an element
    var liEl = document.createElement('li');
    console.log('liEl is', liEl);
    // give the element content
    liEl.textContent = this.nickname;
    console.log('liEl with content', liEl);
    // append the element to the dom
    catlist.appendChild(liEl);
  }
};

var trillian = {
  name: 'Trill',
  nickname: 'Fuzzbucket',
  age: 10,
  colors: ['black', 'brown', 'orange'],
  isAMeower: true,
  introduction: function(){
    console.log('The call me ' + this.nickname + ' and I am ' + this.age + ' years old.')
  },
  render: function() {
    // create an element
    var liEl = document.createElement('li');
    console.log('liEl is', liEl);
    // give the element content
    liEl.textContent = this.nickname;
    console.log('liEl with content', liEl);
    // append the element to the dom
    catlist.appendChild(liEl);
  }
};

var aloysius = {
  name: 'Aloysius',
  nickname: 'Alley Cat',
  age: 1,
  colors: ['gray', 'black', 'brown', 'white'],
  isAMeower: false,
  introduction: function(){
    console.log('The call me ' + this.nickname + ' and I am ' + this.age + ' years old.')
  },
  render: function() {
    // create an element
    var liEl = document.createElement('li');
    console.log('liEl is', liEl);
    // give the element content
    liEl.textContent = this.nickname;
    console.log('liEl with content', liEl);
    // append the element to the dom
    catlist.appendChild(liEl);
  }
};

var agador = {
  name: 'Agador Spartacus',
  nickname: 'Ag',
  age: 1,
  colors: ['gray', 'black', 'brown', 'white'],
  isAMeower: true,
  introduction: function(){
    console.log('The call me ' + this.nickname + ' and I am ' + this.age + ' years old.')
  },
  render: function() {
    // create an element
    var liEl = document.createElement('li');
    console.log('liEl is', liEl);
    // give the element content
    liEl.textContent = this.nickname;
    console.log('liEl with content', liEl);
    // append the element to the dom
    catlist.appendChild(liEl);
  }
};

var cats = [buddyCat, trillian, aloysius, agador];

for (var i = 0; i < cats.length; i++) {
  // console.log(cats[i].nickname)
  cats[i].render()
}