import React from "react";
import "./Reading.css";

function Reading(){
return(
<>
<div class="container mt-5">
        <div class="fb-tw-share d-flex justify-content-end">
            <a href="javascript:void(0);">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="javascript:void(0);">
                <i class="fab fa-twitter"></i>
            </a>
        </div>
    </div>

    <div class="mainsurah mtb-big" >
        <div className="container-fluid" >
            <div class="circle" >
                <h1 class="arabic">
                    <b>
                            ﱁﱂﱃﱄﱅ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱆﱇﱈﱉﱊ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱎﱏﱐﱑ
                    </b>
                    <b>
                            ﱋﱌﱍ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱒﱓﱔﱕﱖﱗ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱛﱜﱝ
                    </b>
                    <b>
                            ﱘﱙﱚ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱞﱟﱠﱡ
                    </b>
                </h1>
                <h1 class="arabic">
                    <b>
                            ﱢﱣﱤ
                    </b>
                </h1>
            </div>
        </div>
    </div>

    <div class="container mb-5">
        <div class="next-previous-surah d-flex justify-content-between align-items-center">
            <a href="javascript:void(0);" class="btn btn-outline-primary btn-lg">Beginning of Surah</a>
            <a href="javascript:void(0);" class="btn btn-outline-primary btn-lg">Next Surah <i class="fas fa-arrow-right"></i></a>
        </div>
    </div>
    </>
);
}
export default Reading;