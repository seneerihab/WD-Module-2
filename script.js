function displayGreeting() {
  let name = document.getElementById("nameInput").value;
  let message = name ? `Hello, ${name}! Welcome!` : "please enter your name";
  document.getElementById("greeting").innerText = message;
}
