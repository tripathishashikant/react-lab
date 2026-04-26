import { useState } from 'react';
import Modal from '@/shared/components/modal/Modal';
import Button from '@/shared/components/button/Button';

export const modalRegistry = {
  id: 'modal',
  title: 'Modal',
  description: 'Modals are overlay components used to display content that requires user interaction.',
  usage: 'Use modals for critical actions, configuration, or displaying additional information without navigating away. Includes built-in support for the Escape key to close.',
  props: [
    {
      name: 'isOpen',
      type: 'boolean',
      defaultValue: 'false',
      description: 'Whether the modal is visible.'
    },
    {
      name: 'onClose',
      type: 'function',
      defaultValue: 'undefined',
      description: 'Callback triggered when the modal should close (overlay click, Escape key, or close button).'
    },
    {
      name: 'title',
      type: 'string',
      defaultValue: 'undefined',
      description: 'The title displayed in the modal header.'
    },
    {
      name: 'footer',
      type: 'ReactNode',
      defaultValue: 'undefined',
      description: 'Optional content to display in the modal footer.'
    }
  ],
  examples: [
    {
      name: 'Basic Modal',
      description: 'A standard modal with a header, body, and footer.',
      render: () => {
        const [isOpen, setIsOpen] = useState(false);
        return (
          <>
            <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
            <Modal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              title="Example Modal"
              footer={
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                  <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
                  <Button onClick={() => setIsOpen(false)}>Confirm</Button>
                </div>
              }
            >
              <p>This is the modal body content. You can put anything here.</p>
            </Modal>
          </>
        );
      },
      code: `const [isOpen, setIsOpen] = useState(false);
<Button onClick={() => setIsOpen(true)}>Open Modal</Button>
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Example Modal"
  footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
>
  <p>Modal content</p>
</Modal>`
    }
  ]
};
