# API Node Para Sistema de Locação de Carros.

Esta é uma API simples para gerenciar informações sobre carros. A API permite criar, atualizar, e excluir carros, além de realizar algumas validações nos dados.

## Tecnologias

- Node.js
- Express.js
- Knex.js
- MySQL

## Instalação

1. Clone este repositório:

```cmd
git clone https://github.com/reginaguermandi/ANOUT24_D01_COMPASSCAR.git
cd ANOUT24_D01_COMPASSCAR
```

2. Instale as dependências:

```cmd
npm install
```

3. Crie e configure seu banco de dados:

- Aplique as migrations do Knex para criar as tabelas necessárias:

```cmd
npx knex migrate:latest
```

4. Crie um arquivo .env para armazenar suas variáveis de ambiente:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=nome_do_banco
PORT=3000
```

5. Inicie o servidor:

```cmd
npm start
```

## Endpoints da API

### 1. **Criar um carro**

- **Método**: POST
- **Rota**: /api/v1/cars
- Body (exemplo):

```json
{
	"brand": "Toyota",
	"model": "Corolla",
	"year": 2020,
	"plate": "ABC-1D23"
}
```

- **Resposta**:

- **200 OK** – Se o carro for criado com sucesso.

- **400 Bad Request** – Se houver um erro de validação (exemplo: ano inválido, placa já registrada, etc.).

- **409 Conflict** – Se já existir um carro com a mesma placa.

### 2. Atualizar Itens do Carro

- **Método**: PUT

- **Rota**: **/api/v1/cars/:id/items**

- **Parâmetros**: id (obrigatório) – ID do carro ao qual os itens serão associados.

- Body (exemplo):

```json
["Ar Condicionado", "Alarme", "Banco Aquecido"]
```

- Respostas:

- **204 No Content** – Os itens foram atualizados com sucesso.

- **400 Bad Request** – Se algum dado estiver inválido, como:

  - Se os itens não forem um array.
  - Se o array contiver itens repetidos.
  - Se houver mais de 5 itens.

### 3. Buscar carro por ID

- **Método**: GET

- **Rota**: /api/v1/cars/:id

- **Parâmetros**: id – ID do carro a ser buscado.

- **Resposta**:

- **200 OK** – Retorna o carro.

- **404 Not Found** – Se o carro com o id fornecido não for encontrado.

### 4. Listar todos os carros

- **Método**: GET

- **Rota**: /api/v1/cars

- **Resposta**:

- **200 OK** – Retorna uma lista com todos os carros.

### 4.1 Listar carros com filtros

- **Método**: GET

- **Rota**: /api/v1/cars

- **Query Parameters** (filtros):
  - brand (opcional) – Filtra os carros pela marca.
  - model (opcional) – Filtra os carros pelo modelo.
  - year (opcional) – Filtra os carros pelo ano.
  - plate (opcional) – Filtra os carros pela placa.

**Exemplo de requisição**:

Para filtrar carros da marca "Honda", com o modelo "Civic":

```http
GET /api/v1/cars?brand=Honda&model=Civic
```

- **Resposta**:

- **200 OK** – Retorna a lista de carros que atendem aos filtros aplicados.

**Exemplo de resposta**:

```json
{
    "id": 13,
    "brand": "Honda",
    "model": "Civic",
    "year": 2020,
    "plate": "DEF-2B94"
},
{
    "id": 14,
    "brand": "Honda",
    "model": "Civic",
    "year": 2020,
    "plate": "ABC-1D98"
}
```

### 5. **Atualizar dados do carro**

- **Método**: PATCH

- **Rota**: /api/v1/cars/:id

- **Parâmetros**: id – ID do carro a ser atualizado.

- Body (exemplo):

```json
{
	"brand": "Honda",
	"model": "Civic",
	"year": 2021,
	"plate": "XYZ-2A34"
}
```

- **Resposta**:

- **204 No Content** – Se os dados foram atualizados com sucesso.

- **400 Bad Request** – Se houver um erro de validação (exemplo: ano inválido, placa com formato errado).

- **404 Not Found** – Se o carro com o id fornecido não for encontrado.

- **409 Conflict** – Se a placa já estiver registrada para outro carro.

### 6. Excluir um carro

- **Método**: DELETE

- **Rota**: /api/v1/cars/:id

- **Parâmetros**: id – ID do carro a ser excluído.

- **Resposta**:

- **204 No Content** – Se o carro for excluído com sucesso.

- **404 Not Found** – Se o carro com o id fornecido não for encontrado.
