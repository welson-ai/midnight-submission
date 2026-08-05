import { useContext } from 'react';
import { PrivacyLoanContext, type PrivacyLoanAPIProvider } from '../contexts';

export const usePrivacyLoanContext = (): PrivacyLoanAPIProvider => {
  const context = useContext(PrivacyLoanContext);

  if (!context) {
    throw new Error('usePrivacyLoanContext must be used within a PrivacyLoanProvider');
  }

  return context;
};
