import React from "react";
import * as Yup from "yup";

const ProductReviewForm = () => {
  const products = ["Product 1", "Product 2", "Product 3", "Product 4"];

  const validationSchema = Yup.object({
    product: Yup.string().required("Please select a product").oneOf(products),
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    title: Yup.string().required(),
    review: Yup.string().required(),
    rating: Yup.number().min(1).max(10).required(),
    date: Yup.date().default(() => new Date()),
    wouldRecommend: Yup.boolean().default(false),
  });

  const initialValues = {
    name: "",
    email: "",
    title: "",
    review: "",
    rating: "",
    date: new Date(),
    wouldRecommend: false,
    product: "",
  };

  const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
  };

  return <></>;
};

export default ProductReviewForm;


 ----------------------


const schema = Yup.object().shape({
  contacts: Yup.array().of(
    Yup.object().shape({
      names: Yup.array().of(
        Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required.')
            .max(5, 'Only 5 characters allowed.'),
          middleName: Yup.string(),
          lastName: Yup.string()
            .required('Last Name is required.')
            .max(5, 'Only 5 characters allowed.')
        // ADDITION >>
        }).test({
          message: 'The error message if length > 10',
          test: ({ firstName, middleName, lastName }) => {
            const len = firstName.length + middleName.length + lastName.length;
            console.log({ len });
            return len <= 10
          },
        })
        // << ADDITION
      )
    })
  )
});

schema
  .validate({ contacts: [
    { names: [{
      firstName: "John",
      middleName: "G.H.",
      lastName: "Doe"
    }] }
  ] })
  .catch(err => console.log(err.message))
  .then(() => console.log("valid"));





---------------

Pular para o conteúdo
Ramos da Informática - Comunidade de Desenvolvedores
Menu
Pesquisar ...

Menu
Início » Planetário #Dev » Javascript e TypeScript » Yup: fazendo validações de formulários no React

agosto 12, 2021
6:47 pm
No Comments
Yup: fazendo validações de formulários no React
Já ouviu falar no Yup no React? Yup é um construtor de esquema JavaScript para análise e validação de valor.

Com o avanço da tecnologia e dos navegadores, percebemos que os fluxos que envolvem formulários tendem a ficar cada vez mais flexíveis para a pessoa usuária final. Com isso, temos um ponto chave, que são as validações de formulários. Podemos ter vários tipos de validações: uma para verificar obrigatoriedade, outra checando se o valor é um e-mail correto, entre muitos outros casos.

Na programação, devemos sempre pensar no conceito de DRY (Don’t repeat yourself), ou seja, não repetir o código. Dessa forma, quando trabalhamos com diversos formulários, podemos perceber que a validação dos navegadores é muito limitada e temos que criar as nossas próprias lógicas de validações. Sem tempo para pensar na melhor forma de escrever os códigos para isso, podemos acabar violando a regra do clean code.

Temos uma maneira simples de validar qualquer tipo de campo, e com a ajuda do Formik conseguimos componentes reutilizáveis e flexíveis que nos permitem criar estilos personalizados. Nesse post mostraremos um pouco de cada ferramenta e também alguns exemplos práticos, continue com a gente!

O que é o Yup? e como funciona?
É um construtor de esquemas para validação de campos e transformação de valores no JavaScript. Simplificando, a partir do Yup temos o conceito de schema,que nada mais é que o formato que os seus campos devem seguir, ou seja, se tivermos um objeto, que dentro temos três campos que devem ser textos, a partir do Yup definimos um schema para isso. Os esquemas (schemas) são muito flexíveis e permitem modelar complexas validações, correlacionadas ou não e até mesmo transformação de valores.

Imaginemos que esses são os valores de um formulário:

nome: texto <obrigatório>;idade: numérico <obrigatório>;e-mail: texto <obrigatório> <email>;website: texto <url>.

Com essas informações, podemos criar um schema no Yup para validar esses campos:

let schema = yup.object().shape({
nome: yup.string().required(),
email: yup.string().email().required(),
idade: yup.number().required().positive().integer(),
website: yup.string().url()
});

Aqui temos a criação do schema para validar os campos que foram passados. Sendo assim, com poucas linhas e de forma muito intuitiva conseguimos criar um esquema para validação dos nossos dados.

A forma que o Yup foi escrito é muito inspirada no Joi, a única diferença é que o Yup é focado principalmente para o desenvolvimento front-end. Na biblioteca, temos a separação de dois fluxos:

cast: que é um método que ajuda na transformação e desserialização de valores;isValid: que verifica se a entrada do valor está modelada de maneira correta. Com isso, podemos separar esses dois passos ou até mesmo juntá-los.

Por que usar Yup em seu projeto React? Entenda a importância!
A validação de formulários é algo bem difícil e muitas vezes exaustivo de se fazer manualmente. Pense que teremos que criar todo tipo de regra, como verificar se o campo está vazio, se o e-mail está correto, se contém o tamanho mínimo de caracteres, entre muitos outros casos.

Com isso, percebemos que a validação se torna muito repetitiva e o código cada vez mais sujo, e, no fim, descobrirmos que teria sido mais simples utilizar o Yup na nossa aplicação. Com ele, poderíamos simplificar a forma de validar os campos e parar de repetir tanto código. Teríamos também um suporte incrível à internacionalização das mensagens de erros.

Instalação e importação
Instalando o Yup
Para instalar o Yup apenas rode um desses comandos:

npm install yup // npm i yup

Ou:

yarn add yup

Com isso, podemos seguir para a próxima etapa.

Importando o Yup em seu projeto
Para a importação do pacote, devemos utilizar o require quando estamos usando NodeJs ou então, o import se estamos utilizando o ambiente do navegador.

const yup = require(“yup”);

Ou:

import * as yup from “yup”;

O que é Formik?
O Formik é uma biblioteca para auxiliar o desenvolvimento de formulários, isso é, simplificar a forma de utilização dos campos de texto, numéricos, checkbox, entre muitos outros. Nele temos a possibilidade de criar em poucas linhas formulários robustos que podem ou não conter regras de validação.

Você pode estar se perguntando o porquê do Formik ser citado nesse post. A resposta é bem simples: o criador dessa ferramenta adicionou um exclusivo suporte à biblioteca do Yup e, sendo assim, conseguimos utilizar o melhor dos dois mundos e fazer o desenvolvimento de telas com diversos formulários de maneira bem prática.

Exemplos de uso do Yup
Antes de mexer com o Yup, vamos criar o nosso projeto. Para isso, você vai precisar baixar o NodeJs na sua máquina. Além disso, eu recomendo a utilização do Yarn para a instalação dos pacotes.

Vamos começar criando um novo diretório. No meu caso irei criar uma pasta chamada teste-yup:

mkdir teste-yup

Logo em seguida, entre na pasta que criamos e inicie um novo projeto:

cd teste-yup
npm init -y

Obs: O -y é para confirmar todas as questões que são feitas pelo Npm.

Continuando, na pasta do projeto, vamos primeiro criar um novo arquivo JavaScript:

touch index.js

Após isso, vamos no package.json e adicionaremos um novo comando para facilitar a execução do arquivo.

No package.json:

{
…
“scripts”: {
“start”: “node index.js”
},
…
}

Criando a base de dados e o schema de validação
Iremos agora importar o Yup nesse arquivo e a base de dados que iremos validar:

const yup = require(“yup”);

const valores = {
  nome: “Fulano”,
  email: “fulano_de_tal@email.com”,
  idade: -19,
  website: “https://www.site.com”
}

Criamos um novo objeto no qual temos um nome, um email e um campo de idade. Para validar esses valores, devemos criar um schema de validação:

let schema = yup.object().shape({
nome: yup.string().required(),
email: yup.string().email().required(),
idade: yup.number().required().positive().integer(),
website: yup.string().url()
});

Na declaração da variável schema temos a utilização da biblioteca do Yup para definir um objeto por meio da função object() e logo em seguida escrevemos qual é o formato de objeto. Dentro disso temos que:

o nome é um texto obrigatório;o email tem que ser válido e também obrigatório;a idade tem que ser um número, obrigatório, positivo e inteiro.

Validando dados através do schema
Para validar os nossos valores, temos que utilizar alguns outros métodos do Yup:

schema
  .isValid(valores)
  .then((valid) => {
    console.log(“Valor válido:”, valid);
  });

Aqui iniciamos a validação de um valor por meio do método isValid(). Passamos então o objeto criado anteriormente com o valor da idade incorreta. Por fim, depois do método then(), mostramos o resultado da validação em uma string, para facilitar a visualização.

Rodando um dos comandos a seguir temos o resultado da validação:

npm run start
yarn start

Podemos agora arrumar os valores que a gente passou:

const valores = {
nome: “Fulano”,
email: “fulano_de_tal@email.com”,
idade: 19,
website: “https://www.site.com”
}

Se rodarmos novamente, perceberemos um novo tipo de resultado:

Dessa forma, conseguimos entender a força que o Yup pode nos proporcionar.

Validações de formulários usando Formik e Yup
Vamos começar criando um novo projeto do React a partir da ferramenta create-react-app:

npx create-react-app teste-formik-yup

Após a criação do projeto, vamos entrar na pasta e instalar o Formik e o Yup:

cd teste-formik-yup
yarn add formik yup

Finalizada a instalação das dependências, iremos deletar todo o conteúdo da pasta src e criaremos um arquivo index.js e um arquivo de estilos styles.css:

cd src/
rm -f *
touch index.js
touch styles.css
cd ../

Para facilitar, copie os códigos a seguir nos arquivos criados:

// index.js
import React from “react”;
import ReactDOM from “react-dom”;
import { useFormik } from “formik”;
import “./styles.css”;
import * as yup from “yup”;

const ExemploTrybe = () => {
  const formik = useFormik({
    initialValues: {
      nome: “”,
      email: “”,
      idade: “”,
    },
    validationSchema: yup.object({
      nome: yup.string().required(“O campo é obrigatório.”),
      email: yup
        .string()
        .email(“E-mail inválido.”)
        .required(“O campo é obrigatório.”),
      idade: yup
        .number()
        .required(“O campo é obrigatório.”)
        .positive(“O campo deve ser positivo.”)
        .integer(“O campo deve ser um número inteiro.”),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor=”nome”>Nome</label>
      <input
        id=”nome”
        name=”nome”
        type=”text”
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.nome}
      />
      {formik.touched.nome && formik.errors.nome ? (
        <div>{formik.errors.nome}</div>
      ) : null}
      <label htmlFor=”email”>E-mail</label>
      <input
        id=”email”
        name=”email”
        type=”email”
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <label htmlFor=”idade”>Idade</label>
      <input
        id=”idade”
        name=”idade”
        type=”number”
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.idade}
      />
      {formik.touched.idade && formik.errors.idade ? (
        <div>{formik.errors.idade}</div>
      ) : null}
      <button type=”submit”>Enviar</button>
    </form>
  );
};

function App() {
  return <ExemploTrybe />;
}

const rootElement = document.getElementById(“root”);
ReactDOM.render(<App />, rootElement);

E para estilizar o nosso template:

/* styles.css */
* {
box-sizing: border-box;
}

body {
    background-color: #cbd5e0;
}

label {
    margin-top: 1rem;
    font-weight: bold;
    display: flex;
}

input {
    width: 400px;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    border: 2px solid #edf2f7;
    background-color: #f7fafc;
    color: #2d3748;
    border-radius: 10px;
}

input:focus {
    outline: none;
}

button {
    padding: 0.5rem 1.25rem;
    font-size: 1rem;
    border-radius: 10px;
    background-color: #4a5568;
    border: 2px solid #4a5568;
    color: white;
    font-weight: bold;
    margin-bottom: 1rem;
    cursor: pointer;
    display: flex;
    margin-top: 1rem;
}

Vamos agora analisar cada parte do nosso código fonte:

…
const formik = useFormik({
initialValues: {
nome: “”,
email: “”,
idade: “”,
},
validationSchema: yup.object({
nome: yup.string().required(“O campo é obrigatório.”),
email: yup
.string()
.email(“E-mail inválido.”)
.required(“O campo é obrigatório.”),
idade: yup
.number()
.required(“O campo é obrigatório.”)
.positive(“O campo deve ser positivo.”)
.integer(“O campo deve ser um número inteiro.”),
}),
onSubmit: (values) => {
alert(JSON.stringify(values, null, 2));
},
});
…

Por início, temos a criação de uma variável do Formik, na qual por meio do hook useFormik, iniciamos os valores iniciais, o schema de validação do Yup e a função do evento de submit do formulário. No esquema usamos as mesmas regras mostradas anteriormente com a diferença das mensagens traduzidas.

Continuando:

…
<label htmlFor=”nome”>Nome</label>
<input
id=”nome”
name=”nome”
type=”text”
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.nome}
/>
{formik.touched.nome && formik.errors.nome ? (
<div>{formik.errors.nome}</div>
) : null}
…

Aqui temos uma label com um campo de texto que contém propriedades do Formik nas props onChange, onBlur e value, sendo que o onChange é chamado quando ocorre uma alteração no campo, o onBlur quando o campo é desfocado e o value é o valor do campo em si. Tudo isso é necessário para que a biblioteca consiga validar corretamente o campo.

Na linha de baixo temos uma checagem de erros que o Formik tenha percebido, se houver, é renderizado uma div com o erro, se não, nada ocorre.

Como podemos perceber, a repetição de toda essa lógica de props e a verificação de erros ocorre em todos os campos de textos do código. Isso foi feito para facilitar o entendimento, porém, é de suma importância trabalhar de forma genérica na programação.

Depois de tudo isso você pode checar o resultado desse pequeno projeto. Apenas rode o comando inicializador no seu terminal:

npm start

Ou:

yarn start

Lançar um objeto
No Yup também temos a possibilidade de utilizar a função cast () para converter um objeto para os valores corretos do schema, isso é, se no objeto de entrada tiver um número que está como texto, o lançamento do Yup vai convertê-lo para um número. Também seria possível converter uma string para um valor dia/mês/ano no object Date.

Nesse ponto, percebemos que essa biblioteca consegue agregar muito mais que apenas uma validação. Conseguimos com ela também corrigir os nossos valores do schema e ajustar o nosso fluxo de dados.

Métodos úteis
Listaremos a seguir algumas funções que podem auxiliar você nos seus projetos que utilizam o Yup:

se for interessante para você, existe o método concat () para juntar dois ou mais schemas de validação, lembrando que apenas esquemas do mesmo tipo podem ser concatenados;podemos cancelar a validação no primeiro erro encontrado. Por padrão, o Yup vai validar todos os campos até retornar uma resposta. No entanto, se você passar a configuração abortEarly, ele vai interromper a execução no primeiro erro encontrado. O código pode ser escrito como:

wait checkoutAddressSchema.validate(addressFormData, { abortEarly: false })

temos outras funções de utilidade numérica, tais como o round (), que serve para arredondar um número, o morethan (), que verifica se o valor é apenas maior que o outro e o lessthan (), que ao contrário do anterior, verificar se o valor é menor que um outro;também existe a possibilidade de usar regex no Yup, permitindo assim uma enorme personalização de regras.

Leia também:

Gerenciando banco de dados SQLite3 com Python – Parte 2(Abre numa nova aba do navegador)
Gerenciando banco de dados SQLite3 com Python – Parte 1(Abre numa nova aba do navegador)
Tipos de componentes React(Abre numa nova aba do navegador)
Como JavaScript está influenciando o WordPress(Abre numa nova aba do navegador)
Encapsulamento da lógica do algoritmo
Nesse post mostramos a dificuldade que é criar validações flexíveis e escaláveis para a pessoa usuária final, entendemos também o funcionamento do Yup e como ele pode ser útil para organizar o nosso fluxo de dados com a sua lógica de schemas. Por fim, com o Formik, aprendemos a fazer a integração com o Yup e a mostrar erros personalizados na tela.

Conseguimos com poucas linhas criar validações completas e totalmente voláteis para o nosso cenário, utilizando essas bibliotecas e um pouco de criatividade, conseguimos criar uma solução leve e rápida para os nossos problemas com formulário. Espero que as dúvidas sobre validações no front-end tenham sido sanadas!

O que achou de nosso texto? Leia agora sobre React: o que é e como funciona essa biblioteca Javascript?

O post Yup: fazendo validações de formulários no React! apareceu primeiro em Insights para te ajudar na carreira em tecnologia | Blog da Trybe.

Este artigo foi importado automaticamente por fazer parte do Planetário Dev. Quer fazer parte deste HUB de conteúdos? Faça parte do Planetário e veja as vantagens.

Não tem site ou blog? Seja um autor do site e ainda pode ser remunerado.

 

LEIA MAIS:

Simplificando formulários no React com Hooks(Abre numa nova aba do navegador)
21 comandos SQL essenciais e avançados e conteúdos extras(Abre numa nova aba do navegador)
Tutorial Django – 3 anos em 10 minutos
Reconhecimento de voz NATIVO com Javascript – Dica rápida
Relacionado
Os mais lidos da semana
Confira os artigos mais lidos da semana de 18/12/2022 à 25/12/2022   10 ideias que todos os desenvolvedores deveriam fazer em 2023 Novo malware bancário mira o Brasil para roubar Pix Participe da Comunidade de Desenvolvedores 32 melhores newsletters de tecnologia e startups Servidor Apache: o que é, como funciona…

Em "Indicações"

Os artigos #Dev mais lidos da semana
Confira os artigos DEV mais lidos da semana de 01/01/2023 à 07/01/2023. Boa leitura e excelente semana! 74 sites que oferecem cursos online gratuitos com certificado 32 melhores newsletters de tecnologia e startups A meta do Google de criar legião de profissionais em tecnologia até 2027 Automação de NF-e com…

Em "Ramos da Informática"

Simplificando formulários no React com Hooks
Simplificando formulários no React com Hooks
Em "Javascript e TypeScript"

Início » Planetário #Dev » Javascript e TypeScript » Yup: fazendo validações de formulários no React

FACEBOOK
LINKEDIN
TWITTER
PINTEREST
REDDIT
TELEGRAM
WHATSAPP
EMAIL
PRINT
Relacionados
7 fatos de tecnologia que marcaram 2022
Relembre algumas tecnologias marcaram o ano de 2022; dentre elas estão os NFTs, o metaverso e entrega a domicílio por drone O ano de 2022 teve diversas tecnologias que ganharam

26 de dezembro de 2022  Nenhum comentário
LocalStack: simule ambientes AWS localmente
A LocalStack é uma solução que tem tudo para apoiar muito a sua operação. Com ela é possível obter um ambiente cloud completo, na sua máquina, sem custo, disponível. Além

5 de janeiro de 2023  Nenhum comentário
Jogo blockchain pode ajudar a criar um metaverso sem donos
Dark Forest mostra como é possível usar criptografia avançada em jogos, e como blockchains podem hospedar mundos digitais descentralizados. Este jogo blockchain de ficção científica pode ajudar a criar um

31 de dezembro de 2022  Nenhum comentário
10 livros e dicas para se tornar um líder técnico – Tech Leader
Não existe um curso específico para se tornar um líder técnico (tech leader), é um processo que vem com o tempo de experiência e conhecimentos em DevOps, Revisão de código,

8 de janeiro de 2023  Nenhum comentário
Malwares e chaves AWS escondidos no Python Package Index
Desenvolvedor britânico usa ferramenta de digitalização caseira para verificar riscos. Uma das principais ferramentas de desenvolvedores é o Python Package Index, ou popularmente conhecida como PyPI. Essa ferramenta continua a

12 de janeiro de 2023  Nenhum comentário
Inteligência Artificial da Microsoft ajuda drones de entrega
Empresa Drone Express quer aprimorar sistemas de navegação com o Microsoft Azure A empresa Drone Express, com sede em Ohio, está produzindo uma nova versão do seu drone de entrega

15 de dezembro de 2022  Nenhum comentário
Deixe uma resposta

Assine o E-Zine Dev
Assine o E-Zine e tenha Conteúdo Exclusivo, Concursos para assinantes, descontos exclusivos e uma área de conteúdos exclusivos só do E-zine.

Primeiro Nome *

Primeiro Nome

Último Nome

Último Nome

Email *

Seu E-mail


Pague-nos um café expresso.

Seja um Padrim da Comunidade.



-----------------

selectedCountry: Yup.string()
        .required()
        .oneOf(["usa", "mexico"])
        .label("Selected Country"),

