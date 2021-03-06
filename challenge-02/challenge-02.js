// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum( num1, num2 ){
    return num1 + num2;
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var soma = sum(2,4); // 6

// Qual o valor atualizado dessa variável?
console.log("Função Soma:", soma);

// Declare uma nova variável, sem valor.
var myvar;

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function add( newValue ){
    myvar = newValue; 
    console.log(" O valor da variável agora é " + newValue);
}

// Invoque a função criada acima.
add("Maria Joana");

// Qual o retorno da função? (Use comentários de bloco).

/**
 * O valor da variável agora é Maria Joana
 */

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function someFunction( args1, args2, args3 ){
    if( arguments.callee.length != arguments.length )
        return "Preencha todos os valores corretamente!";
    else
        return (args1 * args2 * args3) + 2;
}

// Invoque a função criada acima, passando só dois números como argumento.
var resultadoSomeFunction = someFunction(2, 10);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log( 'resultadoSomeFunction: ', resultadoSomeFunction ); // Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
var resultadoSomeFunction2 = someFunction(2, 10, 8);

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
console.log( 'resultadoSomeFunction2: ', resultadoSomeFunction2 ); // 162


/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function someFunctionAgain( args1, args2, args3 ){
    if( arguments.length === 0 )
        return null;

    if( arguments.length === 1 )
        return arguments;
    else if( arguments.length === 2 )
        return arguments[0] + arguments[1];
    else if( arguments.length === 3 )
        return (arguments[0] + arguments[1]) / arguments[2];
    else 
        return false;
} 

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log('someFunctionAgain1: ', someFunctionAgain());
console.log('someFunctionAgain2: ', someFunctionAgain(4,2,2));
console.log('someFunctionAgain3: ', someFunctionAgain(1,2));
console.log('someFunctionAgain4: ', someFunctionAgain(1));
