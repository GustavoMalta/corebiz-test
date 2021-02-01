import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css';
import { MdMail, MdHeadsetMic } from 'react-icons/md';
import logos from '../../assets/logos-footer.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <h3>Localização</h3>
          <hr />
          <p>
            Avenida Andrômeda, 2000. Bloco 6 e 8 <br />
            Alphavile SP <br />
            brasil@corebiz.ag <br />
            +55 11 3090 1039
          </p>
        </div>
        <div className="footer-buttons">
          <Button className="footer-button">
            <MdMail className="footer-button-icon" size={20} />
            <span>ENTRE EM CONTATO</span>
          </Button>
          <Button className="footer-button">
            <MdHeadsetMic className="footer-button-icon" size={30} />
            <span>FALE COM NOSSO CONSULTOR ONLINE</span>
          </Button>
        </div>
        <img src={logos} width={150} alt="COREBIZ" className="footer-logos" />
      </div>
    </footer>
  );
}

export default Footer;
