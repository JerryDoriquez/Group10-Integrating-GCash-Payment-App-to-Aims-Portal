import React from 'react';
import Logo from './components/logo'; 
import AccountsTab from './components/AccountsTab'; 

function App() {
  return (
    <div className="App">
      <Logo /> 
      <main>
        <AccountsTab /> 
      </main>
    </div>
  );
}

export default App;
