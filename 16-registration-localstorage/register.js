const form = document.getElementById("registerForm");
const errorMsg = document.getElementById("errorMsg");

const readUsers = () => JSON.parse(localStorage.getItem("users") || "[]");
const writeUsers = (users) => localStorage.setItem("users", JSON.stringify(users));

const isValidMobile = (value) => /^\d{10}$/.test(value);

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMsg.textContent = "";

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector("input[name='gender']:checked")?.value;
    const mobile = document.getElementById("mobile").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!isValidMobile(mobile)) {
      errorMsg.textContent = "Mobile number must be exactly 10 digits.";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      errorMsg.textContent = "Please enter a valid email address.";
      return;
    }

    const users = readUsers();
    users.push({ firstName, lastName, dob, gender, mobile, email });
    writeUsers(users);
    form.reset();
    alert("Registration saved.");
  });
}
