import { useState, Children, isValidElement } from 'react';
import '@/shared/components/tabs/tabs.scss';
import Button from '@/shared/components/button/Button.jsx';

export default function Tabs({ children }) {
  console.log('children ', children)
  const [activeTab, setActiveTab] = useState(0);
  const tabs = Children.toArray(children).filter(child => isValidElement(child));

  return (
    <div className="c-tabs">
      <div className="c-tabs__header">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`c-tabs__tab ${index === activeTab ? 'is-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.props.title}
          </Button>
        ))}
      </div>
      <div className="c-tabs__content">
        {tabs[activeTab]}
      </div>
    </div>
  );
}