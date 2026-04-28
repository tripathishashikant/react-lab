import Card from '@/shared/components/card/Card';

export const cardRegistry = {
  id: 'card',
  title: 'Card',
  description: 'A content container that groups related information and actions.',
  usage: `
    Cards are used to display content in a clear and concise format.
    They are highly versatile and can contain text, images, and other components.
  `,
  props: [
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      description: 'The title displayed at the top of the card.'
    },
    {
      name: 'children',
      type: 'ReactNode',
      defaultValue: 'undefined',
      description: 'The content to be displayed inside the card.'
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: 'undefined',
      description: 'Additional CSS classes for the card.'
    }
  ],
  examples: [
    {
      name: 'Basic Card',
      description: 'A simple card with content.',
      render: () => (
        <Card>
          <p>This is a basic card with some content inside.</p>
        </Card>
      ),
      code: `
<Card>
  <p>This is a basic card with some content inside.</p>
</Card>
      `
    },
    {
      name: 'Card with Title',
      description: 'A card that includes a header title.',
      render: () => (
        <Card title="Featured Content">
          <p>This card has a clear title to categorize the content below it.</p>
        </Card>
      ),
      code: `
<Card title="Featured Content">
  <p>This card has a clear title to categorize the content below it.</p>
</Card>
      `
    }
  ]
};
