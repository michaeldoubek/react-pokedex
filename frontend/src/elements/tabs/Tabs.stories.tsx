import {useState} from 'react';
import Tabs from './Tabs';

export default {
  title: 'Tabs',
  component: Tabs,
};

const tabs = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'favorite',
    label: 'Favorite',
  },
];

export function Default() {
  const [selectedTab, setSelectedTab] = useState<string | null>(null);

  return (
    <Tabs tabs={tabs} selectedTabId={selectedTab} onChange={setSelectedTab} />
  );
}
