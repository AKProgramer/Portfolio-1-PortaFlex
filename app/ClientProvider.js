'use client';
import { PersonalDataContext } from './context/PersonalDataContext';
import { PortfolioDataContext } from './context/PortfolioDataContext';

export default function ClientProvider({ children, personalData, portfolioData }) {
  return (
    <PersonalDataContext.Provider value={personalData}>
      <PortfolioDataContext.Provider value={portfolioData}>
        {children}
      </PortfolioDataContext.Provider>
    </PersonalDataContext.Provider>
  );
}
