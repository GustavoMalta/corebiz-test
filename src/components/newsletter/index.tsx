import React, { useState } from 'react';
import { Button, Input, TextField } from '@material-ui/core';

import './styles.css';
import api from '../../services/api';

interface INewsletter {
  name: string;
  email: string;
}

function Newsletter() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [sendSuccess, setSendSuccess] = useState<boolean>(false);

  function handleSubmit() {
    console.log({ name, email });
    // validar dados
    const data = {
      name,
      email,
    };
    api
      .post('/newsletter', data)
      .then((res) => {
        console.log(res);
        setSendSuccess(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <div className="newsletter-text">
          <h3>Participe de nossas news com promoções e novidades!</h3>
        </div>
        <form className="newsletter-inputs">
          <Input
            name="name"
            className="newsletter-input"
            disableUnderline
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            error
            required
          />
          <Input
            name="email"
            className="newsletter-input"
            disableUnderline
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <Button onClick={handleSubmit} className="newsletter-button">
            Eu quero!
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
