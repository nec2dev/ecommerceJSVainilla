const NavBar = document.querySelector("#navbar");
NavBar.innerHTML = `
<div class="container navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Tienda Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="Home" onclick="ROUTER.load('home')" class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a id="shop" onclick="ROUTER.load('shop')" class="nav-link active" aria-current="page" href="#">Tienda</a>
        </li>
        <li class="nav-item">
          <a id="contact" onclick="ROUTER.load('contact')" class="nav-link active" aria-current="page" href="#">Contactos</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Categoria 01</a></li>
            <li><a class="dropdown-item" href="#">Categoria 02</a></li>
            <li><a class="dropdown-item" href="#">Categoria 03</a></li>
            <li><a class="dropdown-item" href="#">Categoria 04</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Destacados</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex mx-auto">
        <input class="form-control me-2" type="search" placeholder="Buscar..." aria-label="Search">
        <button class="btn btn-outline-light" type="submit">Buscar</button>
      </form>
      <div><a id="Carrito" onclick="ROUTER.load('cart')" class="m-2"><img src="../assets/img/cart.png" class="img-fluid" alt=""></a></div>
      <div><a id="ListaDeDeseos" onclick="ROUTER.load('whish')" class="m-2"><img src="../assets/img/heart.png" class="img-fluid" alt=""></a></div>
    </div>
  </div>
</div>
`