import React, {useState} from 'react'

export default function TextForm(props) {
    let vowelCount = 0;
    let consonantCount = 0;
    let handleUppercaseClick = ()=>{
        let uppercaseText = text.toUpperCase();
        setText(uppercaseText);
    }
    let handleLowercaseClick = ()=>{
        let lowercaseText = text.toLowerCase();
        setText(lowercaseText);
    }
    let handleClearClick = ()=>{
        setText("");
    }
    let handleExtraSpacesClick = ()=>{
        let noExtraSpaces = text.split(/[ ]+/);
        setText(noExtraSpaces.join(" "));
    }
    let handleReadTextClick = ()=>{
        let readText = new SpeechSynthesisUtterance();
        let voices = window.speechSynthesis.getVoices();
        readText.text = text;
        readText.rate = 1.5;
        readText.voice = voices[2];
        window.speechSynthesis.speak(readText);
    }
    let handleCapitalization = ()=>{
        let capitalizeText = text.split(" ");
        for(let i =0;i<capitalizeText.length;i++){
            capitalizeText[i] = capitalizeText[i].charAt(0).toUpperCase()+capitalizeText[i].slice(1);
        }
        setText(capitalizeText.join(" "));
    }
    let handleTextareaClick = ()=>{
        if(text === "Enter text here"){
            setText("");
        }
    }
    let handleOnChange = (event)=>{
        setText(event.target.value);
        
    }
    const [text, setText] = useState("Enter text here");
    let wordCount = text.split(" ").length;
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleOnChange} onClick={handleTextareaClick}></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUppercaseClick}>
                Convert to Uppercase
            </button>
            <button className="btn btn-success mx-1" onClick={handleLowercaseClick}>
                Convert to Lowercase
            </button>
            <button className="btn btn-success mx-1" onClick={handleExtraSpacesClick}>
                Remove extra spaces
            </button>
            <button className="btn btn-success mx-1" onClick={handleReadTextClick}>
                Read Text
            </button>
            <button className="btn btn-success mx-1" onClick={handleCapitalization}>
                Capitalize Text
            </button>
            <button className="btn btn-danger mx-2" onClick={handleClearClick}>
                Clear Text
            </button>
        </div>
        <div className="container my-5">
            <h1>
                Your Text summary:
            </h1>
            <p>
                {wordCount} word(s), {text.length} character(s)
            </p>
            <p>
                Reading time: {(0.008*wordCount).toFixed(2)} minutes
            </p>
            <p>
                Number of vowels: {vowelCount}
            </p>
            <p>
                Number of consonants: {consonantCount}
            </p>
        </div>
        </>
    )
}
