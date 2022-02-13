import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GameDeckBuildView from './views/camp/GameDeckBuildView';
import GameInventoryView from './views/camp/GameInventoryView';
import GamePartyView from './views/camp/GamePartyView';
import GameQuestSelectView from './views/camp/GameQuestSelectView';
import GameShopView from './views/camp/GameShopView';

import './App.css';
import GameStartView from './views/GameStartView';

function App() {
  return (
    <div className="combateers">
      <BrowserRouter>
        <Routes>
          { /* Home */ }
          <Route path="/" element={<GameStartView />} />

          { /* Base camp */ }
          <Route path="inventory" element={<GameInventoryView />} />
          <Route path="deck" element={<GameDeckBuildView />} />
          <Route path="shop" element={<GameShopView />} />
          <Route path="party" element={<GamePartyView />} />
    
          { /* Quests */ }
          <Route path="quest" element={<GameQuestSelectView />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
