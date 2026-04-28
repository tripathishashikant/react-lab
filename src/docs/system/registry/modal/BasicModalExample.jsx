import { useState } from 'react';
import Modal from '@/shared/components/modal/Modal';
import Button from '@/shared/components/button/Button';

const BasicModalExample = () => {
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
};

export default BasicModalExample;
