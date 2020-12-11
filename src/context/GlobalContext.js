import React, { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [thumbatar, setThumbatar] = useState('');
  const [hasStarted, setStarted] = useState(false);
  const [requiredReadingDone, setRequiredReadingDone] = useState(false);
  const [hearingTestDone, setHearingTestDone] = useState(false);
  const [clickADotDone, setClickADotDone] = useState(false);
  const [thumbSingingDone, setThumbSingingDone] = useState(false);
  const [tasksDone, setTasksDone] = useState(false);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        thumbatar,
        setThumbatar,
        hasStarted, 
        setStarted,
        requiredReadingDone,
        setRequiredReadingDone,
        hearingTestDone,
        setHearingTestDone,
        clickADotDone,
        setClickADotDone,
        thumbSingingDone,
        setThumbSingingDone,
        tasksDone,
        setTasksDone
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;