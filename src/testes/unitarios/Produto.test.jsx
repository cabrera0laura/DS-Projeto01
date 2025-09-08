//Borrar comentario.

//Simular como aparecera renderiza (navegador/Chrome ...)
import { render, screen } from "@testing-library/react";
//irá executar o teste
import  {describe, expect,it } from "vitest";
import {Produto} from"../../componentes/Produto"


describe("Teste do componente Produto", () => {
//começar falando o que o usuario deve dazer sobre nome(it)
    it("Deve renderizar o nome do produto corretamente", () => {
        render(<Produto nome="Chuteira" preco="800"/>);
                            //  screen (comparção)
        //exibir na tela            quero q aparec. o txt chuteira
        const elementoProduto = screen.getByText("Chuteira");
        //espero,element Produto 
        expect (elementoProduto).toBeInTheDocument();
    });

    it("Deve renderizar o preco do produto corretamente", () => {
        render(<Produto nome = "bola" preco="400"/>);

        const componenteProdutoComPreco = screen.getByText("R$ 400,00");
        expect (componenteProdutoComPreco).toBeInTheDocument();
    })

});

