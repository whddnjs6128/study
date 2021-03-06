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
            setmoreResult(parseFloat(moreFirst)+parseFloat(moreSecond))      
          }else if(moreOper === "-"){
            setmoreResult(parseFloat(moreFirst)-parseFloat(moreSecond))     
          }else if(moreOper === "*"){
            setmoreResult(parseFloat(moreFirst)*parseFloat(moreSecond))  
          }else if(moreOper === "/"){
            setmoreResult(parseFloat(moreFirst)/parseFloat(moreSecond))     
          }else if(moreOper === "%"){
            setmoreResult(parseFloat(moreFirst)%parseFloat(moreSecond))    
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
    if(!moreOper){
      
      if(!String(moreFirst).includes("-")){
        setmoreFirst("-"+String(moreFirst))
      }else{
        setmoreFirst(String(moreFirst).slice(1))
      }      
  }
  }

  const point = () => {
    if(!moreOper){
      if(typeof(moreFirst)==="number"){
          setmoreFirst(
              String(moreFirst).concat(".")
          )
      }else{
          setmoreFirst(
              moreFirst.concat(".")
          )
      }
      
  }else{
      setmoreSecond(
          moreSecond.concat(".")
      )
  }
  }

  useEffect(()=> {document.querySelector('ul:first-of-type li button:first-of-type').focus()},[])
 

  function keyevent(e) {
		const keycode = e.key;
    const buttons = document.querySelectorAll("ul li button");
    const total = buttons.length;
    const cols = 4;
		const idx = Array.from(document.querySelectorAll('ul li button')).indexOf(e.target);

		switch (keycode) {
			//  방향키 입력
			case("ArrowLeft") : // Left
				if(idx===0){
					return false;      
				}else{  
					document.querySelectorAll('ul li button')[idx-1].focus();
				}
				break;
			case("ArrowUp") : // Up
				if(idx < cols){
					return false;      
				}else if(idx===total-1 || idx===(total-2)){
          document.querySelectorAll('ul li button')[idx-3].focus();
        }else{
					document.querySelectorAll('ul li button')[idx-cols].focus();
				} 
				break;
			case("ArrowRight") : // Right
				if(idx===(total-1)){ 
					return false;      
				}else{      
					document.querySelectorAll('ul li button')[idx+1].focus();
				} 
				break;

			case ("ArrowDown") : // Down
				if(idx+3 >= total){
					return false;         
				}else if(idx===(total-6)|| idx===(total-5) || idx===(total-4)){
          document.querySelectorAll('ul li button')[idx+3].focus();
        }
        else{
					document.querySelectorAll('ul li button')[idx+cols].focus();
				}
				break;

        // 숫자 키 입력
      case "0" :case "1" :case "2" :case "3" :case "4" :case "5" :case "6" :case "7" :case "8" :case "9" :
        document.getElementById(keycode).focus();
        if(!moreOper){
          // 결과값에 값 이어서 추가하기
          if(typeof(moreFirst)==="number"){
              setmoreFirst(
                  String(moreFirst).concat(keycode)
              )
          }else{
              setmoreFirst(
                  moreFirst.concat(keycode)
              )
          }
      }else{
          setmoreSecond(
              moreSecond.concat(keycode)
          )
      }
      break;

      //  연산자 입력
      case "+": case "-": case "*" : case "/" : case "%" :
        setmoreOper(keycode)
        break;
      // 소숫점
      case "." :
        point(); 
      break;
      // 연산
      case "=" :
        moreCalcul(); 
      break;
      // 백스페이스
      case "Backspace" :
        if(!moreOper){
          // 결과값에 값 이어서 추가하기
          if(typeof(moreFirst)==="number"){
              setmoreFirst(
                  String(moreFirst).slice(0,-1)
              )
          }else{
              setmoreFirst(
                  moreFirst.slice(0,-1)
              )
          }}
          else{
              setmoreSecond(
                  moreSecond.slice(0,-1)
              )
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
