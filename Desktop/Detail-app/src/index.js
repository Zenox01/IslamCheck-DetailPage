import React,{useState} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const InfoContext=React.createContext();
export const ReadingContext=React.createContext();
const Index=()=>{
    const [Show,setShow]=useState(false);
    const [ShowReading,setReading]=useState(false);
return(
    <ReadingContext.Provider value={[ShowReading,setReading]}>
    <InfoContext.Provider value={[Show,setShow]}>
    <App/>
    </InfoContext.Provider>
    </ReadingContext.Provider>
);
}

ReactDOM.render(<Index/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
