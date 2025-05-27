// context/PersonalDataContext.js
'use client';
import { createContext, useContext } from 'react';

export const PersonalDataContext = createContext(null);

export const usePersonalData = () => useContext(PersonalDataContext);
