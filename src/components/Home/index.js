import './home.css'
import image from '../../assets/Logo 1 1.png'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai"

export default function Home(){
  return(
    
    <main>
      <div className='container'>
        <div>
          <h1>Hi, <br/> I'm Caio, <br/>full stack developer.</h1>
          <p className='subtitle'>Font-end developer / Back-end developer / Mobile developer</p>

          <div className='areaButton'>
              <button>
                <a className='buttonLink' href="https://wa.me/5518997165121?text=Ol%C3%A1!%20Em%20que%20posso%20ajudar?" target='_blank' rel="noreferrer">
                  <p>I need a job</p>
                </a>
              </button>

              <button>
                <a className='buttonLink' href="https://wa.me/5518997165121?text=Ol%C3%A1!%20Em%20que%20posso%20ajudar?" target='_blank' rel="noreferrer">
                  <p>I'm looking to hire</p>
                </a>
              </button>
          </div>
        </div>
        
        <div className='buttonsArea'>
          <img src={image} alt='logo-portifolio'/>
        </div>
      </div>

      <div className='iconsArea'>

          <a className='icons' href="https://github.com/Caio-dev00" target='_blank' rel="noreferrer">
            <AiFillGithub color='#FFF' size={35}/>
            <p>GitHub</p>
          </a>

          <a className='icons' href="https://www.linkedin.com/in/devcaiomarques/" target='_blank' rel="noreferrer" >
            <AiFillLinkedin color='#FFF' size={35}/>
            <p>Linkedin</p>
          </a>

          <a className='icons' href="https://www.instagram.com/marqs_dev/" target='_blank' rel="noreferrer">
          <AiFillInstagram color='#FFF' size={35} />
          <p>Instagram</p>
          </a>

      </div>
    </main>
    
  )
}