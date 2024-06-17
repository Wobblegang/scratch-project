import React, { useState } from 'react';
import Booklist from './Booklist';
// import Login from './Login';
import { useNavigate } from 'react-router-dom';
// import { Navbar, Container } from 'react-bootstrap';
import './Home.scss';

const Home = ({ booksData }) => {
  const navigate = useNavigate();

  //implementation of useState/useEffect renders blank page
  // const [booksData, setBooksData] = useState([]);

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await fetch('http://localhost:8080/api/books');
  //       const data = await response.json();
  //       setBooksData(data);
  //     } catch (error) {
  //       console.error(['Error fetching books', error]);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  const goToAdd = () => {
    navigate('/add');
  };

  const goToLogin = () => {
    navigate('/login');
  };

  const goToSignup = () => {
    navigate('/signup');
  };

  return (
    // <Navbar>
    //   <Container>
    //     <Button>Login</Button>
    //   </Container>
    // </Navbar>
    <div>
      <h1>Tassled Wobbegong Library</h1>
      <div>
        <ul className="header-list">
          <li>Home</li>

          <li onClick={goToAdd}>Add</li>
          <li onClick={goToLogin}>Login</li>
          <li onClick={goToSignup}>Signup</li>
        </ul>
        <hr />
      </div>
      <Booklist booksData={booksData} />
    </div>
  );
};
export default Home;
