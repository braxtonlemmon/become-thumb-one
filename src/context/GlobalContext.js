import React, { useState } from 'react';

export const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [name, setName] = useState('Braxton');
  const [requiredReadingDone, setRequiredReadingDone] = useState(false);
  const [hearingTestDone, setHearingTestDone] = useState(false);
  const [clickAButtonDone, setClickAButtonDone] = useState(false);
  const [thumbSingingDone, setThumbSingingDone] = useState(false);

  return (
    <Context.Provider
      value={{
        name,
        setName,
        requiredReadingDone,
        setRequiredReadingDone,
        hearingTestDone,
        setHearingTestDone,
        clickAButtonDone,
        setClickAButtonDone,
        thumbSingingDone,
        setThumbSingingDone
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;