import { FaThermometerEmpty, FaThermometerHalf, FaThermometerFull } from 'react-icons/fa';

function Badge({ level }) {
  switch (level.toLowerCase()) {
    case 'easy': return <FaThermometerEmpty className="c-badge__icon--easy" title={level} />;
    case 'medium': return <FaThermometerHalf className="c-badge__icon--medium" title={level} />;
    case 'difficult': return <FaThermometerFull className="c-badge__icon--difficult" title={level} />;
    default: return null;
  }
}

export default Badge
