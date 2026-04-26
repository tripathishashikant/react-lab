import Tabs from '@/shared/components/tabs/Tabs';
import TabItem from '@/shared/components/tabs/TabItem';

export const tabsRegistry = {
  id: 'tabs',
  title: 'Tabs',
  description: 'Tabs organize content into separate views that users can navigate between.',
  usage: 'Use tabs to group related content and allow users to switch between them without leaving the page context.',
  props: [
    {
      name: 'children',
      type: 'TabItem[]',
      defaultValue: '[]',
      description: 'A collection of TabItem components.'
    }
  ],
  subComponents: [
    {
      name: 'TabItem',
      description: 'A wrapper for the content of an individual tab.',
      props: [
        {
          name: 'title',
          type: 'string',
          defaultValue: '""',
          description: 'The label displayed in the tab header.'
        }
      ]
    }
  ],
  examples: [
    {
      name: 'Basic Tabs',
      description: 'Standard tab navigation.',
      render: () => (
        <Tabs>
          <TabItem title="Tab 1">
            <div style={{ padding: '1rem' }}>Content for Tab 1</div>
          </TabItem>
          <TabItem title="Tab 2">
            <div style={{ padding: '1rem' }}>Content for Tab 2</div>
          </TabItem>
          <TabItem title="Tab 3">
            <div style={{ padding: '1rem' }}>Content for Tab 3</div>
          </TabItem>
        </Tabs>
      ),
      code: `<Tabs>
  <TabItem title="Tab 1">Content 1</TabItem>
  <TabItem title="Tab 2">Content 2</TabItem>
</Tabs>`
    }
  ]
};
