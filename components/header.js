const Header = document.querySelector("#header");
Header.innerHTML = `
<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="./assets/img/mitiendalogo.png" alt="" class="w-50 h-50 d-inline-block align-text-top">
    </a>
    <div></div>
    <a id="IniciarSesion" onclick="ROUTER.load('login')" href="#"><img src="./assets/img/user-solid.png" alt="" >Iniciar Sesion</a>
    <a id="DarseDeAlta" onclick="ROUTER.load('signup')" href="#"><img src="./assets/img/user-solid.png" alt="" >Registrarse</a>
  </div>
</nav>`
