import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

function CheckBox(){
  const [check, setCheck] = useState(false);

  useEffect(() => {
    alert(`checked:  ${check.toString()}`);
  });
  return(
    <>
      <input type="checkbox" value={check} onChange={() => setCheck(check => !check)} />
      {check  ? "CHECKED" : "NOT CHECKED"}
    </>
  )
}

function App(props){
 const [state, setState] = useState(0);
 const [manager, setManager] =useState("Manager1");
 const [year, setYear] = useState(2020)
 return (<div>
   <h1>Manger : {manager}</h1>
   <button onClick={()=> setManager("Manger2")}>
     Change Manager
   </button>

   <h2>YEAR : {year} </h2>
   <button onClick={() => setYear(year+1)}>
      YEAR
  </button>


   <h1>Status: {state}</h1>

  <button onClick={() => setState("Closed")}>
      CLOSED
  </button>

  <button onClick={() => setState("Breask in 5 min")}>
      BREAK
  </button>

  <button onClick={() => setState("open")}>
      OPEN
  </button>

 </div>);
}


function APP2(){
  const[val, setVal] = useState("");
  const[val2, setVal2] = useState("");

  useEffect(() => {
    console.log(`field 1 : ${val}`)
  }, [val]);

  useEffect(() => {
    console.log(`field 2 : ${val2}`)
  }, [val2]);

  return(
    <>
      <label> 
        Favorite Places: 
      </label>
      <input 
      value={val}
      onChange={e => setVal(e.target.value)} />

      <label>
      Second Favorite Places :
      </label>
      <input 
      value={val2}
      onChange={e => setVal2(e.target.value)} />
    </>

);

}

function GitHubUser({login}){
  const[data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, [])


  if(data){
    return (
    <div>
      <h1>{data.login}</h1>
      <img src={data.avatar_url} width="10%"></img>
    </div>
    );
  }
  return null;
}

function APPgit(){
  return <GitHubUser login="eveporcello" />;
}

function CheckBoxWithReducer(){
  const[checked, toggle] = useReducer(
    checked => !checked,
    false
    );

  return(
      <>
        <input type="checkbox" value={checked} onChange={toggle}/>
        {checked ? "Checked": "NOT CHECKED"}
      </>
  );
}

ReactDOM.render(
  // <Hello library="lib_value1" number={10} />,
  // <PractisingHello propsParsed="Value of props"/>,
  // <App seasons={0}/>,
  // <CheckBox/>,
  // <APP2 />,
  // <APPgit />,
  <CheckBoxWithReducer />,
  document.getElementById('root')
);
