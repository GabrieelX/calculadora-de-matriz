# ETEC FERNANDO PRESTES EXTENSÃO FATEC

ARTHUR MENDES

EDUARDO YASUOKA

GUSTAVO HENRIQUE

IAN CAMPOLIM

JONES HENRIQUE

RICARDO GABRIEL

KAYO HENRIQUE

MATEUS CAMPOS

THIAGO PEREIRA

LEONARDO MARTINS

PEDRO HENRIQUE


# MATEMÁTICA - MATRIZ

## INTRODUÇÃO
Esta aplicação permite ao usuário inserir valores em uma matriz 3x3 e escolher uma
das quatro aplicações oferecidas para realizar cálculos relacionados à matriz. A
aplicação é fácil de usar e foi desenvolvida com uma interface amigável e intuitiva.

![image](https://github.com/user-attachments/assets/f43b5358-7bb9-4301-b2f1-2ca1347cc58a)

## Cramer
A gramática é uma estrutura essencial para a comunicação eficaz, permitindo que
ideias sejam expressas de forma clara e coerente. Em matemática, o conceito de
matriz se refere a uma tabela de números dispostos em linhas e colunas, que facilita
a resolução de sistemas de equações e transformações lineares. A gramática, assim
como as regras que governam a manipulação de matrizes, segue um conjunto de
princípios organizados para evitar ambiguidades. Tanto na linguagem quanto na
matemática, essas regras fornecem uma base sólida para operar com consistência.
Dessa forma, ambos os conceitos são fundamentais em seus respectivos campos
para a construção de significado e resolução de problemas.

## Instruções de Uso
Escolhendo uma Aplicação
Ao acessar a aplicação, o usuário verá um título no topo e uma explicação solicitando
que ele selecione uma das quatro opções no menu suspenso. As opções disponíveis
são:
 Determinante Simples: Calcula o determinante da matriz 3x3 inserida.
 Pontos Colineares: Verifica se três pontos no plano estão alinhados, utilizando suas
coordenadas.
 Área de Triângulo: Calcula a área de um triângulo com base nas coordenadas dos
vértices.
 Regra de Cramer: Resolve um sistema linear 3x3 usando a Regra de Cramer

## Inserindo Valores na Matriz
Abaixo do seletor de aplicação, o usuário verá uma tabela 3x3 composta por campos
de entrada. Esses campos são usados para inserir os valores da matriz. O usuário
deve inserir os números nos nove campos dispostos como uma matriz.

### Exemplo:
Na primeira linha, os campos correspondem a a11, a12 e a13.
Na segunda linha, os campos correspondem a a21, a22 e a23.
Na terceira linha, os campos correspondem a a31, a32 e a33.
3. Termos Independentes (Apenas na Regra de Cramer)
Se o usuário escolher a opção Regra de Cramer no menu suspenso, três novos
campos de entrada aparecerão abaixo da matriz. Esses campos são usados para
inserir os termos independentes do sistema de equações.
### Exemplo:
O campo b1 representa o termo independente da primeira equação.
O campo b2 representa o termo independente da segunda equação.
O campo b3 representa o termo independente da terceira equação.
Esses campos só aparecem quando a Regra de Cramer é selecionada, e ficam ocultos
para as outras aplicações.
Cálculo
Após inserir os valores da matriz (e os termos independentes, caso seja a Regra de
Cramer), o usuário deve clicar no botão "Calcular". A aplicação processará os dados
e exibirá o resultado na tela.

### Resultados
Os resultados aparecerão em uma caixa logo abaixo do botão "Calcular". Dependendo
da aplicação escolhida, os resultados serão:
Determinante Simples: Mostra o valor do determinante da matriz.
Pontos Colineares: Informa se os pontos estão ou não alinhados.
Área de Triângulo: Exibe o valor da área do triângulo formado pelos pontos inseridos.
Regra de Cramer: Exibe os valores das variáveis x, y e z, após resolver o sistema
linear.
### Exemplo de Interação
O usuário seleciona "Determinante Simples".
Insere os valores da matriz nos campos de entrada.
Clica no botão "Calcular".
O valor do determinante é exibido logo abaixo
## fluxograma

![fluxograma](https://github.com/user-attachments/assets/93c0fff1-c73f-40ea-a1ce-783189ccc85a)

## ALGORITMO
Este código realiza cálculos relacionados a matrizes 3x3 usando álgebra linear,
abordando diferentes aplicações, como determinantes, colinearidade de pontos, área
de triângulos e o Método de Cramer.

### 1. Determinante de uma Matriz 3x3:
A fórmula geral para o determinante DDD é:

![image](https://github.com/user-attachments/assets/26a4a2d9-dc5e-4894-8a4f-862a221583c8)

### 2. Método de Cramer:
Usa determinantes para resolver sistemas lineares. Soluções para xxx, yyy, e zzz são
dadas por:


![image](https://github.com/user-attachments/assets/0f38042f-d8db-4989-bf84-67ab82e1953a)

Onde DxD_xDx , DyD_yDy e DzD_zDz são determinantes substituindo a coluna das
incógnitas pelos termos independentes.

### 3. Colinearidade:
Verifica-se se o determinante da matriz formada pelas coordenadas dos pontos é zero.
Se for, os pontos são colineares

### 4. Área de Triângulo:
Calculada como:

![image](https://github.com/user-attachments/assets/3500f84f-6cc1-4e2e-a584-6b1f540f7d66)

Usando a fórmula do determinante da matriz das coordenadas do triângulo.


# PARTE TECNICA
Documentação Técnica do Código
Estrutura HTML
Cabeçalho (<head>)

### Meta Tags:
meta charset="UTF-8": Define a codificação de caracteres como UTF-8.
meta name="viewport": Define que a página seja responsiva, adaptando-se a diferentes tamanhos de tela.

## Título da Página: 
(<title>): Define o título da página como "Matriz 3x3 - Determinante e Aplicações".

## Bootstrap CDN:
Foi incluído um link para o Bootstrap 5.3.3 para estilizar os elementos HTML com classes pré-definidas, como botões, tabelas e inputs.
Estilo Customizado (<style>)

## Foram aplicadas algumas customizações para melhorar a aparência da página, como:
container-custom: Define margens, padding, cor de fundo e bordas arredondadas para o contêiner principal.
Tabela e Inputs: O tamanho dos campos de entrada é ajustado para caber na tabela e serem centralizados.
Botão: O botão "Calcular" ocupa 100% da largura e possui margens ajustadas.
Resultado: O texto exibido após o cálculo tem fonte maior e está em negrito.
Estrutura do Corpo da Página (<body>)
Div Principal (<div class="container container-custom">)
A página está organizada dentro de uma div principal com classes do Bootstrap e personalizações definidas em CSS. Essa div cria o layout responsivo e centralizado da aplicação.

## Título e Seletor de Aplicação:
O título da página foi definido como "Calculadora de Determinante e Aplicações", centralizado e estilizado com Bootstrap.
O menu suspenso (<select>) permite ao usuário escolher entre quatro tipos de cálculos. O atributo onchange="toggleTermosIndependentes()" chama uma função JavaScript que altera a exibição dos termos independentes quando a Regra de Cramer é selecionada.
Tabela de Matrizes (<table class="table table-bordered">)

## A tabela: 
foi estilizada com o Bootstrap, utilizando classes como table e table-bordered para adicionar bordas e melhorar a apresentação dos campos de entrada.
Os campos de entrada (<input type="number">) são usados para inserir os valores da matriz 3x3. A classe form-control do Bootstrap foi aplicada a cada campo para melhorar o estilo.

## Termos Independentes:
A seção dos termos independentes (<div id="termosIndependentes" class= 'hidden" >) está inicialmente escondida. Ela é exibida dinamicamente apenas quando a Regra de Cramer é escolhida, utilizando a função toggleTermosIndependentes.

## Botão "Calcular"
O botão "Calcular" é um elemento <button> estilizado com a classe btn btn-primary do Bootstrap, que define um estilo visual padrão e interativo. Quando clicado, ele chama a função JavaScript calcular().

## Resultado:
O resultado do cálculo é exibido dentro de um div com o id resultado, que está estilizado para centralizar o texto e exibi-lo de forma clara após o cálculo.

## JavaScript:
O JavaScript é responsável pela interação e cálculos da aplicação. Aqui está uma explicação detalhada de cada função:

## Função toggleTermosIndependentes()
Essa função é chamada sempre que o usuário muda a aplicação selecionada no menu suspenso.
Ela verifica se a opção "Regra de Cramer" foi selecionada:
Se for, remove a classe hidden da div que contém os termos independentes, exibindo-a.
Se não for, a div dos termos independentes é escondida novamente com a adição da classe hidden.

## Função calcular():
Esta função faz o cálculo da matriz 3x3 de acordo com a aplicação selecionada pelo usuário.
Entrada de Dados: Lê os valores inseridos nos campos da matriz e, se a Regra de Cramer for selecionada, também lê os termos independentes (b1, b2, b3).

## Lógica de Cálculo:
Dependendo da aplicação selecionada (determinante, colinearidade, área de triângulo ou Regra de Cramer), realiza o cálculo apropriado.
Determinante Simples: Calcula o determinante da matriz 3x3 usando a fórmula padrão.
Colinearidade: Verifica se o determinante da matriz associada é 0 para determinar se os pontos estão alinhados.
Área de Triângulo: Calcula a área de um triângulo usando o determinante de uma matriz específica.
Regra de Cramer: Calcula o determinante da matriz principal (D) e os determinantes das matrizes substituídas (Dx, Dy, Dz). Em seguida, resolve o sistema linear 3x3, mostrando os valores das variáveis x, y e z.
Exibição do Resultado: O resultado é inserido na div com id resultado e exibido ao usuário.

## Conclusão: 
Este código fornece uma solução completa para calcular determinantes de matrizes 3x3 e aplicações relacionadas. A interface amigável permite que o usuário selecione a aplicação desejada e insira os dados de forma simples, com todos os cálculos sendo feitos de maneira eficiente em JavaScript. A utilização de Bootstrap garante que a aplicação seja responsiva e visualmente agradável em diferentes dispositivos.
