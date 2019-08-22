import React from "react";
import { Link } from 'react-router-dom';



function Surahs() {
  return (
    <section id="surahs" className="mt-5">
      <div className="container">
        <ul className="nav align-items-center">
        <li className="nav-item">
           <a className="nav-link active" data-toggle="tab" href="#all">
              All
            </a>
          </li>
          |
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#makki">
              Makki Surahs of Quran <span className="badge">88</span>
            </a>
          </li>
          |
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#madni">
              Madini Surahs of Quran <span className="badge">28</span>
            </a>
          </li>
        </ul>
        <hr />
        {/* TAB CONTENT */}
       
        <div className="tab-content">
          <div className="tab-pane container active" id="all">
            <p className="manzil-text-first" >
              <b>Manzil 01</b>
            </p>
           
            <div className="row" >
              <div className="col-lg-3 col-md-4 col-sm-6" >
                <Link to="/Route">
                  <div className="surahbox d-flex justify-content-between">
                    <div className="surah-content-left">
                      <b>01</b>
                      <p>
                        <span className="lead">Al-Fatihah</span>
                        <br />
                        The Opener
                      </p>
                    </div>
                    <div className="surah-content-right">
                      <p className="verse-count">07 Verses</p>
                      <p className="arabic-index">ǵ</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6" >
                <a href=" ">
                  <div className="surahbox d-flex justify-content-between">
                    <div className="surah-content-left">
                      <b>02</b>
                      <p>
                        <span className="lead">Al-Baqra</span>
                        <br />
                        The Cow
                      </p>
                    </div>
                    <div className="surah-content-right">
                      <p className="verse-count">286 Verses</p>
                      <p className="arabic-index">Ƕ</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6" >
                <a href=" ">
                  <div className="surahbox d-flex justify-content-between">
                    <div className="surah-content-left">
                      <b>03</b>
                      <p>
                        <span className="lead">Ali 'Imran</span>
                        <br />
                        Family of Imran
                      </p>
                    </div>
                    <div className="surah-content-right">
                      <p className="verse-count">200 Verses</p>
                      <p className="arabic-index">Ƿ</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-3 col-md-4 col-sm-6" >
                <a href=" ">
                  <div className="surahbox d-flex justify-content-between">
                    <div className="surah-content-left">
                      <b>04</b>
                      <p>
                        <span className="lead">An-Nisa</span>
                        <br />
                        The Women
                      </p>
                    </div>
                    <div className="surah-content-right">
                      <p className="verse-count">176 Verses</p>
                      <p className="arabic-index">Ǹ</p>
                    </div>
                  </div>
                </a>
              </div>
              </div>
              
              {/* <!--                    Manzil 01 End--> */}
              
                <p className="manzil-text">
                <b>Manzil 02</b>
              </p>
              
              <div className="row">
            
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <a href=" ">
                    <div className="surahbox d-flex justify-content-between">
                      <div className="surah-content-left">
                        <b>05</b>
                        <p>
                          <span className="lead">Al-Ma'idah</span>
                          <br />
                          The Table Spread
                        </p>
                      </div>
                      <div className="surah-content-right">
                        <p className="verse-count">120 Verses</p>
                        <p className="arabic-index">ǹ</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <a href=" ">
                    <div className="surahbox d-flex justify-content-between">
                      <div className="surah-content-left">
                        <b>06</b>
                        <p>
                          <span className="lead">Al-An'am</span>
                          <br />
                          The Cattle
                        </p>
                      </div>
                      <div className="surah-content-right">
                        <p className="verse-count">165 Verses</p>
                        <p className="arabic-index">Ǻ</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <a href=" ">
                    <div className="surahbox d-flex justify-content-between">
                      <div className="surah-content-left">
                        <b>07</b>
                        <p>
                          <span className="lead">Al-A'raf</span>
                          <br />
                          The Heights
                        </p>
                      </div>
                      <div className="surah-content-right">
                        <p className="verse-count">206 Verses</p>
                        <p className="arabic-index">ǻ</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <a href=" ">
                    <div className="surahbox d-flex justify-content-between">
                      <div className="surah-content-left">
                        <b>08</b>
                        <p>
                          <span className="lead">Al-Anfal</span>
                          <br />
                          The Spoils of War
                        </p>
                      </div>
                      <div className="surah-content-right">
                        <p className="verse-count">75 Verses</p>
                        <p className="arabic-index">Ǽ</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <a href=" ">
                    <div className="surahbox d-flex justify-content-between">
                      <div className="surah-content-left">
                        <b>09</b>
                        <p>
                          <span className="lead">At-Tawbah</span>
                          <br />
                          The Repentance
                        </p>
                      </div>
                      <div className="surah-content-right">
                        <p className="verse-count">129 Verses</p>
                        <p className="arabic-index">ǽ</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              {/* <!--                    Manzil 02 End--> */}
              <p className="manzil-text">
                     <b>Manzil 03</b>
                  </p>
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>10</b>
                                 <p>
                                    <span className="lead">Yunus</span>
                                    <br/>Jonah
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">109 Verses</p>
                                 <p className="arabic-index">Ǿ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>11</b>
                                 <p>
                                    <span className="lead">Hud</span>
                                    <br/>Hud
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">123 Verses</p>
                                 <p className="arabic-index">ǿ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>12</b>
                                 <p>
                                    <span className="lead">Yusuf</span>
                                    <br/>Joseph
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">111 Verses</p>
                                 <p className="arabic-index">Ȁ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>13</b>
                                 <p>
                                    <span className="lead">Ar-Ra'd</span>
                                    <br/>The Thunder
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">43 Verses</p>
                                 <p className="arabic-index">ȁ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>14</b>
                                 <p>
                                    <span className="lead">Ibrahim</span>
                                    <br/>Abrahim
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">52 Verses</p>
                                 <p className="arabic-index">Ȃ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>15</b>
                                 <p>
                                    <span className="lead">Al-Hijr</span>
                                    <br/>The Rocky Tract
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">99 Verses</p>
                                 <p className="arabic-index">ȃ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>16</b>
                                 <p>
                                    <span className="lead">An-Nahl</span>
                                    <br/>The Bee
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">128 Verses</p>
                                 <p className="arabic-index">Ȅ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  {/* <!--                    Manzil 03 End--> */}
                  <p className="manzil-text">
                     <b>Manzil 04</b>
                  </p>
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>17</b>
                                 <p>
                                    <span className="lead">Al-Isra</span>
                                    <br/>The Night Journey
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">111 Verses</p>
                                 <p className="arabic-index">ȅ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>18</b>
                                 <p>
                                    <span className="lead">Al-Kahf</span>
                                    <br/>The Cave
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">110 Verses</p>
                                 <p className="arabic-index">Ȇ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>19</b>
                                 <p>
                                    <span className="lead">Maryam</span>
                                    <br/>Mary
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">98 Verses</p>
                                 <p className="arabic-index">ȇ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>20</b>
                                 <p>
                                    <span className="lead">Taha</span>
                                    <br/>Ta-Ha
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">135 Verses</p>
                                 <p className="arabic-index">Ȉ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>21</b>
                                 <p>
                                    <span className="lead">Al-Anbya</span>
                                    <br/>The Prophets
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">112 Verses</p>
                                 <p className="arabic-index">ȉ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>22</b>
                                 <p>
                                    <span className="lead">Al-Haj</span>
                                    <br/>The Pilgrimage
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">78 Verses</p>
                                 <p className="arabic-index">Ȋ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>23</b>
                                 <p>
                                    <span className="lead">Al-Mu'minun</span>
                                    <br/>The Believers
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">118 Verses</p>
                                 <p className="arabic-index">ȋ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>24</b>
                                 <p>
                                    <span className="lead">An-Noor</span>
                                    <br/>The Light
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">64 Verses</p>
                                 <p className="arabic-index">Ȍ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>25</b>
                                 <p>
                                    <span className="lead">Al-Furqan</span>
                                    <br/>The Criterian
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">77 Verses</p>
                                 <p className="arabic-index">ȍ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  {/* <!--                    Manzil 04 End--> */}
                  <p className="manzil-text">
                     <b>Manzil 05</b>
                  </p>
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>26</b>
                                 <p>
                                    <span className="lead">Ash-Shu'ara</span>
                                    <br/>The Poets
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">227 Verses</p>
                                 <p className="arabic-index">Ȏ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>27</b>
                                 <p>
                                    <span className="lead">An-Naml</span>
                                    <br/>The Ant
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">93 Verses</p>
                                 <p className="arabic-index">ȏ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>28</b>
                                 <p>
                                    <span className="lead">Al-Qasas</span>
                                    <br/>The Stories
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">88 Verses</p>
                                 <p className="arabic-index">Ȑ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>29</b>
                                 <p>
                                    <span className="lead">Al-'Ankabut</span>
                                    <br/>The Spider
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">69 Verses</p>
                                 <p className="arabic-index">ȑ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>30</b>
                                 <p>
                                    <span className="lead">Ar-Rum</span>
                                    <br/>The Romans
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">60 Verses</p>
                                 <p className="arabic-index">Ȓ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>31</b>
                                 <p>
                                    <span className="lead">Luqman</span>
                                    <br/>Luqman
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">34 Verses</p>
                                 <p className="arabic-index">ȓ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>32</b>
                                 <p>
                                    <span className="lead">As-Sajdah</span>
                                    <br/>The Prostration
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">30 Verses</p>
                                 <p className="arabic-index">Ȕ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>33</b>
                                 <p>
                                    <span className="lead">Al-Ahzab</span>
                                    <br/>The Combined Forces
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">73 Verses</p>
                                 <p className="arabic-index">ȕ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>34</b>
                                 <p>
                                    <span className="lead">Saba</span>
                                    <br/>Sheba
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">54 Verses</p>
                                 <p className="arabic-index">Ȗ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>35</b>
                                 <p>
                                    <span className="lead">Fatir</span>
                                    <br/>Originator
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">45 Verses</p>
                                 <p className="arabic-index">ȗ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>36</b>
                                 <p>
                                    <span className="lead">Ya-Sin</span>
                                    <br/>Ya Sin
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">83 Verses</p>
                                 <p className="arabic-index">Ș</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  {/* <!--                    Manzil 05 End--> */}
                  <p className="manzil-text">
                     <b>Manzil 06</b>
                  </p>
                  <div className="row">
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                     <div className="col-lg-3 col-md-4 col-sm-6">
                        <a href="<br/>">
                           <div className="surahbox d-flex justify-content-between">
                              <div className="surah-content-left">
                                 <b>01</b>
                                 <p>
                                    <span className="lead">Al-Fatihah</span>
                                    <br/>The Opener
                                 </p>
                              </div>
                              <div className="surah-content-right">
                                 <p className="verse-count">07 Verses</p>
                                 <p className="arabic-index">ǵ</p>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  {/* <!--                    Manzil 06 End--> */}
               
           
          </div>
       
          </div>
        
          <div class="tab-pane container fade" id="makki"></div>
               <div class="tab-pane container fade" id="madni"></div>
         
        </div>
       
      
    </section>
  );
}

export default Surahs;
