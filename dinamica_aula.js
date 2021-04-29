 //1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator
 const arr = [1, 5, 23, 76, 87, 34, 687, 89, 98, 103, 489, 423, 89];
 const soma = (...lista) => lista.reduce((prev, acc) => prev + acc, 0);

 //2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]


