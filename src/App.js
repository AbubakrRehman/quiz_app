import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let quesnset=[{
    question:"What is the full form of HTML??",
    options:[
      {desc:"Hyper text mark language",answer:false},
      {desc:"High text mark language",answer:false},
      {desc:"Highend mark text language",answer:false},
      {desc:"Hyper Text Markup Language",answer:true}
    ]
  },
  {
    question:"Which one is false about C language??",
    options:[
      {desc:"It is low level language",answer:false},
      {desc:"It is procedural",answer:false},
      {desc:"It supports multi-threading",answer:true},
      {desc:"It is used in embedded system",answer:false}
    ]
  },
  {
    question:"What is the full form of HTML??",
    options:[
      {desc:"Hyper text mark language",answer:false},
      {desc:"High text mark language",answer:false},
      {desc:"Highend mark text language",answer:false},
      {desc:"Hyper Text Markup Language",answer:true}
    ]
  }


]

  const [quesnindex, setQuesnindex] = useState(0);
  const [showquesn, setShowquesn] = useState(true);
  const [score, setScore] = useState(0);


  let answerClick=(answer)=>{
    console.log(answer);
  if(quesnindex<quesnset.length-1){
    setQuesnindex((prevQuesnindex)=>{
      return prevQuesnindex+1;
  });
  }else{
    
    setShowquesn(false);
  }

  if(answer===true){
    setScore((prevScore)=>{
      return prevScore+1;
    });
  }

}


  let options_list=quesnset[quesnindex].options.map((item,index)=>{
    return <button key={index} onClick={()=>{answerClick(item.answer);}} style={{margin: "10px",width:"100%",textAlign:"center"}} type="button" className="btn btn-outline-secondary">{item.desc}</button>
  });

  
  
  return (
    <div className="d-flex justify-content-center align-items-center ">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
      { 
        showquesn?(
             <div className="row g-0">
             <div className="col-md-5 d-flex flex-column align-items-center pt-5 ps-2" >
               <p>Question {quesnindex+1}</p>
               <h4>{quesnset[quesnindex].question}</h4>
             </div>
             <div className="col-md-7">
               <div className="card-body" >
                
                {options_list}
                 
               </div>
             </div>
           </div>
        ):
        <div>
          <h1>Your score is {score} out of {quesnset.length} </h1>
          <button type="button" class="btn btn-outline-success" onClick={()=>{setQuesnindex(0);setScore(0);setShowquesn(true)}}>Restart</button>
        </div>
      }
    </div>
    </div>
  
  );
}

export default App;
