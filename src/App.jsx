import { useState } from 'react';
import './App.css';

function App() {
  const [balance, setBalance] = useState(420);
  const [transactions, setTransactions] = useState([
    { text: 'Flower', amount: -20 },
    { text: 'Salary', amount: 300 },
    { text: 'Book', amount: -10 },
    { text: 'Camera', amount: 150 }
  ]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const addTransaction = (e) => {
    e.preventDefault();
    if (text.trim() === '' || amount === 0) return;

    const newTransaction = {
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
    setBalance(prev => prev + +amount);
    setText('');
    setAmount(0);
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>

      <div className="balance-container">
        <h3>YOUR BALANCE</h3>
        <h1>${balance.toFixed(2)}</h1>
      </div>

      <div className="inc-exp-container">
        <div>
          <h4>INCOME</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>

      <div className="history">
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction, index) => (
            <li key={index} className={transaction.amount < 0 ? 'minus' : 'plus'}>
              {transaction.text}
              <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="add-transaction">
        <h3>Add new transaction</h3>
        <form onSubmit={addTransaction}>
          <div className="form-control">
            <label>Text</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text..."
            />
          </div>
          <div className="form-control">
            <label>Amount (negative - expense, positive - income)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount..."
            />
          </div>
          <button className="btn">Add transaction</button>
        </form>
      </div>
    </div>
  );
}


export default App
