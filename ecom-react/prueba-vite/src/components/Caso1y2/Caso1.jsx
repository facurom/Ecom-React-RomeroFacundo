import { useState } from "react";



function Select({ options, onSelect, defaultOption=1 }) {

    return (
  
      <select 
        onChange={(evt) => onSelect(Number(evt.target.value))}
      >
        {/* <options value={defaultOption} />
        <options value={defaultOption} /> */}
        {/* <options value={defaultOption} /> */}
        {
          options.map((val) => (
              <option value={val.value}>{val.text}</option>
          ))
        }
  
      </select>
  
    );
  }
  
  const options = [
      { value: 1, text: "250 ml" },
      { value: 2, text: "500 ml" },
      
      // { value: 3, text: "Verde" }
    ];
  
   {
    
    const [option, setOption] = useState(1);
  
      function onAdd(value) {
          setOption(value);
          //console.log(value)
      }
        
      return (
          <>
              
  
              <Select 
                  options={options} 
                  onSelect={onAdd} 
                  defaultOption={option} 
              />        
          </>
      );
  }