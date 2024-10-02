import React,{ useRef } from 'react'

function TenthMarkSheet() {
    
    
    let firstnameInputRef =useRef();
    let lastnameInputRef =useRef();
    let engInputRef =useRef();
    let telInputRef =useRef();
    let hinInputRef =useRef();
    let matInputRef =useRef();
    let sciInputRef =useRef();
    let sociInputRef =useRef();

   
    let engSpanRef =useRef();
    let telSpanRef =useRef();
    let hinSpanRef =useRef();
    let matSpanRef =useRef();
    let sciSpanRef =useRef();
    let sociSpanRef =useRef();
    let resultLblRef=useRef();

    

    let calculateResult =()=>{


        let firstName = firstnameInputRef.current.value;
        let lastName = lastnameInputRef.current.value;
        let engMarks = Number(engInputRef.current.value);
        let telMarks = Number(telInputRef.current.value);
        let hindMarks =Number(hinInputRef.current.value);
        let mathMarks = Number(matInputRef.current.value);
        let sciMarks = Number(sciInputRef.current.value);
        let sociMarks = Number(sociInputRef.current.value);
           
        let result;


        if(engMarks <35 || telMarks <35 || hindMarks <35 || mathMarks <35 || sciMarks <35 || sociMarks <35 ){
           result ="Failed";
        
        }else{
           result ="Passed";

        }

        if(engMarks >35 || telMarks >35 || hindMarks >35 || mathMarks >35 || sciMarks >35 || sociMarks >35 ){
            result ="Passed";
         
         }else{
            result ="Failed";
 
         }

        let totalMarks=engMarks+telMarks+hindMarks+mathMarks+sciMarks+sociMarks;

        resultLblRef.current.innerHTML = (`${firstName} ${lastName} ${result} in Tenth got total marks of ${totalMarks}`);
        console.log("calcualte the results");
    };

    let inputOnFocus = (inputRef)=>{
       inputRef.current.style.backgroundColor = "red";
    };

    let inputOnBlur = (inputRef)=>{
        inputRef.current.style.backgroundColor = "";
     };

     let inputOnChange = (inputRef,spanRef) => {
        if(inputRef.current.value >= 0 && inputRef.current.value <= 100){
            if (inputRef.current.value >= 35){
               spanRef.current.value = "pass";
               spanRef.current.style.backgroundColor = "green"

            }else{
                spanRef.current.innerHTML = 'fail';
                spanRef.current.style.backgroundColor = "red"
        }
     }else{
         spanRef.current.innerHTML = "Invalid";
         spanRef.current.style.backgroundColor = "purple"
     }
    
    };

  return(

   <div>
      <form>
        <div>
            <label>First Name</label>
            <input ref={firstnameInputRef}
             
             onFocus={()=>{
                  inputOnFocus(firstnameInputRef);
                 }}
                 

                onBlur={()=>{
                    inputOnBlur(firstnameInputRef);
             
                 }}
           
             ></input>
            <span></span>
        </div>
       
        <div>
            <label>Last Name</label>
            <input ref={lastnameInputRef}
             onFocus={()=>{
               
                inputOnFocus(lastnameInputRef);
            }}


             onBlur={()=>{
                inputOnBlur(lastnameInputRef);
             
            }}
            
            ></input>
            <span></span>
        </div>
        <div>
            <label>English</label>
            <input type='Number' ref={engInputRef}
             onFocus={()=>{
               
               inputOnFocus(engInputRef);

             }}
             onChange={()=>{
              inputOnChange(engInputRef);

                }}

                onBlur={()=>{
                    inputOnBlur(engInputRef);
             

                }}
             ></input>
            <span ref={engSpanRef}></span>
        </div>
        
        <div>
            <label>Telugu</label>
            <input type='Number' ref={telInputRef}
             onFocus={()=>{
             
               inputOnFocus(telInputRef);
             }}

             onChange={()=>{
                inputOnChange(engInputRef);
               
             }}

             onBlur={()=>{
                inputOnBlur(telInputRef);
             
             
            }}
            ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='Number' ref={hinInputRef} 
          onFocus={()=>{
            inputOnFocus(hinInputRef);
       }}
      onChange={()=>{
       
        inputOnChange(engInputRef);

    }}

    onBlur={()=>{
        inputOnBlur(hinInputRef);
             
      }}

       ></input>
            <span ref={hinSpanRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='Number' ref={matInputRef} 
            onFocus={()=>{
                inputOnFocus(matInputRef);

             }}
             onChange={()=>{
                inputOnChange(engInputRef);
                }}

                onBlur={()=>{
                    inputOnBlur(matInputRef);
             
                }}
            
            ></input>
            <span ref={matSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='Number' ref={sciInputRef} 
            
            onFocus={()=>{
                inputOnFocus(sciInputRef);

             }}
             onChange={()=>{
                inputOnChange(sciInputRef);

                }}

                onBlur={()=>{
                    inputOnBlur(sciInputRef);
             
                }}
            
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='Number' ref={sociInputRef} 
            
            onFocus={()=>{
                inputOnFocus(sociInputRef);
             }}
             onChange={()=>{
                inputOnChange(sociInputRef);
                }}

                onBlur={()=>{
                    inputOnBlur(sociInputRef);
             
                }}
            ></input>
            <span ref={sociSpanRef}></span>
        </div>
     
    
    <button type='button' onClick={()=>{

        calculateResult();

       }}>Calculate Results</button>
    
    </form>
    </div>
    
  )
}



 

export default TenthMarkSheet

