function validateCertificate() {
  const certID = document.getElementById("certID").value.trim();
  const resultBox = document.getElementById("resultBox");

  resultBox.innerHTML = "";

  const resultText = document.createElement("div");

  if (certID === "") {
    resultText.textContent = "❌ Please enter a valid certificate ID.";
    resultText.style.color = "#d32f2f";
  } else {
    resultText.textContent = `✅ Certificate ID "${certID}" is valid.`;
    resultText.style.color = "#2e7d32";
  }

  resultBox.appendChild(resultText);
}