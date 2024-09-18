const users = [
  { email: "anu@gmail.com", password: "anu", role: "user", name: "Anu", id: 2222,Gender:"Female" },
  { email: "banu@gmail.com", password: "banu", role: "user", name: "Bhanu", id: 1111 ,Gender:"Female" },
  { email: "cyan@gmail.com", password: "cyan", role: "user", name: "Cyan", id: 1028,Gender:"Male" },
  { email: "dhanu@gmail.com", password: "dhanu", role: "user", name: "Dhanu", id: 10001 ,Gender:"Female"},
  { email: "emanuel@gmail.com", password: "emanuel", role: "user", name: "Emanuel", id: 1123 ,Gender:"Male"},
  { email: "fanta@gmail.com", password: "cococola", role: "user", name: "Fanta", id: 1000 ,Gender:"Male"},
  { email: "gunna@gmail.com", password: "guna@123", role: "user", name: "Gunna", id: 1020,Gender:"Female" }
];

const admins = [
  { email: "anny@gmail.com", password: "anny", role: "admin", name: "anny", id: 1043 ,Gender:"Female"},
  { email: "bunny@gmail.com", password: "bunny", role: "admin", name: "Bunny", id: 1093,Gender:"Male" },
  { email: "catty@gmail.com", password: "catty", role: "admin", name: "Catty", id: 1026,Gender:"Female" },
  { email: "danuel@gmail.com", password: "danuel", role: "admin", name: "Danuel", id: 1023 ,Gender:"Male"},
  { email: "ema@gmail.com", password: "ema", role: "admin", name: "Emma", id: 1083,Gender:"Female" },
  { email: "faruk@gmail.com", password: "faruk", role: "admin", name: "Farukh", id: 1053,Gender:"Male" },
  { email: "ganes@gmail.com", password: "guna@123", role: "admin", name: "Ganesh", id: 1033 ,Gender:"Male"}
];

const emailInput = document.getElementById("InputEmail");
const passwordInput = document.getElementById("InputPassword");
const btn = document.getElementById("btnsignin");
const errorMessage = document.getElementById("error");

btn.addEventListener("click", function() {
  const email = emailInput.value;
  const password = passwordInput.value;
  const roleRadio = document.querySelector('input[name="role"]:checked');

  if (!roleRadio) {
    errorMessage.textContent = "Please select a role.";
    errorMessage.style.display = "block";
    return;
  }

  const role = roleRadio.value;
  const userList = role === "admin" ? admins : users;
  let userFound = false;
  let username, Gender, id;

  for (let i = 0; i < userList.length; i++) {
    const user = userList[i];
    if (user.email === email && user.password === password) {
      userFound = true;
      username = user.name; 
      id = user.id; 
      Gender = user.Gender;
      break;
    }
  }

  if (userFound) {
    errorMessage.style.display = "none"; 
    window.location.href = `dashboard.html?role=${encodeURIComponent(role)}&name=${encodeURIComponent(username)}&Gender=${encodeURIComponent(Gender)}&id=${encodeURIComponent(id)}&email=${encodeURIComponent(email)}Welcome ${username}`;
  } else {
    errorMessage.textContent = "Invalid email, password, or role.";
    errorMessage.style.display = "block";
  }
});

