import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transactions: Model,
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          amount: 'R$ 12000',
          category: 'Desenvolvimento',
          createdAt: new Date('2021-02-12 09:20:00'),
          type: 'deposit',
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 'R$ 1100',
          category: 'Casa',
          createdAt: new Date('2021-02-14 11:20:00'),
          type: 'withdraw',
        },
      ],
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transactions');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transactions', data);
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
