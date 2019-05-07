'use strict'

// JS for Salmon Cookies

var shopList = document.getElementById('shopList');

// Pike location object literal
var pike = {
  name: 'Pike',
  location: '1st and Pike',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 23,
  maxCustomerPerHr: 65,
  avgCookiesPerCustomer: 6.3,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  }
};

// SeaTac location object literal
var seaTac = {
  name: 'SeaTac',
  location: 'SeaTac Airport',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 3,
  maxCustomerPerHr: 24,
  avgCookiesPerCustomer: 1.2,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  }
};

// Seattle Center location object literal
var seattle = {
  name: 'Seattle',
  location: 'Seattle Center',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 11,
  maxCustomerPerHr: 38,
  avgCookiesPerCustomer: 3.7,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  }
};

// Capitol Hill location object literal
var capHill = {
  name: 'Capitol Hill',
  location: 'Capitol Hill',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 20,
  maxCustomerPerHr: 38,
  avgCookiesPerCustomer: 2.3,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  }
};

// Alki location object literal
var alki = {
  name: 'Alki',
  location: 'Alki',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 2,
  maxCustomerPerHr: 16,
  avgCookiesPerCustomer: 4.6,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var ulEl = document.createElement('ul');
      console.log('ulEl is', ulEl);
      // give the element content
      ulEl.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('ulEl with content', ulEl);
      ulEl.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('ulEl with content', ulEl);
      // append the element to the dom
      shopList.appendChild(ulEl);
      if(i === this.hoursOfOperation.length - 1) {
        var ulEl = document.createElement('ul');
        ulEl.textContent = 'Total: ' + this.recordOfSalesPerHour[i] + ' cookies';
        ulEl.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
        shopList.appendChild(ulEl);
      }
    }
  }
};



var shops = [pike, seaTac, seattle, capHill, alki];

// for (var i = 0; i < shops.length; i++) {
//   // console.log(cats[i].nickname)
//   cats[i].render()
// }