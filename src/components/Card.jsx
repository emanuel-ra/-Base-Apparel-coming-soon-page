import { useState, useEffect } from 'react'
import logo from  '../../images/logo.svg'
import icon_arrow from  '../../images/icon-arrow.svg'
import hero_desktop from  '../../images/hero-desktop.jpg'
import hero_mobile from  '../../images/hero-mobile.jpg'
import bg_pattern from  '../../images/bg-pattern-desktop.svg'
import icon_error from  '../../images/icon-error.svg'

function Card() {

  const [valid_email, setValid_email] = useState(true);

  const validEmail = () => {
    let re = /\S+@\S+\.\S+/;
    let input = document.getElementById('email');
    if(input.value==""){return false;}
    console.log(re.test(input.value))
    setValid_email(re.test(input.value));
  }


  useEffect(()=>{
    setTimeout(() => {
      document.getElementById('card').classList.remove('scale-0');
    }, 100);    
    
  },[]);

  return (
    <>
      <article id='card' className='card transition ease-in-out duration-[0.8s] transform animate-[slideIn_4s_ease] scale-0 lg:bg-[url("../../images/bg-pattern-desktop.svg")] '>
        
        <section className="card-header">
          <img src={logo} alt="Base Apparel" />
        </section>

        <section className="card-image">
          <picture>
            <source media="(max-width:375px)" srcSet={hero_mobile} />
            <img src={hero_desktop} alt="Hero" />
          </picture>
        </section>

        <section className="card-info">
          
          <h1 className="text-8xl text-desaturated-red font-light">We're</h1>
          <h2 className="text-8xl text-dark-grayish-red">coming soon</h2>

          <blockquote className="paragraph mt-5">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</blockquote>

          <div className="form-group ">
              <div className='w-full flex relative'>
                <input type="text" id='email' className={`form-input  ${valid_email ? "":"error"} `} placeholder="Email Address" />
                <img src={icon_error} alt="error" className={`relative right-32 top-3 h-6 ${valid_email ? "opacity-0":""} `} />
                <button className="btn" onClick={validEmail}>
                  <img src={icon_arrow} alt="Icon Arrow" />
                </button>
              </div>
              <span className={`w-full mt-5 ml-0 lg:ml-5 lg:mt-2 text-desaturated-red ${valid_email ? "opacity-0":""} `}>Please provide a valid emai</span>
          </div>

        </section>

       
      </article>     
    </>
  )
}

export default Card