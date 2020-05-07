import User from "./models/User";
const Users = [
    {
      "name": {
        "first": "Gaurav",
        "last": "Kumar"
      },
      "dob": "1-1-1990",
      "mobile": "9999999999",
      "email": "gaurav@gmail.com",
      "password": "123456789"
    },
    {
      "name": {
        "first": "Deepak",
        "last": "Pandey"
      },
      "dob": "12-12-1990",
      "mobile": "8888888888",
      "email": "deepak@gmail.com",
      "password": "123456789"
    }
  ];

module.exports.createUsers = ()=>{
  Users.map(user=>{
    let tmpUser = new User(user);
    tmpUser.save();
  })
}