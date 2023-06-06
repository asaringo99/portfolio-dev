import { createContext } from 'react';

const CurrentSectionContext = createContext<string | null>(null);

export default CurrentSectionContext;
