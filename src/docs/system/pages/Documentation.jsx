import { useParams, Navigate } from 'react-router-dom';
import DocPage from '@/docs/system/components/DocPage';
import { getDocById } from '@/docs/system/registry';
import '@/docs/system/pages/docPage.scss';

export default function Documentation() {
  const { docId } = useParams();
  
  if (!docId) {
    return <Navigate to="/docs/components/button" replace />;
  }

  const registry = getDocById(docId);

  if (!registry) {
    return <div>Documentation not found for "{docId}"</div>;
  }

  return <DocPage registry={registry} />;
}
