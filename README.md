# 🛍️ Dev Shop

A **Dev Shop** é uma loja virtual fictícia criada com React e Vite, que consome dados de produtos a partir de um JSON fake via `json-server`. Ideal para estudos de React, gerenciamento de estado com Context API e consumo de API com Axios.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Axios](https://axios-http.com/)
- [React Router DOM](https://reactrouter.com/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Hot Toast](https://react-hot-toast.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [json-server](https://github.com/typicode/json-server)

## 🧪 Funcionalidades

- ✅ Listagem de produtos consumidos via `json-server`
- ✅ Adição ao carrinho com controle de quantidade (sem duplicar itens)
- ✅ Cálculo automático do total de compras com `useState`
- ✅ Remoção de itens do carrinho
- ✅ Alteração de quantidade de itens
- ✅ Limpar todo o carrinho
- ✅ Requisições feitas com `useEffect`
- ✅ Toasts de notificação com `react-hot-toast`

## 🖼️ Demonstração

👉 Acesse a versão online aqui:  
[https://dev-shop.vercel.app](https://dev-shop.vercel.app)

## 💻 Como executar localmente

### 1. Clone o repositório

```bash
git clone https://github.com/antoni0jsneto/devshop.git
cd dev-shop
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o servidor fake (json-server)

```bash
json-server --watch db.json --port 3001
```

### 4. Inicie a aplicação

```bash
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173) para ver a aplicação.

## 🧾 Exemplo de db.json

```json
{
  "products": [
    {
      "id": 1,
      "title": "Airpods Apple, com Estojo de Recarga, Bluetooth",
      "description": "Airpods Apple, com Estojo de Recarga, Bluetooth, Branco...",
      "price": 120,
      "cover": "https://i.imgur.com/uXrbyfA.jpg"
    },
    {
      "id": 2,
      "title": "Notebook Gamer Lenovo Gaming 3i Intel Core i5-11300H",
      "description": "Lenovo ideapad Gaming 3i com placa de vídeo NVIDIA GTX 1650...",
      "price": 379.9,
      "cover": "https://i.imgur.com/bM5IUKe.jpg"
    }
  ]
}
```

## 🤝 Contribuição

Contribuições são bem-vindas!  
Sinta-se à vontade para abrir _issues_ ou _pull requests_.

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

Feito com 💙 por [Antônio Neto](https://github.com/antonionetopc)
