import React, { useState } from "react";


const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

const SpellCheckApp = () =>  {
  
    const [state, setState] = useState({
      inputText: "",
      suggestedText: "",
    });
  

  const handleInputChange = (e) => {
    const text = e.target.value;
    setState({...state, inputText: text });

    
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );
    setState({...state, suggestedText: firstCorrection || "" });
  };

  
    return (
      <div>
        <h1>Spell Check and Auto-Correction</h1>
        <textarea
          value={this.state.inputText}
          onChange={this.handleInputChange}
          placeholder="Enter text..."
          rows={5}
          cols={40}
        />
        {state.suggestedText && (
          <p>
            Did you mean: <strong>{state.suggestedText}</strong>?
          </p>
        )}
      </div>
    );
  
}

export default SpellCheckApp;
