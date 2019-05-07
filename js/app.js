'use strict'

// JS for Salmon Cookies

var allShops = [];

var salesTable = document.getElementById('salesTable');

// var shopList = document.getElementById('shopList');
// var shopName = document.getElementById('shopName');

// Pat's Salmon Cookies constructor function


function Shop(location, minCustomerPerHr, maxCustomerPerHr, avgCookiesPerCustomer, recordOfSalesPerHour) {
  this.location = location;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.recordOfSalesPerHour = recordOfSalesPerHour;
  this.hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  this.randomCustomersPerHr = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  };
  this.cookiesPurchasedPerHr = function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  };
  this.totalCookiesPerDay = function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  };
  this.render = function() {
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Shop Location"
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    // create, content, append for each hourly total
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.recordOfSalesPerHour[i];
      trEl.appendChild(tdEl);
    }
    // create, content, append for daily total
    dEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay(this.recordOfSalesPerHour);
    trEl.appendChild(tdEl);
    // append the tr to the table
    salesTable.appendChild(trEl);
  };

  allShops.push(this);
}

new Student('Sara', 'Haynes', 'Sara without an H', 'Seattle');
new Student('Lillian', 'Gales', 'Lillian', 'Pawtucket');
new Student('Paula', 'Cruz', 'Paula', 'Mt. Rainier');

// for (var i = 0; i < shops.length; i++) {
//   shops[i].render();
// }

// Pike location object literal
var pike = {
  name: '1st and Pike',
  location: '1st and Pike',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 23,
  maxCustomerPerHr: 65,
  avgCookiesPerCustomer: 6.3,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  totalCookiesPerDay: function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    var pikeUl = document.getElementById('pike');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var liEl = document.createElement('li');
      console.log('liEl is', liEl);
      // give the element content
      liEl.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('liEl with content', liEl);
      // append the element to the dom
      pikeUl.appendChild(liEl);
      // display daily total
      if(i === this.hoursOfOperation.length - 1) {
        var sumTotal = document.createElement('li');
        sumTotal.textContent = 'Total: ' + this.totalCookiesPerDay(this.recordOfSalesPerHour) + ' cookies';
        pikeUl.appendChild(sumTotal);
      }
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
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  totalCookiesPerDay: function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    var seaTacUl = document.getElementById('seaTac');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var liEL = document.createElement('li');
      console.log('liEL is', liEL);
      // give the element content
      liEL.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('liEL with content', liEL);
      // append the element to the dom
      seaTacUl.appendChild(liEL);
      // display daily total
      if(i === this.hoursOfOperation.length - 1) {
        var sumTotal = document.createElement('li');
        sumTotal.textContent = 'Total: ' + this.totalCookiesPerDay(this.recordOfSalesPerHour) + ' cookies';
        seaTacUl.appendChild(sumTotal);
      }
    }
  }
};

// Seattle Center location object literal
var seattle = {
  name: 'Seattle Center',
  location: 'Seattle Center',
  hoursOfOperation: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  minCustomerPerHr: 11,
  maxCustomerPerHr: 38,
  avgCookiesPerCustomer: 3.7,
  recordOfSalesPerHour: [],
  randomCustomersPerHr: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  totalCookiesPerDay: function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    var seattleUl = document.getElementById('seattle');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var liEL = document.createElement('li');
      console.log('liEL is', liEL);
      // give the element content
      liEL.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('liEL with content', liEL);
      // append the element to the dom
      seattleUl.appendChild(liEL);
      // display daily total
      if(i === this.hoursOfOperation.length - 1) {
        var sumTotal = document.createElement('li');
        sumTotal.textContent = 'Total: ' + this.totalCookiesPerDay(this.recordOfSalesPerHour) + ' cookies';
        seattleUl.appendChild(sumTotal);
      }
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
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  totalCookiesPerDay: function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    var capHillUl = document.getElementById('capHill');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var liEL = document.createElement('li');
      console.log('liEL is', liEL);
      // give the element content
      liEL.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('liEL with content', liEL);
      // append the element to the dom
      capHillUl.appendChild(liEL);
      // display daily total
      if(i === this.hoursOfOperation.length - 1) {
        var sumTotal = document.createElement('li');
        sumTotal.textContent = 'Total: ' + this.totalCookiesPerDay(this.recordOfSalesPerHour) + ' cookies';
        capHillUl.appendChild(sumTotal);
      }
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
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  },
  cookiesPurchasedPerHr: function(customersPerHr, avgPerCustomer) {
    this.recordOfSalesPerHour = [];
    for(var i = 0; i <= 14; i++) {
      this.recordOfSalesPerHour.push(Math.ceil(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer));
    }
  },
  totalCookiesPerDay: function(hourlyArray) {
    var sumTotal = 0;
    for (var i = 0; i < hourlyArray.length; i++) {
      sumTotal += hourlyArray[i];
    }
    return sumTotal;
  },
  render: function() {
    this.cookiesPurchasedPerHr();
    var alkiUl = document.getElementById('alki');
    for (var i = 0; i < this.hoursOfOperation.length; i++) {
      // create an element
      var liEL = document.createElement('li');
      console.log('liEL is', liEL);
      // give the element content
      liEL.textContent = this.hoursOfOperation[i] + ': ' + this.recordOfSalesPerHour[i] + ' cookies';
      console.log('liEL with content', liEL);
      // append the element to the dom
      alkiUl.appendChild(liEL);
      // display daily total
      if(i === this.hoursOfOperation.length - 1) {
        var sumTotal = document.createElement('li');
        sumTotal.textContent = 'Total: ' + this.totalCookiesPerDay(this.recordOfSalesPerHour) + ' cookies';
        alkiUl.appendChild(sumTotal);
      }
    }
  }
};

var shops = [pike, seaTac, seattle, capHill, alki];

for (var i = 0; i < shops.length; i++) {
  shops[i].render();
}