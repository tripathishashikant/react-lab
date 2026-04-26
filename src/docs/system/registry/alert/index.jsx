import Alert from '@/shared/components/alert/Alert';

export const alertRegistry = {
  id: 'alert',
  title: 'Alert',
  description: 'Alerts are used to communicate important messages to the user.',
  usage: 'Use alerts to provide feedback, warnings, or informational messages. Alerts can be persistent or dismissible.',
  props: [
    {
      name: 'variant',
      type: 'info | success | warning | error',
      defaultValue: 'info',
      description: 'The visual style and tone of the alert.'
    },
    {
      name: 'onClose',
      type: 'function',
      defaultValue: 'undefined',
      description: 'Optional callback triggered when the close button is clicked. If provided, a close button will be rendered.'
    },
    {
      name: 'className',
      type: 'string',
      defaultValue: '""',
      description: 'Additional CSS classes for custom styling.'
    }
  ],
  examples: [
    {
      name: 'Information',
      description: 'Used for neutral information.',
      render: () => <Alert variant="info">This is an informational alert.</Alert>,
      code: '<Alert variant="info">This is an informational alert.</Alert>'
    },
    {
      name: 'Success',
      description: 'Used to indicate a successful action.',
      render: () => <Alert variant="success">Your changes have been saved successfully!</Alert>,
      code: '<Alert variant="success">Your changes have been saved successfully!</Alert>'
    },
    {
      name: 'Warning',
      description: 'Used to warn the user about a potential issue.',
      render: () => <Alert variant="warning">Please review your information before proceeding.</Alert>,
      code: '<Alert variant="warning">Please review your information before proceeding.</Alert>'
    },
    {
      name: 'Error',
      description: 'Used to communicate a critical failure or error.',
      render: () => <Alert variant="error">An error occurred while processing your request.</Alert>,
      code: '<Alert variant="error">An error occurred while processing your request.</Alert>'
    },
    {
      name: 'Dismissible',
      description: 'Alerts can include a close button by providing an onClose handler.',
      render: () => <Alert variant="info" onClose={() => alert('Closed!')}>Click the X to dismiss this alert.</Alert>,
      code: '<Alert variant="info" onClose={() => handleClose()}>Dismissible alert</Alert>'
    }
  ]
};
