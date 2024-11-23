const user1 = {
  username: "BijanProgrammer",
  firstName: "Bijan",
  lastName: "Eisapour",
  password: "1234",
  address: {
    country: "Iran",
    province: "Tehran",
  },
};

const user2 = { ...user1 };

console.log("user1", user1);
console.log("user2", user2);

user2.firstName = "Reza";
user2.address.province = "Gilan";

console.log("user1", user1);
console.log("user2", user2);

const user3 = JSON.parse(JSON.stringify(user1));
