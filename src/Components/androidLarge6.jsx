import React, { useState } from "react";
import "./androidLarge6.css";

function AndroidLarge6() {

  const [checkboxStates, setCheckboxStates] = useState({
    weightLoss: false,
    muscleGain: false,
    flexibility: false,
    generalFitness: false,
    eventTraining: false,
    mindfulness: false,
  });

  const handleToggle = (checkboxName) => {
    setCheckboxStates({
      ...checkboxStates,
      [checkboxName]: !checkboxStates[checkboxName],
    });
  };

  return (
    <div className="android-large-6">
      <div className="what-are-your-goals">What are your goals?</div>
      <div className="container-4">
        <div className="weight-loss">Weight Loss</div>
        <div className="group-759132">
          <input
            type="checkbox"
            id="weightLossCheckbox"
            checked={checkboxStates.weightLoss}
            onChange={() => handleToggle("weightLoss")}
          />
        </div>
      </div>
      <div className="container-1">
        <div className="muscle-gain">Muscle Gain</div>
        <div className="group-759133">
          <input
            type="checkbox"
            id="muscleGainCheckbox"
            checked={checkboxStates.muscleGain}
            onChange={() => handleToggle("muscleGain")}
          />
        </div>
      </div>
      <div className="container-5">
        <div className="flexibility-and-mobility">Flexibility and Mobility</div>
        <div className="group-759134">
          <input
            type="checkbox"
            id="flexibilityCheckbox"
            checked={checkboxStates.flexibility}
            onChange={() => handleToggle("flexibility")}
          />
        </div>
      </div>
      <div className="container">
        <div className="general-fitness">General Fitness</div>
        <div className="group-759135">
          <input
            type="checkbox"
            id="generalFitnessCheckbox"
            checked={checkboxStates.generalFitness}
            onChange={() => handleToggle("generalFitness")}
          />
        </div>
      </div>
      <div className="container-6">
        <div className="event-specific-training">Event - specific training</div>
        <div className="group-759136">
          <input
            type="checkbox"
            id="eventTrainingCheckbox"
            checked={checkboxStates.eventTraining}
            onChange={() => handleToggle("eventTraining")}
          />
        </div>
      </div>
      <div className="container-3">
        <div className="mindfulness-and-mental-health">
          Mindfulness and Mental Health
        </div>
        <div className="group-759137">
          <input
            type="checkbox"
            id="mindfulnessCheckbox"
            checked={checkboxStates.mindfulness}
            onChange={() => handleToggle("mindfulness")}
          />
        </div>
      </div>
      <div className="container-2">
        <span className="confirm">Confirm</span>
      </div>
    </div>
  );
}

export default AndroidLarge6;
