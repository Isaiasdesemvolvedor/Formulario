import React from 'react';
import './App.css';
import { useState } from 'react';




function App() {

  return (
<body> 
<div className="container">
  <h1>Formulário de Contato</h1>

  <form id="contact-form" method='POST' action="https://formsubmit.co/isaiasnovaera@gmail.com">
    <label htmlFor="name">Nome:</label>
    <input type="text" id="name" name="name" required />
    <label htmlFor="idade">Idade:</label>
    <input type="number" id="idade" name="idade" required />
    <label htmlFor="email">Gmail</label>
    <input type="email" id="email"/> 
    <label htmlFor="message">Texto:</label>
    <input type="hidden" name="_next" value="https://isaiasdesemvolvedor.github.io/thanks/"/>
    <textarea  id="message"
      name="message"
      rows={4}
      placeholder="Esse formulário será enviado para o email:isaiasnovara@gmail.com"/>
    <button type="submit" >Enviar</button>
  </form>
  
</div>
</body>
 )
 }


export default App;
