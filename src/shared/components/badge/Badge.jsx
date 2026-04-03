import { FaThermometerEmpty, FaThermometerHalf, FaThermometerFull } from 'react-icons/fa';

function Badge({ difficulty }) {
  switch (difficulty.toLowerCase()) {
    case 'easy': return <FaThermometerEmpty className="c-badge__icon--easy" title={difficulty} />;
    case 'medium': return <FaThermometerHalf className="c-badge__icon--medium" title={difficulty} />;
    case 'difficult': return <FaThermometerFull className="c-badge__icon--difficult" title={difficulty} />;
    default: return null;
  }
}

export default Badge
