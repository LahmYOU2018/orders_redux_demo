/** @format */

import {useContext} from 'react';
import {TabPage} from './container/TabPage/TabPage';
import TabContentContext from './utils/TabContentContext';
import TabPanelContentContext from './utils/TabPanelContentContext';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const App = () => {
  const tabList = useContext(TabContentContext);
  const { tabPanelList } = useContext(TabPanelContentContext);

  return (
    <TabPage tabList={tabList} tabPanelContentList={tabPanelList}/>
  );
};

export default App;