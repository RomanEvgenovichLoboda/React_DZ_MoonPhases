import React, {useState, useEffect} from "react";
function MoonCycle() {
    const[moonNow,setMoonNow] = useState();
    useEffect(() => {
        SendRequest('GET','http://localhost:8080/getMoonCycle')
        .then(data=>setMoonNow(data))
        .catch(err=>console.log(err));
    }, []);
    
    function SendRequest(method,url,body = null){
        return new Promise((resolve,reject)=>{
            const xhr = new XMLHttpRequest();
            xhr.open(method,url);
            //xhr.responseType = 'json';
            xhr.onload = ()=>{
                // alert(xhr.response);
                if(xhr.status >= 400){
                    reject(xhr.response)
                }
                else{
                    resolve(xhr.response);
                    // setMoonNow(xhr.response);
                }
                
            }
            xhr.send(body);
            xhr.onerror = ()=>{
                reject(xhr.response); 
            }
        })
       
    }
    function PostMoon(){
        let inp = document.querySelector(".inp__date").value;
        console.log(inp);
        if(inp!=""){
            const body ={
                date:inp,
            }
            SendRequest('POST','http://localhost:8080/postMoonCycle?date='+inp)
            .then(data=>setMoonNow(data))
            .catch(err=>console.log(err));
        }
        
    }
    return (
     <div>
        <h2>Moon Phases:</h2>
        <input className="inp__date" type={'datetime-local'} onChange={PostMoon}></input>
        <h1 className="label_getMoon">{moonNow}</h1>
     </div>
    );
  }
  
  export default MoonCycle;