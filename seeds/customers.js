const uniqueRandom = require("unique-random");
const rand = uniqueRandom(10000000, 99999999);

module.exports = customersData = [
  {
    isAdmin: true,
    enabled: true,
    firstName: "Yulia",
    lastName: "Boiko",
    login: "boikoyv",
    email: "yulchitaiboldireva@gmail.com",
    password: "12345",
    telephone: "+380930425279",
    gender: "female",
    customerNo: rand()
  }
];
