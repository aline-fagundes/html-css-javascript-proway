var produtos = [
  {
    descricao: "Chocolate ao leite Hersheys",
    preco: 3.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de cereja Halls",
    preco: 3.0,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha de chocolate Passatempo",
    preco: 1.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate ao leite Nestlé",
    preco: 5.5,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de cereja Freegells",
    preco: 2.5,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha de morango Passatempo",
    preco: 1.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate ao leite Lacta",
    preco: 5.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de morango Halls",
    preco: 3.0,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha ao leite Passatempo",
    preco: 1.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate meio amargo Hersheys",
    preco: 3.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de morango Freegells",
    preco: 2.5,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha de leite Nesfit",
    preco: 2.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate meio amargo Nestlé",
    preco: 5.5,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de menta Halls",
    preco: 3.0,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha de chocolate Nesfit",
    preco: 2.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate meio amargo Lacta",
    preco: 5.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de menta Freegells",
    preco: 2.5,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha de morango Nesfit",
    preco: 2.5,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate branco Hersheys",
    preco: 3.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de melancia Halls",
    preco: 3.0,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha Waffer chocolate Bauducco",
    preco: 3.0,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate branco Nestlé",
    preco: 5.5,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de melancia Freegells",
    preco: 2.5,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Bolacha Waffer morango Bauducco",
    preco: 3.0,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate branco Lacta",
    preco: 5.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de extra forte Halls",
    preco: 3.0,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Cookies chocolate Toddy",
    preco: 5.0,
    estoque: 15,
    categoria: "Bolacha",
  },

  {
    descricao: "Chocolate flocos Hersheys",
    preco: 3.0,
    estoque: 25,
    categoria: "Chocolate",
  },

  {
    descricao: "Bala de extra forte Freegells",
    preco: 2.5,
    estoque: 20,
    categoria: "Bala",
  },

  {
    descricao: "Cookies chocolate branco Toddy",
    preco: 5.0,
    estoque: 15,
    categoria: "Bolacha",
  },
];

var produtosCarrinho = [];



function exibirProdutos() {
  var txt = "";
  for (let i = 0; i < 15; i++) {
    txt += `<tr>
              <td>${produtos[i].descricao}</td>
              <td>${produtos[i].preco}</td>
              <td>${produtos[i].estoque}</td>
              <td>${produtos[i].categoria}</td>
              <td><button class="botao" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.getElementsByTagName("tbody")[0].innerHTML = txt;
}



function comprar(posicao) {
  var produto = produtos[posicao];

  if (produto.estoque > 0) {
    produto.estoque -= 1;

    if (produtosCarrinho.indexOf(produto) == -1) {
      var produtoComprado = {
        descricao: produto.descricao,
        preco: produto.preco,
        quantidade: 0,
        categoria: produto.categoria,
      };

      produtosCarrinho.push(produtoComprado);
    } else {
      var posicao = produtosCarrinho.indexOf(produto);
      produtosCarrinho[posicao].quantidade += 1;
    }
  }

  exibirProdutos();
}



//TODO: COLOCAR QUANTIDADE DE CADA PRODUTO PEDIDO E PREÇO TOTAL + EXIBIR MENSAGEM SE CARRINHO ESTÁ VAZIO!
function exibirProdutosCarrinho() {
  var txtCarrinho = "";

  if (produtosCarrinho == null) {
    txtCarrinho += `<p>Você não colocou nenhum item em seu carrinho!</p>`;
    document.querySelector("#itens-carrinho").innerHTML = txtCarrinho;
  } else {
    for (let i = 0; i < 15; i++) {
      txtCarrinho += `<table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Produto</th>
              <th scope="col">Preço R$</th>
              <th scope="col">Quantidade</th>
              <th scope="col">Marca</th>
              <th scope="col">Remover?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${produtosCarrinho[i].descricao}</td>
              <td>${produtosCarrinho[i].preco}</td>
              <td>${produtosCarrinho[i].quantidadeCarrinho}</td>
              <td>${produtosCarrinho[i].categoria}</td>
              <td><button class="botao" onclick="remover(${i})">Sim!</button></td>

            </tr>
          </tbody>
        </table>`;
    }
    document.querySelector("#itens-carrinho").innerHTML = txtCarrinho;
  }
}



//TODO: FAZER FUNÇÃO REMOVER QUE DIMINUA A QUANTIDA E, SE ZERAR, RETIRA DA TABELA O PRODUTO
function calcularTotal() {
//const precoTotal = produtosCarrinho.reduce((resultado, preco) => { return (resultado + (preco.preco * quantidadeCarrinho)); }, 0);
//console.log(precoTotal);
}



function buscar() {
  var produtoBuscado = document.querySelector("#produto-buscado").value;

  var produtosEncontrados = [];
  produtosEncontrados = produtos.filter((produto) =>
    produto.descricao.includes(produtoBuscado)
  );

  console.log(produtosEncontrados);

  var txtBusca = `<table class="table table-bordered">
                    <thead>
                    <tr>
                        <th scope="col">Resultado</th>
                    </tr>
                    </thead>
                    <tbody>`;

  if (produtosEncontrados.length == 0) {
    txtBusca += `<tr>
                    <td>Nenhum produto encontrado!</td>
                  </tr>`;
    document.querySelector("#resultado-busca").innerHTML =
      txtBusca + `</tbody></table>`;
  } else {
    for (let i = 0; i < produtosEncontrados.length; i++) {
      txtBusca += ` <tr>
                      <td>${produtosEncontrados[i].descricao}</td>
                    </tr>`;
    }
    document.querySelector("#resultado-busca").innerHTML =
      txtBusca + `</tbody></table>`;
  }
}



function exibirChocolates() {
  const chocolates = produtos.filter(
    (produto) => produto.categoria === "Chocolate"
  );

  console.log(chocolates);

  var txtChocolates = "";
  for (let i = 0; i < chocolates.length; i++) {
    txtChocolates += `<tr>
              <td>${chocolates[i].descricao}</td>
              <td>${chocolates[i].preco}</td>
              <td>${chocolates[i].estoque}</td>
              <td><button class="botao" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#chocolates").innerHTML = txtChocolates;
}



function exibirBalas() {
  const balas = produtos.filter((produto) => produto.categoria === "Bala");

  console.log(balas);

  var txtBalas = "";
  for (let i = 0; i < balas.length; i++) {
    txtBalas += `<tr>
              <td>${balas[i].descricao}</td>
              <td>${balas[i].preco}</td>
              <td>${balas[i].estoque}</td>
              <td><button class="botao" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#balas").innerHTML = txtBalas;
}



function exibirBolachas() {
  const bolachas = produtos.filter(
    (produto) => produto.categoria === "Bolacha"
  );

  console.log(bolachas);

  var txtBolachas = "";
  for (let i = 0; i < bolachas.length; i++) {
    txtBolachas += `<tr>
              <td>${bolachas[i].descricao}</td>
              <td>${bolachas[i].preco}</td>
              <td>${bolachas[i].estoque}</td>
              <td><button class="botao" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#bolachas").innerHTML = txtBolachas;
}
