const Footer = document.querySelector("#footer");
Footer.innerHTML = `
<div class="footer-newsletter">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <h4>Suscribite a nuestro NewsLetter</h4>
            <p>Enterate antes que nadie de nuestras ofertas</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6 footer-contact">
            <h3>MiTienda</h3>
            <p>
              A108 Fake Street 8899<br>
              Buenos Aires, BA 535022<br>
              Argentina <br><br>
              <strong>Phone:</strong> +1 5589 55488 55<br>
              <strong>Email:</strong> info@example.com<br>
            </p>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Links importantes</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nuestros Servicios</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
            </ul>
          </div>
          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Nuestras redes</h4>
            <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
            <div class="social-links mt-3">
              <a href="#" class="twitter"><i class=""><img src="../assets/img/twitter.png" class="" alt=""></i></a>
              <a href="#" class="facebook"><i class=""><img src="../assets/img/facebook.png" class="" alt=""></i></a>
              <a href="#" class="instagram"><i class=""><img src="../assets/img/instagram.png" class="" alt=""></i></a>
              <a href="#" class="pinterest"><i class=""><img src="../assets/img/pinterest.png" class="" alt=""></i></a>
              <a href="#" class="github"><i class=""><img src="../assets/img/github.png" class="" alt=""></i></a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>nec2Solutions</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        Designed by <a href="#">nec2Solutions</a>
      </div>
    </div>
`

