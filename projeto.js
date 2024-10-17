const produtos = [
    {
        "nome": "teclado redragon",
        "marca": "Marca: redragon",
        "preco":540.00,
        "desconto": "10%",
        "precoAntigo": 600.00,
        "descricao": "Teclado mecânico com switches vermelhos",
        "frete": true,
        "compras": "carrinho",
        "tags": ["teclado", "redragon"],
        "imagem":"imagens/teclado.jpg",
        "estado": false
    },
    {
        "nome": "teclado redragon",
        "marca": "Marca: redragon",
        "preco":540.00,
        "desconto": "10%",
        "precoAntigo": 600.00,
        "descricao": "Teclado mecânico com switches vermelhos",
        "frete": false,
        "compras": "carrinho",
        "tags": ["teclado", "redragon"],
        "imagem":"imagens/teclado.jpg",
        "estado": false
    },
    {
        "nome": "teclado redragon",
        "marca": "Marca: redragon",
        "preco": 600.00,
        "descricao": "Teclado mecânico com switches vermelhos",
        "frete": true,
        "compras": "carrinho",
        "tags": ["teclado", "redragon"],
        "imagem":"imagens/teclado.jpg",
        "estado": true
    },
    {
        "nome": "mouse redragon",
        "marca": "Marca: redragon",
        "preco": 300.00,
        "descricao": "Mouse redragon chroma",
        "frete": false,
        "compras": "carrinho",
        "tags": ["mouse", "redragon"],
        "imagem":"imagens/mouse.jpg",
        "estado": true
    },
    {
        "nome": "mouse redragon",
        "marca": "Marca: redragon",
        "preco": 195.00,
        "desconto": "35%",
        "precoAntigo": 300.00,
        "descricao": "Mouse redragon chroma",
        "frete": true,
        "compras": "carrinho",
        "tags": ["mouse", "redragon"],
        "imagem":"imagens/mouse.jpg",
        "estado": false
    },
    {
        "nome": "mouse redragon",
        "marca": "Marca: redragon",
        "preco": 195.00,
        "desconto": "35%",
        "precoAntigo": 300.00,
        "descricao": "Mouse redragon chroma",
        "frete": false,
        "compras": "carrinho",
        "tags": ["mouse", "redragon"],
        "imagem":"imagens/mouse.jpg",
        "estado": false
    },
    {
        "nome": "Placa de video",
        "marca": "Nvidea",
        "preco": 1700.00,
        "desconto": "15%",
        "precoAntigo": 2000.00,
        "descricao": "Placa de video Nvidea RTX3060 6GB",
        "frete": false,
        "compras": "carrinho",
       "tags": ["placa de video", "nvidea"],
        "imagem": "imagens/placaDeVideo.jpg",
        "estado": true
    },
    {
        "nome": "Placa de video",
        "marca": "Marca: Nvidea",
        "preco": 2000.00,
        "descricao": "Placa de video Nvidea RTX3060 6GB",
        "frete": false,
        "compras": "carrinho",
        "tags": ["placa de video", "nvidea"],
         "imagem": "imagens/placaDeVideo.jpg",
            "estado": true
        },
    {
        "nome": "Placa de video",
        "marca": "Marca: Nvidea",
        "preco": 1700.00,
        "desconto": "15%",
        "precoAntigo": 2000.00,
        "descricao": "Placa de video Nvidea RTX3060 6GB",
        "frete": true,
        "compras": "carrinho",
        "tags": ["placa de video", "nvidea"],
        "imagem": "imagens/placaDeVideo.jpg",
        "estado": false
    },
    {
        "nome": "Jogo Spider-man",
        "marca": "Marca: Playstation",
        "preco": 160.00,
        "desconto": "20%",
        "precoAntigo": 200.00,
        "descricao": "Jogo do Spider-man da Playstation",
        "frete": true,
        "compras": "carrinho",
        "tags": ["jogos", "Playstation"],
        "imagem": "imagens/jogoSpider.jpg",
        "estado": false
    },
    {
        "nome": "Jogo Spider-man",
        "marca": "Marca: Playstation",
        "preco": 200.00,
        "descricao": "Jogo do Spider-man da Playstation",
        "frete": false,
        "compras": "carrinho",
        "tags": ["jogos", "Playstation"],
        "imagem": "imagens/jogoSpider.jpg",
        "estado": true
    },
    {
        "nome": "Jogo Spider-man",
        "marca": "Marca: Playstation",
        "preco": 160.00,
        "desconto": "20%",
        "precoAntigo": 200.00,
        "descricao": "Jogo do Spider-man da Playstation",
        "frete": true,
        "compras": "carrinho",
        "tags": ["jogos", "Playstation"],
        "imagem": "imagens/jogoSpider.jpg",
        "estado": false
    }
];

const main = document.querySelector('main');

function exibirProdutos(produtos) {
    main.innerHTML = ''; 
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');

        let precoeDesconto = '';
        if (produto.desconto && produto.precoAntigo) {
            precoeDesconto = `<s>R$ ${produto.precoAntigo.toFixed(2)}</s> ${produto.desconto}<br>`;
        }

        let entrega = '';
        if (produto.frete === true) {
            entrega = `
                <div class="frete-gratis">
                    <p class="freteGratis">Frete Grátis</p>
                    <img src="imagens/fretegratis.png" alt="" class="imagemfrete">
                </div>`;
        }

        divProduto.innerHTML = `
            <div class="transparente">
            <img src="${produto.imagem}" alt="${produto.nome}" class="produto-imagem">
            <h1>${produto.nome}</h1>
            ${precoeDesconto}
            <strong>R$ ${produto.preco.toFixed(2)}</strong> <br>
            ${entrega}
            <p class="marca">${produto.marca}</p>
            <p class="descricao">${produto.descricao}</p>
            </div>
            <button class="carrinho">${produto.compras}</button>
        `;
        main.appendChild(divProduto);
    });
}
function toggleCheckboxpromo() {
    const checkbox = document.getElementById('checkbox-promocao');
    checkbox.checked = !checkbox.checked; 
    filtrarProdutos(); 
}
function toggleCheckboxfrete() {
    const checkbox = document.getElementById('checkbox-frete');
    checkbox.checked = !checkbox.checked; 
    filtrarProdutos(); 
}


function filtrarProdutos() {
    const estadoDeNovo = document.getElementById('novo').checked;
    const estadoDeUsado = document.getElementById('usado').checked;
    const promocaoCheckbox = document.getElementById('checkbox-promocao').checked;
    const freteCheckbox = document.getElementById('checkbox-frete').checked;
    const categoriasCheckboxes = document.querySelectorAll('.categoria-checkbox:checked');
    const marcasCheckboxes = document.querySelectorAll('.marca-checkbox:checked');
    const termoDeBusca = document.getElementById('TextoDeBusca').value.toLowerCase(); 
    const precominimo = parseFloat(document.getElementById('precomin').value);
    const precomaximo = parseFloat(document.getElementById('precomax').value);
    
    let produtosFiltrados = produtos;

    

    if (promocaoCheckbox) {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.desconto);
    }

    if (freteCheckbox) {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.frete === true);
    }

    if (estadoDeUsado) {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.estado === false);
    }
    if (estadoDeNovo) {
        produtosFiltrados = produtosFiltrados.filter(produto => produto.estado === true);
    }

    if (categoriasCheckboxes.length > 0) {
        const categoriasSelecionadas = Array.from(categoriasCheckboxes).map(checkbox => checkbox.value);
        produtosFiltrados = produtosFiltrados.filter(produto => 
            produto.tags.some(tag => categoriasSelecionadas.includes(tag))
        );
    }

    if (marcasCheckboxes.length > 0) {
        const marcasSelecionadas = Array.from(marcasCheckboxes).map(checkbox => checkbox.value);
        produtosFiltrados = produtosFiltrados.filter(produto => 
            produto.tags.some(tag => marcasSelecionadas.includes(tag))
        );
    }

    produtosFiltrados = produtosFiltrados.filter(produto => produto.preco >= precominimo && produto.preco <= precomaximo);

    produtosFiltrados = produtosFiltrados.filter(produto => 
        produto.nome.toLowerCase().includes(termoDeBusca)
    );

    exibirProdutos(produtosFiltrados);
}
document.getElementById('BotaoDeBusca').addEventListener('click', filtrarProdutos);
document.querySelectorAll('.categoria-checkbox, .marca-checkbox, #novo, #usado, #checkbox-promocao, #checkbox-frete, #precomin, #precomax').forEach(el => {
    el.addEventListener('change', filtrarProdutos);
});



document.getElementById('precomin').addEventListener('input', filtrarProdutos);
document.getElementById('precomax').addEventListener('input', filtrarProdutos);

exibirProdutos(produtos);
