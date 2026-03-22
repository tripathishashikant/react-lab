import ReactLogo from '@/assets/react.svg';
import ReactLabLogo from '@/assets/react-lab.svg';

const Logo = () => {
  return (
    <div className="c-logo">
      <img src={ReactLogo} alt="React Logo" className="c-logo__react" />
      <img src={ReactLabLogo} alt="React Lab Logo" className="c-logo__lab" />
    </div>
  );
};

export default Logo;
