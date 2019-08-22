import React, { useContext } from "react";
import Info from "./SurahInfo";
import {InfoContext} from "./index";
import {ReadingContext} from "./index";
import Reading from "./Reading";
import Body from "./SurahBody";
import { If} from 'react-control-statements';

function Main(){
  const [Status]=useContext(InfoContext);
  const [ReadStatus]=useContext(ReadingContext);

  return (
   <>
   {Status && <Info/>}
            
              <If condition={ReadStatus===true}>
                            <Reading/>
             </If>
             <If condition={ReadStatus===false}>
             <Body/>
             </If>
            </>
            );

  }

  export default Main;