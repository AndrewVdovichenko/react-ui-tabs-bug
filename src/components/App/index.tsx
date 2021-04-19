import React, { useState } from 'react';
import { Tabs } from '@skbkontur/react-ui';

const App = () => {
  const [activeTab, setActiveTab] = useState('filters');

  return (
    <>
      <h1>React UI tabs bug</h1>
      <Tabs
          value={activeTab}
          vertical={true}
          onValueChange={(tab) => setActiveTab(tab)}
        >
          <Tabs.Tab id="crop">
            <img src="/svg/crop.svg" alt="Crop icon"/>
            <h3 className="hidden">Crop</h3>
          </Tabs.Tab>
          <Tabs.Tab id="rotate">
            <img src="/svg/rotate.svg" alt="Rotate icon"/>
            <h3 className="hidden">Rotate</h3>
          </Tabs.Tab>
          <Tabs.Tab id="text">
            <img src="/svg/text.svg" alt="Text icon"/>
            <h3 className="hidden">Text</h3>
          </Tabs.Tab>
          <Tabs.Tab id="filters">
            <img src="/svg/filters.svg" alt="Filters icon"/>
            <h3 className="hidden">Filters</h3>
          </Tabs.Tab>
          <Tabs.Tab id="collage">
            <img src="/svg/collage.svg" alt="Collage icon"/>
            <h3 className="hidden">Collage</h3>
          </Tabs.Tab>
          <Tabs.Tab id="frames">
            <img src="/svg/frames.svg" alt="Frames icon"/>
            <h3 className="hidden">Frames</h3>
          </Tabs.Tab>
          <Tabs.Tab id="stickers">
            <img src="/svg/stickers.svg" alt="Stickers icon"/>
            <h3 className="hidden">Stickers</h3>
          </Tabs.Tab>
        </Tabs>
    </>
  );
};

export default App;
