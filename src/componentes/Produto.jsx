import {useState } from "react";
import { Button } from "./Button";
import { Counter } from "./Counter";

export const Produto =({nome, preco}) => {
const [productCount, setProductCount] = useState(1);
        const converterValorEmReais = (valor) =>{

            return new Intl.NumberFormat("PT-BR",{
                style: "currency",
                currency: "BRL",
            }).format(valor);
        }

    return(
        <div>
            <h4>{nome}</h4>
            <p>{converterValorEmReais(preco)}</p>
            
            <Counter
            OnDecrement={()=>{setProductCount((prev)=> (prev > 1? prev -1:1));}} 
            onIncremente={()=>{setProductCount((prev)=> prev + 1);}}
            />

            <Button
            data-testid="add-to-cart-button"
            onClick={()=> {alert(nome + ' - '+ converterValorEmReais(preco))}}>
                Adicionar ao carrinho ({productCount} produtos)
            </Button>
        </div>
    );
};