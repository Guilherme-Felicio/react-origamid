import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from '../UserHeaderNav/UserHeaderNav';
import styles from './userHeader.module.css';

const UserHeader = () => {
  const location = useLocation();
  const [title, setTitle] = useState('');
  useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/estatisticas':
        setTitle('Estatísticas');
      case '/conta/postar':
        setTitle('Poste sua foto');
      break;
      default:
          setTitle('Minha Conta');
        break;
    }
  }, [location]);
  

  return (
    <header className={styles.header}>
      <h1 className='title'>{title}</h1>
      <UserHeaderNav />
    </header>
  )
}

export default UserHeader