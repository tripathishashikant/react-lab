import { Link } from 'react-router-dom'
import { FaRegSadCry } from 'react-icons/fa'

import Button from '@/shared/components/button/Button'

import '@/features/notFound/pages/notFoundPage.scss'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <FaRegSadCry size={100} />
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">
        <Button>Go to Homepage</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage

