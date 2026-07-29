import React, { useState } from 'react';
import SelectType from './components/SelectType';
import WholesalerLogin from './components/WholesalerLogin';

function App() {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <div>
      {selectedType === 'wholesaler' ? (
        <WholesalerLogin onSelectType={setSelectedType} />
      ) : (
        <SelectType onSelectType={setSelectedType} />
      )}
    </div>
  );
}

export default App;