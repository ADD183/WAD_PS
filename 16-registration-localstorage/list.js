const listEl = document.getElementById("userList");

const users = JSON.parse(localStorage.getItem("users") || "[]");

if (listEl) {
  listEl.innerHTML = users
    .map(
      (user) =>
        `<tr><td>${user.firstName} ${user.lastName}</td><td>${user.dob}</td><td>${user.gender}</td><td>${user.mobile}</td><td>${user.email}</td></tr>`
    )
    .join("");
}
