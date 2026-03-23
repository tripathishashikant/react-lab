import { useState } from 'react'
import '@/shared/components/tabs/tabs.scss'

import Button from "@/shared/components/Button";

export default function Tabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="c-tabs">
      <div className="c-tabs__header">
        {tabs.map((tab, index) => (
          <Button
            key={index}
            className={`c-tabs__tab ${index === activeTab ? 'is-active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </Button>
        ))}
      </div>
      <div className="c-tabs__content">
        {tabs[activeTab].content}
      </div>
    </div>
  )
}