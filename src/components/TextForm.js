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
      prop.showAlert('Text align center', 'success')
    }
    else if(myStyle.textAlign === 'center'){
      setMyStyle({
        textAlign:'right'
      })
      prop.showAlert('Text align right', 'success')
    }
    else{
      setMyStyle({
        textAlign:'left'
      })
      prop.showAlert('Text align left', 'success')
    }
  }

  const removeSpace = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    prop.showAlert('Extra Space has been removed', 'success')
  }
    
  const handleUpperCase =()=>{
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert('Text has been converted to Upper Case', 'success')
  }
  
  const handleOnChange = (event)=>{
    setText(event.target.value);
  }
  
  const handleLowerCase = () =>{
    let newText = text.toLowerCase();
    setText(newText)
    prop.showAlert('Text has been converted to Lower Case', 'success')
  }
  
  const handleClearText = ()=>{
    let newText = '';
    setText(newText)
    prop.showAlert('All text has been cleared', 'success')
  }
  
  const copyText= ()=>{
    let text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }


  return (
    <>
    <div className='container' style={{color: prop.mode==='light'?'Black':'white'}}>
        <h2>{prop.heading} </h2>
        <div className="mb-3">
        <textarea className="form-control " style={{...myStyle, backgroundColor:prop.mode==='light'?'white':'grey', color:prop.mode==='light'?'black':'white'}} value={text}  onChange= {handleOnChange}  id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpperCase} >Convert To UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowerCase} >Convert To LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearText} >To Clear Textarea</button>
        <button className="btn btn-primary mx-1" onClick={textAlign} >Change Text Align</button>
        <button className="btn btn-primary mx-1" onClick={removeSpace} >Remove Space</button>
        <button className="btn btn-primary mx-1" onClick={copyText} >Copy All</button>
    </div>
    <div className="container my-2" style={{color: prop.mode==='light'?'black':'white'}} >
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words, and {text.length} characters</p>
      <p>{0.005 * text.split(" ").length} Min will take to read this paragraph</p>
      <h2>Preview:</h2>
      <p>{text.length>0?text:"Type in above text area to see preview here."}</p>
    </div>

    </>
  )
}
