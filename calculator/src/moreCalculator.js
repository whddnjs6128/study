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
      ["", 0, ".", "="]
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

  }

  return (
    <div className="more">
      <span>{moreFirst}</span>
      <span>{moreOper}</span>
      <span>{moreSecond}</span>
        <br />
      <button onClick={(e)=>clickNum(e)} value="0" /*onKeyDown={(e)=>{if(e.key === 'Enter') {clickNum(e)}}}*/>0</button>
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
      {
        numArray.map( (o,i) => <ul key={i}><li>
          {
            o.map((k,ii)=> <button key={ii} value={k} onClick={(e) => (typeof(k)==Number? (e)=>clickNum(e) :setmoreOper(e.target.value))}>{k}</button>)
          }
       </li></ul>)
      }

    </div>
  );
}

export default More;