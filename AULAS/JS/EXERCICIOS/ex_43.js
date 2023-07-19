let Produto, preco = 4;

switch (Produto, preco) {
    case 1:
        produto = "Bleu de Chanel EDP";
        preco = "R$721,00";
        break;
    case 2:
        produto = "Paco Rabanne One 1 Million";
        preco = "R$500,00";
        break;
    case 3:
        produto = "Azzaro Wanted by Night EDP";
        preco = "R$360,00"
        break;
    case 4:
        produto = "L Homme Prada EDT";
        preco = "R$565,00"        
        break;
    case 5:
        produto = "Gucci Intense Oud EDP";
        preco = "R$639,00"
        break;

        // default
        // Produto = "Não é um Produto";
        // break;
}

console.log(produto + "\n" + preco);