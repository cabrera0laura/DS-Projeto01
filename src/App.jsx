import { useEffect, useState } from 'react'
import { Produto } from './componentes/Produto';

/*
function converterNumerosEmReais(numero)
{
  return "R$" + numero;
}
 Componente não esta sendo utilizado*/

function App() {
  const [numero, setNumero]  = useState(0)
  const [numeroEmReais, setNumeroEmReais] = useState("");

  
    const  converterNumerosEmReais = (valorNumero) => {
      setNumeroEmReais("R$" + valorNumero)
    }
  
    useEffect(() => {
        converterNumerosEmReais(numero)
    }, [numero]);

  return (
 <div>    
    <Produto nome="Mesa" preco="100"/>
    <Produto nome="Chuteira" preco="800"/>
    <Produto nome="Bola" preco="400"/>
    <Produto nome="Luva" preco="100"/>
    <Produto nome="Camisa" preco="50"/>
    <Produto nome="Meião" preco="20"/>

    <input 
      type="number" 
      name='valor' 
      value = {numero}  
      onChange={(evento) => setNumero(evento.target.value)} 
    />
  
    <div>
      valor recebido : {numero}
    </div>

    <div>
    Valor em reais: {numeroEmReais}

    </div>
 </div>
  )
}

export default App
