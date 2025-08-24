// generateUsers.js
const crypto = require("crypto");
const fs = require("fs");

function setPassword(password) {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return { salt, hash };
}

// Example users with plain passwords
const rawUsers = [
   { name: "Coder", email: "coder@example.com", dob: "2005-09-20", phone: "9123456789", isAdmin: true, photoUrl: "https://example.com/photos/coder.jpg", password: "Coder@123" }, 
  { name: "Sakshi Jain", email: "sakshi@example.com", dob: "2006-05-12", phone: "9876543210", isAdmin: false, photoUrl: "https://example.com/photos/sakshi.jpg", password: "Sakshi@123" }
];

const users = rawUsers.map(u => {
  const { salt, hash } = setPassword(u.password);
  return {
    name: u.name,
    email: u.email,
    dob: new Date(u.dob),
    phone: u.phone,
    isAdmin: u.isAdmin,
    photoUrl: u.photoUrl,
    hash,
    salt
  };
});

fs.writeFileSync("users.json", JSON.stringify(users, null, 2));
console.log("✅ users.json file created with hashed passwords");
