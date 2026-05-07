const yearEl = document.getElementById("year");
const patientCountEl = document.getElementById("patientCount");
const form = document.getElementById("patientForm");

const readCount = () => Number.parseInt(localStorage.getItem("patientCount") || "0", 10);
const writeCount = (value) => localStorage.setItem("patientCount", String(value));

const updateCount = () => {
  if (patientCountEl) {
    patientCountEl.textContent = readCount();
  }
};

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

updateCount();

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const nextCount = readCount() + 1;
    writeCount(nextCount);
    updateCount();
    form.reset();
  });
}
