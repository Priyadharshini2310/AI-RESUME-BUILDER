import { createContext, useContext, useState } from 'react';

const TemplateContext = createContext();

export const TemplateProvider = ({ children }) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState(null);

  return (
    <TemplateContext.Provider value={{ selectedTemplateId, setSelectedTemplateId }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => useContext(TemplateContext);
