import React from 'react';
import Navigation from './Navigation'; 
import AccountTable from './AccountTable'; 

const AccountsTab = () => {
  const [selectedTab, setSelectedTab] = React.useState('Account');

  return (
    <div className="accounts-tab">
      <Navigation selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <main>
        {selectedTab === 'Account' && <AccountTable />}
        {/* Other tab content goes here */}
      </main>
    </div>
  );
};

export default AccountsTab;
