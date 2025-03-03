import React, { useEffect, useState } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () =>  {
  
    const [input, setInput] = useState({inputText: "", suggestedText: ""});
  

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInput({...input, inputText:text});
  }

    
  useEffect(() => {


    const words = input.inputText.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setInput({...input, suggestedText: firstCorrection || "" });

  }, [input.inputText])
  

  
    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={input.inputText}
          onChange={(e) => {handleInputChange(e)}}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {input.suggestedText && (
          <p>
            Did you mean: <strong>{input.suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  
}

export default SpellCheckApp;
