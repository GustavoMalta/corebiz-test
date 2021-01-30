import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api'
import bannerBackground from '../../assets/banner-background.svg'
import bannerimage from '../../images/banner-image1.png'
import sapato from '../../images/image.jpg'

import Header from '../../components/header'
import Footer from '../../components/footer';
import Carousel from 'react-material-ui-carousel'
import MultCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@material-ui/core';

export interface Products {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | null;
  price: number;
  installments: Installment[];
}

export interface Installment {
  quantity: number;
  value: number;
}

function App() {
  
  const [products, setProducts] = useState<Products[]>()

  useEffect(()=>{
    api.get(`/products`).then(res=>{
      setProducts(res.data);       
    })
  },[])

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (<>
    <Header/>
    <body className="body-content">
      <div className="body-top">
        <Carousel animation='slide' swipe={true} stopAutoPlayOnHover={true} className='carousel'>
          <div>
            <img className='banner-background' src={bannerBackground} alt="COREBIZ"/>
            <img className='banner-image' src={bannerimage} alt="COREBIZ"/>
          </div>
          <div>
            <img className='banner-background' src={bannerBackground} alt="COREBIZ"/>
            <img className='banner-image' src={bannerimage} alt="COREBIZ"/>
          </div>
        </Carousel>
      </div>
        
      <div className="top-sales">
        <div className="title">
          <h3>
            Mais Vendidos
            <hr/>
          </h3>
        </div>
        <div className="top-sales-carousel">
            <MultCarousel responsive={responsive} infinite={true} autoPlay={true} className='mult-carousel'>
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>        
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>       
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>
              <div className="card">
                <img className='product-image' src={sapato} alt="COREBIZ"/>
                <div className="card-content">
                  <p className="card-content-title">Sapato</p>
                  <div className="card-content-rate">******</div>
                  <h3 className="card-content-value">Por R$99,00</h3>
                  <p className="card-content-instalments">ou em 9x de R$9,99</p>
                  <Button className="card-content-button">Comprar</Button>
                </div>
              </div>
            </MultCarousel>    
            </div>
          </div>
        </body>
    <Footer/>
  </>
     
  );
}

export default App;
