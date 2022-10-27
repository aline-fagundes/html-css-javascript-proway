const produtosIniciais = [
  {
    descricao: "CHOCOLATE AO LEITE HERSHEYS",
    preco: 3.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE CEREJA HALLS",
    preco: 3.00,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE CHOCOLATE PASSATEMPO",
    preco: 1.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE AO LEITE NESTLÉ",
    preco: 5.50,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE CEREJA FREEGELLS",
    preco: 2.50,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE MORANGO PASSATEMPO",
    preco: 1.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE AO LEITE LACTA",
    preco: 5.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MORANGO HALLS",
    preco: 3.00,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA AO LEITE PASSATEMPO",
    preco: 1.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE MEIO AMARGO HERSHEYS",
    preco: 3.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MORANGO FREEGELLS",
    preco: 2.50,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE LEITE NESFIT",
    preco: 2.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE MEIO AMARGO NESTLÉ",
    preco: 5.50,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MENTA HALLS",
    preco: 3.00,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE CHOCOLATE NESFIT",
    preco: 2.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE MEIO AMARGO LACTA",
    preco: 5.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MENTA FREEGELLS",
    preco: 2.50,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE MORANGO NESFIT",
    preco: 2.50,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE BRANCO HERSHEYS",
    preco: 3.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MELANCIA HALLS",
    preco: 3.00,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE CHOCOLATE BAUDUCCO",
    preco: 3.00,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE BRANCO NESTLÉ",
    preco: 5.50,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA DE MELANCIA FREEGELLS",
    preco: 2.50,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "BOLACHA DE MORANGO BAUDUCCO",
    preco: 3.00,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE BRANCO LACTA",
    preco: 5.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA EXTRA FORTE HALLS",
    preco: 3.00,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "COOKIES DE CHOCOLATE TODDY",
    preco: 5.00,
    estoque: 15,
    categoria: "BOLACHA",
  },

  {
    descricao: "CHOCOLATE DE FLOCOS HERSHEYS",
    preco: 3.00,
    estoque: 25,
    categoria: "CHOCOLATE",
  },

  {
    descricao: "BALA EXTRA FORTE FREEGELLS",
    preco: 2.50,
    estoque: 20,
    categoria: "BALA",
  },

  {
    descricao: "COOKIES DE CHOCOLATE MESCLADO TODDY",
    preco: 5.00,
    estoque: 15,
    categoria: "BOLACHA",
  },
];



var produtos = []; 

if (localStorage.getItem("produtos") == null) {
  produtos = produtosIniciais;
  localStorage.setItem("produtos", JSON.stringify(produtos));
}

produtos = JSON.parse(localStorage.getItem("produtos"));



var produtosCarrinho = [];

if (localStorage.getItem("produtosCarrinho")) {
  produtosCarrinho = JSON.parse(localStorage.getItem("produtosCarrinho"));
}



function embaralhaArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}



function exibirProdutosEmbaralhados() {
  embaralhaArray(produtos);
  exibirProdutos();
}



function exibirProdutos() {
  var txt = "";

  for (let i = 0; i < 15; i++) {
    txt += `<tr>
              <td>${produtos[i].descricao}</td>
              <td>${produtos[i].preco.toFixed(2)}</td>
              <td>${produtos[i].estoque}</td>
              <td>${produtos[i].categoria}</td>
              <td><button class="botao-simples" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.getElementsByTagName("tbody")[0].innerHTML = txt;
}



function exibirProdutosCarrinho() {
  var txtCarrinho = '';

  if (produtosCarrinho.length == 0) {
    txtCarrinho += `<tr>
              <td colspan="5">Você não colocou itens aqui ainda!</td>
            </tr>`;
  
  } else {
    
    for (let i = 0; i < produtosCarrinho.length; i++) {
      txtCarrinho += `<tr>
              <td>${produtosCarrinho[i].descricao}</td>
              <td>${produtosCarrinho[i].preco.toFixed(2)}</td>
              <td>${produtosCarrinho[i].quantidade}</td>
              <td><button class="botao-simples" onclick="remover(${i})">-</button></td>
            </tr>`;
    }
  }

  document.querySelector('#tb-carrinho').innerHTML = txtCarrinho;
}



function comprar(posicao) {
  const produtoSelecionado = produtos[posicao];
  const produtoEncontrado = produtosCarrinho.find((p) => p.descricao === produtoSelecionado.descricao);

  if (produtoSelecionado.estoque > 0) {
    produtoSelecionado.estoque -= 1;

    if(produtoEncontrado == null) {
      var produtoComprado = {
        descricao: produtoSelecionado.descricao,
        preco: produtoSelecionado.preco,
        quantidade: 1,
        categoria: produtoSelecionado.categoria,
      };
  
      produtosCarrinho.push(produtoComprado);
    } else {
      produtoEncontrado.quantidade++;
    }
  } else {
    alert("O produto está esgotado!")
  }

  localStorage.setItem("produtos", JSON.stringify(produtos));
  localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho));

  exibirProdutos();
}



function remover(posicao) {
  const produtoSelecionado = produtosCarrinho[posicao];
  const produtoEncontrado = produtos.find((p) => p.descricao === produtoSelecionado.descricao);

  produtoSelecionado.quantidade--;
  produtoEncontrado.estoque++;

  if(produtoSelecionado.quantidade <= 0) {
    produtosCarrinho.splice(posicao, 1);
  }

  localStorage.setItem("produtos", JSON.stringify(produtos));
  localStorage.setItem("produtosCarrinho", JSON.stringify(produtosCarrinho));

  exibirProdutosCarrinho();
}



function calcularTotal() {
  var precoTotal = produtosCarrinho.reduce((resultado, produto) => {
    return (resultado + (produto.preco * produto.quantidade)); 
    }, 0);
  document.querySelector('#preco-total').innerHTML = precoTotal.toFixed(2);
}



function buscar() {
  var produtoBuscado = document.querySelector("#produto-buscado").value;
  var produtoBuscadoCaps = produtoBuscado.toUpperCase();

  var produtosEncontrados = [];
  produtosEncontrados = produtos.filter((produto) =>
    produto.descricao.includes(produtoBuscadoCaps)
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
    (produto) => produto.categoria === "CHOCOLATE"
  );

  console.log(chocolates);

  var txtChocolates = "";
  for (let i = 0; i < chocolates.length; i++) {
    txtChocolates += `<tr>
              <td>${chocolates[i].descricao}</td>
              <td>${chocolates[i].preco.toFixed(2)}</td>
              <td>${chocolates[i].estoque}</td>
              <td><button class="botao-simples" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#chocolates").innerHTML = txtChocolates;
}



function exibirBalas() {
  const balas = produtos.filter((produto) => produto.categoria === "BALA");

  var txtBalas = "";
  for (let i = 0; i < balas.length; i++) {
    txtBalas += `<tr>
              <td>${balas[i].descricao}</td>
              <td>${balas[i].preco.toFixed(2)}</td>
              <td>${balas[i].estoque}</td>
              <td><button class="botao-simples" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#balas").innerHTML = txtBalas;
}



function exibirBolachas() {
  const bolachas = produtos.filter(
    (produto) => produto.categoria === "BOLACHA"
  );

  var txtBolachas = "";
  for (let i = 0; i < bolachas.length; i++) {
    txtBolachas += `<tr>
              <td>${bolachas[i].descricao}</td>
              <td>${bolachas[i].preco.toFixed(2)}</td>
              <td>${bolachas[i].estoque}</td>
              <td><button class="botao-simples" onclick="comprar(${i})">Sim!</button></td>
            </tr>`;
  }
  document.querySelector("#bolachas").innerHTML = txtBolachas;
}
