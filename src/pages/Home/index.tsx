import React, { useEffect, useState } from 'react';
import './styles.css';
import api from '../../services/api'
import bannerBackground from '../../assets/banner-background.svg'
import bannerimage from '../../images/banner-image1.png'
import { Rating }from '@material-ui/lab';

import Header, { Cart } from '../../components/header'
import Footer from '../../components/footer';
import Newsletter from '../../components/newsletter';
import Carousel from 'react-material-ui-carousel'
import MultCarousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { Button } from '@material-ui/core';
import {FiStar} from 'react-icons/fi'

export interface Product {
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
  
  const [products, setProducts] = useState<Product[]>(new Array<Product>())
  const [add, setAdd] = useState<boolean>(false)

  useEffect(()=>{
    api.get(`/products`).then(res=>{
      setProducts(res.data);       
    }).catch(err=>{
      setProducts(new Array<Product>())
    })
  },[])

  function monetize (value:string|number){
    value = String(value)
    return  value.slice(0,value.length-2)+','+value.substring(value.length - 2);
  }
  function handeleCart(data:Product){
    let storage = localStorage.getItem('@Corebiz/cart');

    let dataCart:Cart[] = []
    if (storage){
      dataCart = JSON.parse(storage.toString())
    }
      dataCart.push({quantity:1, productId:data.productId, name:data.productName})
      localStorage.setItem('@Corebiz/cart', JSON.stringify(dataCart));
    
    
    if(add){setAdd(false)}else { setAdd(true)}
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
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
    <Header handleCartTotal={add}/>
    <div className="body-content">
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
              {products.map(product => {
                return(
                <div className="card" key={product.productId}>
                  <img className='product-image' src={product.imageUrl} alt="COREBIZ"/>
                  <div className="card-content">
                    <p className="card-content-title">{product.productName}</p>
                    <div className="card-content-rate"> 
                      <Rating                       
                        readOnly={true}
                        icon={<FiStar size={12} color='#F8475F' fill='#F8475F'/>}
                        emptyIcon={<FiStar  size={12}  color='#F8475F'/>}
                        value={product.stars}
                      />
                    </div>
                    {product.listPrice?
                      <h5 className="card-content-value">De R${monetize(product.listPrice)}</h5>
                  :
                  <h5 className="card-content-value"  ><br/></h5>
                  }
                    <h3 className="card-content-value">Por R${monetize(product.price)}</h3>
                  
                      {product.installments.length>0?
                        <p className="card-content-instalments">
                          ou em {product.installments[0].quantity}x
                          de R${monetize(product.installments[0].value)}
                        </p>
                      : 
                      <p className="card-content-instalments"><br/></p>
                      }
                    <Button 
                      className="card-content-button" 
                      onClick={()=>{handeleCart(product)}}
                    >
                      Comprar
                    </Button>
                  </div>
                </div> 
                )
              }
              )}
                     
            </MultCarousel>    
            </div>
          </div>
        </div>
        <Newsletter/>
    <Footer/>
  </>
     
  );
}

export default App;
