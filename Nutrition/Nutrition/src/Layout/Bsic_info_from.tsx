import React,{useState} from "react";

const Basic:React.FC=()=>

{  const [goal, setGoal] = useState<string>("");
    const [targetWeight, setTargetWeight] = useState<number | "">("");
  
    const handleGoalChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setGoal(event.target.value);
    };
  
    return (
        <div className="basicfomall">
      <div className="container .bsicfom shadow-lg">
        <h2 className="title bascitle">Your Body Type</h2>
        <form className="form bsicfombody">
          <label className="label">Gender:</label>
          <select className="input">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          
          <label className="label">Born:</label>
          <input type="date" className="input" />
          
          <label className="label">Height (CM):</label>
          <input type="number" placeholder="Height in CM" className="input" />
          
          <label className="label">Weight (KG):</label>
          <input type="number" placeholder="Weight in KG" className="input" />
          
          <label className="label">Goal:</label>
          <select
            id="goalSelect"
            value={goal}
            onChange={handleGoalChange}
            className="input"
          >
            <option value="Athelic body">Athletic body</option>
            <option value="Weight loss">Weight loss</option>
            <option value="Weight gain">Weight gain</option>
            <option value="Healthy body">Healthy body</option>
          </select>
  
          {(goal === "Weight loss" || goal === "Weight gain") && (
            <div className="hideninput">
              <label className="label">Target Weight (KG):</label>
              <input
                type="number"
                id="targetWeight"
                placeholder="Enter target weight"
                value={targetWeight}
                onChange={(e) => setTargetWeight(Number(e.target.value) || "")}
                className="input"
              />
            </div>
          )}
          
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      </div>
    );
  };
  
  
export default Basic;