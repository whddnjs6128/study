import React, { useState, useEffect } from 'react';

// 담는 값 1, 2
// 계산할 값yat
// 결과값

// 숫자 온클릭시 
// oper에 값이 없으면
// moreFirst에 담고
// 계속 담다가

// oper가 담기면

// moreSecond에 담고
// =을 누르면
// 결과값 도출후

// 첫번째 값에 결과값을 담고
// oper와 두번째 값을 초기화 시키기?

function More() {
  const [moreFirst, setmoreFirst] = useState("");
  const [moreOper, setmoreOper] = useState();
  const [moreSecond, setmoreSecond] = useState("");
  const [moreresult, setmoreResult] = useState("");


    const numArray =[
      ["ac", "+/-","%", "/"],
      [7, 8, 9 , "*"],
      [4, 5, 6, "-"],
      [1, 2, 3, "+"],
      [0, ".", "="]
    ]
 

    const clickNum = (e) => {
        
        if(!moreOper){
            // 결과값에 값 이어서 추가하기
            if(typeof(moreFirst)==="number"){
                setmoreFirst(
                    String(moreFirst).concat(e.target.value)
                )
            }else{
                setmoreFirst(
                    moreFirst.concat(e.target.value)
                )
            }
            
        }else{
            setmoreSecond(
                moreSecond.concat(e.target.value)
            )
        }
    }

    const moreCalcul = () =>{
        if (moreOper === "+"){
            setmoreResult(parseInt(moreFirst)+parseInt(moreSecond))      
          }else if(moreOper === "-"){
            setmoreResult(parseInt(moreFirst)-parseInt(moreSecond))     
          }else if(moreOper === "*"){
            setmoreResult(parseInt(moreFirst)*parseInt(moreSecond))     
          }else if(moreOper === "/"){
            setmoreResult(parseInt(moreFirst)/parseInt(moreSecond))     
          }else if(moreOper === "%"){
            setmoreResult(parseInt(moreFirst)%parseInt(moreSecond))    
          }
    }

    useEffect(() => {
        setmoreFirst(moreresult)
        setmoreOper();
        setmoreSecond("");
    },[moreresult])

    const reset = () => {
          setmoreFirst("");
          setmoreOper();
          setmoreSecond("");
          setmoreResult("");
  }
  const minus = () => {
    console.log(!moreFirst.includes("-") );
    if(!moreOper){
      
      if(!moreFirst.includes("-")){
        setmoreFirst("-"+String(moreFirst))
      }else{
        setmoreFirst(String(moreFirst).slice(1))

      }      
  }
  }

  const point = () => {
    
  }

 

  function keyevent(e) {
		const keycode = e.keyCode;
    const buttons = document.querySelectorAll("ul li button");
    const total = buttons.length;

    const cols = 4;
		const idx = Array.from(document.querySelectorAll('ul li button')).indexOf(e.target);

		switch (keycode) {
			
			case(37) : // Left
				if(idx===0){
					return false;      
				}else{  
					document.querySelectorAll('ul li button')[idx-1].focus();
				}
				break;
			case(38) : // Up
				if(idx < cols){
					return false;      
				}else if(idx===total-1 || idx===(total-2)){
          document.querySelectorAll('ul li button')[idx-3].focus();
        }else{
					document.querySelectorAll('ul li button')[idx-cols].focus();
				} 
				break;
			case(39) : // Right
				if(idx===(total-1)){ 
					return false;      
				}else{      
					document.querySelectorAll('ul li button')[idx+1].focus();
				} 
				break;

			case (40) : // Down
				if(idx+3 >= total){
					return false;         
				}else if(idx===(total-6)|| idx===(total-5) || idx===(total-4)){
          document.querySelectorAll('ul li button')[idx+3].focus();
        }
        else{
					document.querySelectorAll('ul li button')[idx+cols].focus();
				}
				break;

			default : 
				return false;
				break;
		}
	}

  // keyevent();
  return (
    <div className="more" onKeyDown={(e)=>keyevent(e)}>
      <span>{moreFirst}</span>
      <span>{moreOper}</span>
      <span>{moreSecond}</span>
        <br />
        {/* 단순 버튼 나열
      <button onClick={(e)=>clickNum(e)} value="0" onKeyDown={(e)=>{if(e.key === 'Enter') {clickNum(e)}}}>0</button>
      <button onClick={(e)=>clickNum(e)} value="1">1</button>
      <button onClick={(e)=>clickNum(e)} value="2">2</button>
      <button onClick={(e)=>clickNum(e)} value="3">3</button>
      <button onClick={(e)=>clickNum(e)} value="4">4</button>
      <button onClick={(e)=>clickNum(e)} value="5">5</button>
      <button onClick={(e)=>clickNum(e)} value="6">6</button>
      <button onClick={(e)=>clickNum(e)} value="7">7</button>
      <button onClick={(e)=>clickNum(e)} value="8">8</button>
      <button onClick={(e)=>clickNum(e)} value="9">9</button>

      <button onClick={(e)=>setmoreOper(e.target.value)} value="+">+</button>
      <button onClick={(e)=>setmoreOper(e.target.value)} value="-">-</button>
      <button onClick={(e)=>setmoreOper(e.target.value)} value="*">*</button>
      <button onClick={(e)=>setmoreOper(e.target.value)} value="/">/</button>
      <button onClick={(e)=>setmoreOper(e.target.value)} value="%">%</button>
      <br />
      <button onClick={moreCalcul}>=</button>
      <button onClick={reset}>ac</button>
      <button onClick={minus}>+/-</button>
      */}
      {
        numArray.map( (o,i) => <ul key={i}><li>
          {
            o.map((k,ii)=> <button key={ii} value={k} id={k} onClick={(e) =>
              {if(typeof(k)== "number") {
                clickNum(e)
              }else if(k==="+" || k==="-" || k==="*" || k ==="/" || k ==="%") {
                setmoreOper(e.target.value)
              }else if(k==="ac"){
                reset();
              }else if(k==="="){
                moreCalcul();
              }else if(k==="+/-"){
                minus();
              }else if(k==="."){
                point();
              }
          }
            }>{k}</button>)
          }
       </li></ul>)
      }

    </div>
  );
}

export default More;
