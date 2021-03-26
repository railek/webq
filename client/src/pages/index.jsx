import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { SocketContext } from '../context/socket-context';

export default function Home() {
  const { socket } = useContext(SocketContext);
  const [counter, setCounter] = useState('');
  const [name, setName] = useState('');
  const history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();
    socket.emit('counter.add', { id: parseInt(counter, 10), name });
    history.push(`/counter?id=${counter}`);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <form onSubmit={onSubmit}>
        <input required type="text" onChange={(event) => setName(event.target.value)} />
        <input
          required
          type="number"
          min="1"
          defaultValue="0"
          onChange={(event) => setCounter(event.target.value)}
        />
        <button type="submit">
          <span>Add Counter</span>
        </button>
      </form>
    </Layout>
  );
}
