import React from 'react';

// Sparks effect disabled per user request. This component now returns null so
// no WebGL canvas or particle rendering occurs. Keeping the component exported
// allows pages to import it safely without changing page imports.
export default function SmallSparksBackground() {
  return null;
}
