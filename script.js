let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("QiHARVz0NcB4w-Xdm");
  document
    .getElementById("contato-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service0803", "template_m6a8oxh", this).then(
        function () {
          alert("Mensagem enviada com sucesso! 👍");
          document.getElementById("contato-form").reset(); // Limpa o formulário
        },
        function (error) {
          alert("Erro ao enviar a mensagem: " + error.text);
        }
      );
    });
});
