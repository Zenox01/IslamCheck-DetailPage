import React,{useContext} from 'react';
import Fade from 'react-reveal/Fade';
import {InfoContext} from "./index";
import BW from "./img/reading.png"
import "./SurahInfo.css"
function Modal(){
    const [Status,setStatus]=useContext(InfoContext);
return(
    <>
<Fade top>
     <div style={{maxHeight:"480px"}}class="container-fluid collapse" id="surahinfo">
            <div class="row">
                <div style={{paddingRight:"0px"}}class="col-3 col-md-3 col-lg-3 col-xl-3 d-flex align-items-center">
                    <img style={{width:"480px",}} src={BW} alt="Quran"/>
                </div>
                <div class="col-1 col-md-1 col-lg-1 col-xl-1 text-right text-uppercase">
                    <h6>Verses</h6>
                    <p><span class="primarycolor">7</span></p>
                    <h6>Pages</h6>
                    <p><span class="primarycolor">1 <span class="dullcolor">:</span> 1</span></p>
                </div>
                <div style={{backgroundColor:"#F4F4F4"}} class="col-8 col-md-8 col-lg-8 col-xl-8">
                    <a style={{cursor:"pointer"}} onClick={()=>setStatus(!Status)}>
                        <i class="fas fa-times"></i>
                    </a>
                    <div class="container-fluid">
                        <h6>Name</h6>
                        <p>
                            This Surah is named Al-Fatihah because of its subject-matter.
                            Fatihah is that which opens a subject or a book or any other
                            thing. In other words, Al-Fatihah is a sort of preface.
                        </p>
                        <h6>Period of Revelation</h6>
                        <p>
                            It is one of the very earliest Revelations to the Holy Prophet. As
                            a matter of fact, we learn from authentic Traditions that it was
                            the first complete Surah which was revealed to Muhammad (Allah's
                            peace be upon him). Before this, only a few miscellaneous verses
                            were revealed which form parts of \`Alaq, Muzzammil, Muddaththir,
                            etc.
                        </p>
                        <h6>Theme</h6>
                        <p>
                            This Surah is in fact a prayer which Allah has taught to all those
                            who want to make a study of His book. It has been placed at the
                            very beginning of the book to teach this lesson to the reader: if
                            you sincerely want to benefit from the Quran, you should offer
                            this prayer to the Lord of the Universe.
                        </p>
                        <p>
                            This preface is meant to create a strong desire in the heart of
                            the reader to seek guidance from the Lord of the Universe, Who
                            alone can grant it. Thus Al-Fatihah indirectly teaches that the
                            best thing for a man is to pray for guidance to the straight path,
                            to study the Quran with the mental attitude of a seeker-
                            after-truth and to recognize the fact that the Lord of the
                            Universe is the source of all knowledge. He should, therefore,
                            begin the study of the Quran with a prayer to him for guidance.
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </Fade>
   </>
);}

export default Modal;
