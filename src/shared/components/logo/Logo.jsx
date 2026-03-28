import ReactLogo from '@/assets/react.svg';
import '@/shared/components/logo/logo.scss'

function Logo() {
  return (
    <div className='c-logo'>
      <img src={ReactLogo} alt="React Logo" className='c-logo__react-image' />
      <span className='c-logo__text-react'>React</span>
      <span className='c-logo__lab'>Lab</span>
    </div>
  );
}

export default Logo;