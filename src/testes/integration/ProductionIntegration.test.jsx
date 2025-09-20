import { fireEvent, render,screen } from "@testing-library/react";
import {Produto} from "../../componentes/Produto";
import {describe, expect, it } from "vitest";

describe("Teste de integração do componente Prosuto", ()=>{
    it("deve aumentar a quantidade de produtos ao clicar +", ()=>{
        render(<Produto nome="Luva" preco="200"/>);

        const incrementButton = screen.getByTestId("increment-button");

        
        fireEvent.click(incrementButton)
        fireEvent.click(incrementButton)

        const addToCartButton = screen.getByTestId("add-to-cart-button");
        
        expect(addToCartButton).toHaveTextContent("Adicionar ao carrinho (3 produtos)");
    });
});