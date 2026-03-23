import '@/features/topics/pages/topics.scss'

import Alert from '@/shared/components/alert/Alert';
import Button from '@/shared/components/button/Button';

export default function Topics() {
  return (
    <>
      <h1>React Topics</h1>
      <Alert type="info">
        This is an informational alert on the Topics page.
      </Alert>
      <Button>
        This is an informational alert on the Topics page.
      </Button>
    </>
  )
}