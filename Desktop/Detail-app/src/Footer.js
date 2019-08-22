import React from "react";
import logo from "./img/logo.png";
function Footer() {
  return (
    <footer id="footer">
      <div class="container">
        <div class="row d-flex justify-content-between">
          <div class="col-sm-12 col-md-12 col-lg-6">
            <div class="footer-content-left" id="mobileFooterContentLeft">
              <div class="row">
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                  <p class="lead">Site</p>
                  <ul>
                    <li>
                      <a href=" ;" class="small">
                        Prayer Times
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                  <p class="lead">Quick</p>
                  <ul>
                    <li>
                      <a href=" ;" class="small">
                        Surah Yaseen
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Surah Rahman
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Surah Mulak
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Ayatul Kursi
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                  <p class="lead">Languages</p>
                  <ul>
                    <li>
                      <a href=" ;" class="small">
                        English
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        German
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Urdu
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Arabic
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="col-3 col-sm-3 col-md-3 col-lg-3">
                  <p class="lead" />
                  <ul class="footer-content-left-last">
                    <li>
                      <a href=" ;" class="small">
                        Indonesian
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        Turkish
                      </a>
                    </li>
                    <li>
                      <a href=" ;" class="small">
                        French
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="footer-content-right">
              <div class="row">
                <div class="col-sm-12 col-md-12 offset-lg-4 col-lg-8">
                  <div class="d-flex justify-content-between logo-social">
                    <img src={logo} alt="Islam Check" />
                    <ul class="social-icons d-flex">
                      <li>
                        <a href=" ;">
                          <i class="fab fa-facebook-square" />
                        </a>
                      </li>
                      <li>
                        <a href=" ;">
                          <i class="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href=" ;">
                          <i class="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-12 col-md-12 offset-lg-4 col-lg-8">
                <p class="footer-text">
                  Al-kitaab.com (also known as the noble quran, al quran, holy
                  quran, koran) is a pro bono project.
                </p>
                <p class="footer-text">
                  &copy; 2019 Al-Kitaab.com. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
