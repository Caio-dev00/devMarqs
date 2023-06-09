import image from '../../assets/Logo 2.svg';
import './header.css';

export default function Header() {
  return (
    <header>
          <a href='/'><img src={image} alt='Logo Header' /></a>

        <div>
          <a className='link' href="https://www.behance.net/marques_Ch" target='_blank' rel="noreferrer">Jobs</a>
          <a className='link' href="https://wa.me/5518997165121?text=Ol%C3%A1!%20Em%20que%20posso%20ajudar?" target='_blank' rel="noreferrer">Contact</a>
          <a className='link' href="https://github.com/Caio-dev00" target='_blank' rel="noreferrer">Github</a>
        </div>
    </header>
  )
}