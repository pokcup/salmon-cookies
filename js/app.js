'use strict'

// JS for Salmon Cookies

var allShops = [];

var salesTable = document.getElementById('salesTable');

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// Pat's Salmon Cookies constructor function

function Shop(location, minCustomerPerHr, maxCustomerPerHr, avgCookiesPerCustomer) {
  this.location = location;
  this.minCustomerPerHr = minCustomerPerHr;
  this.maxCustomerPerHr = maxCustomerPerHr;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.recordOfSalesPerHour = [];
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
    this.cookiesPurchasedPerHr(this.randomCustomersPerHr(this.minCustomerPerHr, this.maxCustomerPerHr), this.avgPerCustomer);
    // make a tr
    var trEl = document.createElement('tr');
    // create, content, append for "Shop Location"
    var tdEl = document.createElement('td');
    tdEl.textContent = this.location;
    trEl.appendChild(tdEl);
    // create, content, append for each hourly total
    for (var i = 0; i < hoursOfOperation.length; i++) {
      tdEl = document.createElement('td');
      tdEl.textContent = this.recordOfSalesPerHour[i];
      trEl.appendChild(tdEl);
    }
    // create, content, append for daily total
    tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookiesPerDay(this.recordOfSalesPerHour);
    trEl.appendChild(tdEl);
    // append the tr to the table
    salesTable.appendChild(trEl);
  };
  allShops.push(this);
}

new Shop('1st and Pike', 23, 65, 6.3);
new Shop('SeaTac Airport', 3, 24, 1.2);
new Shop('Seattle Center', 11, 38, 3.7);
new Shop('Capitol Hill', 20, 38, 2.3);
new Shop('Alki', 2, 16, 4.6);

function makeHeaderRow() {
  // create the row
  var trEl = document.createElement('tr');
  // create, content, append first cell
  var thEl = document.createElement('th');
  thEl.textContent = 'Shop Location';
  trEl.appendChild(thEl);
  // create, content, append all hours of operation cells
  for (var i = 0; i < hoursOfOperation.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hoursOfOperation[i];
    trEl.appendChild(thEl);
  }
  // create, content, append total sum cell
  thEl = document.createElement('th');
  thEl.textContent = 'Total';
  trEl.appendChild(thEl);
  // append the row to the table
  salesTable.appendChild(trEl);
}

function renderAllShops() {
  for (var i = 0; i < allShops.length; i++) {
    allShops[i].render();
  }
}

makeHeaderRow();
renderAllShops();