import  React from 'react';
import './App.css';
import logoIrby from '../src/assets/images/irbi logo 1.jpg';
import slider1 from '../src/assets/images/IMG_20201030_132732_229 1.png';
import slider2 from '../src/assets/images/IMG_20201030_132705_415 1.png';
import arrowLeft from '../src/assets/svg/Arrow 2.svg';
import arrowRight from '../src/assets/svg/Arrow 1.svg';
import benefits1 from '../src/assets/images/IMG_20200930_160517_806 1.png';
import benefits2 from '../src/assets/images/Mask Group.png';
import benefits3 from '../src/assets/images/IMG_20201002_231928_709 1.png';
import logoIrbySecond from '../src/assets/images/irbi logo 2.png';
import slider31 from '../src/assets/images/1.png';
import slider32 from '../src/assets/images/2.png';
import slider33 from '../src/assets/images/3.png';
import slider34 from '../src/assets/images/4.png';
import deliveryImg from '../src/assets/images/hadat.png';
import deliveryImg2 from '../src/assets/images/La Sultane de Saba.png';
import paymentImg from '../src/assets/images/La Sultane de Saba1.png';
import contactUsImg1 from '../src/assets/images/ContactUsImg1.png';
import contactUsImg2 from '../src/assets/images/ContactUsImg2.png';
import telegram from '../src/assets/images/telegramm.png';
import viber from '../src/assets/images/watsapp.png';
import instagram from '../src/assets/images/instagramm.png';


function App() {
  return (
    <div className="App">
      <div className='first'>
            <div className='sliderFirst'>
                <img alt='slider' src={slider1} />
            </div>
            <div className='header'>
              <div className='headLeft'>
                 { <img className='logoIrby' alt='Logo Irby' src={logoIrby} />}
                  <ul className='navButtons'>
                    <li>Оплата и доставка</li>
                    <li>Каталог</li>
                    <li>Контакты</li>
                  </ul>
                  <div className='headRight'>8(029)293-92-93</div>
              </div>
            </div>
            <div className='tradeOffer'>
                  <h1>Европейское качество,<br/>натуральный уход</h1>
                  <p>Оригинальная профессиональная косметика от европейских производителей для красоты вашего тела и волос</p>
                  <button>Перейти в каталог</button>
            </div>
            <div className='socialContact'>
                <a href='https://www.instagram.com/' target='blanc'>Instagram</a>
                <a href='https://www.viber.com/ru/' target='blanc'>Viber</a>
                <a href='https://web.telegram.org/k/' target='blanc'>Telegram</a>
            </div>
      </div>
      <div className='second'>
          <img className='sliderSecond' src={slider2} alt='slider' />
          <div className='aboutUs'>
              <div className='aboutUstext'>
                  <h2>IRBI — ваш проводник<br /><span> в мир красоты</span></h2>
                  <p>Премиальный уход от лучших европейских производителей стал ещё доступнее</p>
                  <p>Мы рады представить вам бренды, которые содают не просто профессиональный уход, но и заботятся о натуральности и безопасности компонентов для вас и окружающей среды</p>
                  <p>Насладитесь качеством продукции и быстрым результатом с HADAT, La Sultane de Saba и другими европейскими брендами</p>
                  <button>Перейти в каталог</button>
                  <div className='navButtonSlideSecond'>
                      <img src={arrowLeft} alt="ArrowLeft" />
                      <img src={arrowRight} alt="ArrowRight" />
                  </div>
              </div>
          </div>
      </div>
      <div className='third'>
          <div className='benefits1'>
              <div>
                  <p>Больше,<span>чем просто <br/>косметика</span></p>
              </div>
              <div><img src={benefits1} alt='Benefits' /></div>
          </div>
          <div className='benefits2'>
              <div><img src={benefits2} alt='Benefits' /></div>
              <div>
                  <h3>Натуральный состав</h3>
                  <p>Косметика не содержит синтетических <br />красителей и не тестируется <br />на животных</p>
              </div>
          </div>
          <div className='benefits3'>
              
                  <h3>Европейское качество</h3>
                  <p>Вся продукция сертифицирована<br /> и соответствует международным<br /> стандартами гигиены и качества</p>
                  <h3>Индивидуальный подход</h3>
                  <p>Мы бесплатно проконсультируем<br /> и подберём средство, которое подходит<br /> именно вам</p>
              
                 <img src={benefits3} alt='Benefits' />
              
          </div>
      </div> 
      <div className='fourth'>
        <div className='bestsellers'>
            <h2>Бестселлеры</h2>
            <p>Только лучшая уходовая косметика<br /> по уходу за вашей кожей и волосами.<br /> Больше продукции в нашем каталоге</p>
            <button>Перейти в каталог</button>
            <div className='navButtonThird'>
                      <img src={arrowLeft} alt="ArrowLeft" />
                      <img src={arrowRight} alt="ArrowRight" />
            </div>
        </div>
        <div className='sliderThird'>
            <div className='component1'>      
                <img alt='slider' src={slider31} />
                <div className='componentsAbout'>
                    <h3>Orange blossom</h3>
                    <p>La Sultane de Saba, лосьон для тела</p>
                </div>
            </div>
            <div className='component2'>      
                <img alt='slider' src={slider32} />
                <div className='componentsAbout'>
                    <h3>Крем невесты</h3>
                    <p>La Sultane de Saba, BB крем</p>
                </div>
            </div>
            <div className='component3'>      
                <img alt='slider' src={slider33} />
                <div className='componentsAbout'>
                    <h3>Hydro Nourishing Conditioner</h3>
                    <p>HADAT, кондиционер для волос</p>
                </div>
            </div>
            <div className='component4'>      
                <img alt='slider' src={slider34} />
                <div className='componentsAbout'>
                    <h3>SILK PROTEINS SCRUB Orange blossom</h3>
                    <p>La Sultane de Saba, лосьон для тела</p>
                </div>
            </div>  
        </div>
      </div>
      <div className='fird'>
        <img alt='deliveryImg' src={deliveryImg} className='deliveryImg'/>
        <div className='deliveryPay'>
            <div className='delivery'>
                <div>        
                    <h2>Доставка</h2>
                    <p><span>Доставка для жителей Минска и Бреста:</span><br /> курьером до двери, стоимость 5 р</p>
                    <p><span>Доставка для жителей других городов:</span><br /> почтой (срок доставки 2-3 дня, возможна доставка ускоренной почтой<br /> EMS — срок 1 день), стоимость доставки рассчитывается при отправке<br /> в почтовом отделении, в среднем составляет около 5 б.р.</p>
                </div>
                <img alt='delivery2' src={deliveryImg2} />
            </div>
            <div className='payment'>
                <img alt='delivery3' src={paymentImg} />
                <div>
                    <h2>Оплата</h2>
                    <p>Мы принимаем оплату наличными при<br /> получении товара у курьера,<br /> наложенным платежом, картой через<br /> интернет, также доступна оплата<br /> по QR коду</p>
                </div>
            </div>
        </div>
      </div>
      <div className='sixth'>
        <div className='sendMessage'>
            <img alt='maskGroup' src={contactUsImg1} className='contactUsImg1' />
            <div>
                <h3>По вопросам сотрудничества</h3>
                <div className='formInputs'>
                    <div className='inputName'>
                        <input className='clientName' placeholder='Имя' />
                        <input className='clientPhone' placeholder='Телефон'/>
                    </div>
                    <textarea className='comment' placeholder='Комментарий'/>
                </div>
                <div className='formSendButton'>
                    <button>Отправить</button>
                    <p>Отправляя сообщение вы даёте согласие<br /> на обработку указанных персональных данных</p>
                </div>
            </div>
        </div>
        <div className='contactUs'> 
            <div>
                <h2><span>Свяжитесь</span> с нами</h2>
                <div className='contactsIrby'>
                    <p>8 (029) 293-92-93</p>
                    <div className='urlContacts'>
                        <a href='https://t.me/IRBIby' target='blanc'>{<img alt='telegram' src={telegram} />}</a>
                        <a href='viber://chat?number=375292939293/' target='blanc'>{<img alt='viber' src={viber} />}</a>
                        <a href='https://www.instagram.com/irbi.by/' target='blanc'>{<img alt='instagram' src={instagram} />}</a>
                    </div>
                </div>
            </div>
            <img alt='maskGroup' src={contactUsImg2} className='contactUsImg2'/>
        </div>
      </div>
      <div className='footer'>
            <img alt='Logo Irby' src={logoIrbySecond} />
            <ul className='navButtonsFooter'>
                    <li>Оплата и доставка</li>
                    <li>Каталог</li>
                    <li>Контакты</li>
            </ul>
            <div className='footerRight'>8(029)293-92-93</div>
      </div>    
    </div>
  );
}

export default App;
