import React from "react";

function Body(){
    return(
<main className="detailmain mt-5">
          <div className="container">
        <div className="ayatboxouter">
          <div className="row">
          <div className="col-3 col-sm-1">
              <div className="ayatrefbox">
                <div className="ref">
                  <div
                    className="ref-group d-flex justify-content-center align-items-center"
                  >
                    <a href="">1</a>
                    :
                    <a href="">1</a>
                  </div>
                </div>
                <div className="plycpy">
                  <div className="plycpy-group text-center">
                    <a href="">
                      <i className="fas fa-play"></i> Play
                    </a>
                    <br />
                    <a href="">
                      <i className="fas fa-paperclip"></i> Copy
                    </a>
                  </div>
                </div>
                <div className="social">
                  <div className="social-group d-flex justify-content-between">
                    <a href="" className="facustomfacebook">
                      <i className="fab fa-facebook-f fa-lg"></i>
                    </a>
                    <a href="" className="facustomtwitter">
                      <i className="fab fa-twitter fa-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9 col-sm-11">
              <div className="ayatbox">
                <h1 className="text-right" dir="rtl">
                  <span>
                    <b
                      className="arabic pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="In (the) name"
                      >ﱁ
                    </b>
                  </span>
                  <span>
                    <b
                      className="arabic pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="(of) Allah"
                      >ﱂ</b
                    >
                  </span>
                  <span>
                    <b
                      className="arabic pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="the Most Gracious"
                      >ﱃ</b
                    >
                  </span>
                  <span>
                    <b
                      className="arabic pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="the Most Merciful"
                      >ﱄ</b
                    >
                  </span>
                  <span>
                    <b
                      className="arabic pointer"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Verse 1"
                      >ﱅ</b
                    >
                  </span>
                </h1>
                <div className="translation-box">
                  <a href="">Sahih International</a>
                  <p>
                    In the name of Allah, the Entirely Merciful, the Especially
                    Merciful.
                  </p>
                </div>
                <a href="#" className="bayyinah">Watch lecture by Bayyinah</a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr />
                    </main>
                    );
                    }
export default Body;