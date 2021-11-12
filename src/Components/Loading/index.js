import React from "react";
import BeatLoader from "react-spinners/BeatLoader"
//import { Container } from "../../Pages/Search/styles";

export default function Loading(){


    
    return(
      <div style={{display:'flex', flexDirection:'column',alignItems: 'center', justifyContent:'center', padding: '5%'}}>
            <BeatLoader color="pink"/>
    </div>
    );

}