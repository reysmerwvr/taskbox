import React from 'react';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        title="Harry Robinson"
        subtitle="Online | 14h"
        // style={{maxHeight: '52px', maxWidth: '180px'}}
      />
    </div>
  );
}

export default App;
