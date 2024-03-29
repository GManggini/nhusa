const catalogo = [
{
    id: 1,
    marca: 'Zara',
    nome: 'Camisa Larga com Bolsos',
    preco: 70,
    imagem: 'product-1.jpg',
    feminino: false,
  },
  {
    id: 2,
    marca: 'Zara',
    nome: 'Casaco Reto com Lã',
    preco: 85,
    imagem: 'product-2.jpg',
    feminino: true,
  },
  {
    id: 3,
    marca: 'Zara',
    nome: 'Jaqueta com Efeito Camurça',
    preco: 60,
    imagem: 'product-3.jpg',
    feminino: false,
  },
  {
    id: 4,
    marca: 'Zara',
    nome: 'Sobretudo em Mescla de Lã',
    preco: 160,
    imagem: 'product-4.jpg',
    feminino: false,
  },
  {
    id: 5,
    marca: 'Zara',
    nome: 'Camisa Larga Acolchoada de Veludo Cotelê',
    preco: 110,
    imagem: 'product-5.jpg',
    feminino: false,
  },
  {
    id: 6,
    marca: 'Zara',
    nome: 'Casaco de Lã com Botões',
    preco: 170,
    imagem: 'product-6.jpg',
    feminino: true,
  },
  {
    id: 7,
    marca: 'Zara',
    nome: 'Casaco com Botões',
    preco: 75,
    imagem: 'product-7.jpg',
    feminino: true,
  },
  {
    id: 8,
    marca: 'Zara',
    nome: 'Colete Comprido com Cinto',
    preco: 88,
    imagem: 'product-8.jpg',
    feminino: true,
  }
]


for (const produtoCatalogo of catalogo) {
    const cartaoProduto = 
    ` <div class="border-solid border-2 border-indigo-600 w-48 m-2" id="card-product-${produtoCatalogo.id}">
        <img src="/Intensivão de JavaScript - Aula 1/assets/img/${produtoCatalogo.imagem}" style="height: 300px;">
        <p class ='marca'>${produtoCatalogo.marca}</p>
        <p>${produtoCatalogo.nome}</p>
        <p>$${produtoCatalogo.preco}</p>
        <button>Adicionar</button>
    </div> `;
  document.getElementById("container-product").innerHTML+= cartaoProduto;
}