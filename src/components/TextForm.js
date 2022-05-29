import React, {useState} from 'react'

export default function TextForm(prop) {
  const [text, setText] = useState("Enter text here");
  

  const [myStyle, setMyStyle] = useState({
    textAlign:'left'
  })
  const textAlign = ()=>{
    if(myStyle.textAlign === 'left'){
      setMyStyle({
        textAlign: 'center'
      })
    }
    else if(myStyle.textAlign === 'center'){
      setMyStyle({
        textAlign:'right'
      })
    }
    else{
      setMyStyle({
        textAlign:'left'
        
      })
    }
  }

  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    console.log("working rm")
  }
    
  const handleUpperCase =()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  
  const handleOnChange = (event)=>{
    console.log("handling on change....");
    setText(event.target.value);
  }
  
  const handleLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  
  const handleClearText = ()=>{
    let newText = '';
    setText(newText)
  }
  

  return (
    <>
    <div className='container'>
        <h2>{prop.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control " style={myStyle} value={text}  onChange= {handleOnChange}  id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText} >To Clear Textarea</button>
        <button className="btn btn-primary mx-1" onClick={textAlign} >Change Text Align</button>
        <button className="btn btn-primary mx-1" onClick={removeSpace} >Remove Space</button>
    </div>
    <div className="container my-2" >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, and {text.length} characters</p>
      <p>{0.005 * text.split(" ").length} Min will take to read this paragraph</p>
      <h2>Preview:</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
