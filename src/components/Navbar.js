import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();
  const isUser = isAuthenticated && user;

  return (
    <Wrapper>
      {isUser && user.picture && <img src={user.picture} alt={user.name} />}
      {isUser && user.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>login</button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
padding: 1.5rem;
margin-bottom: 4rem;
background:transparent;
box-shadow:rgb(0,0,0.9);
text-align: center;
display: grid;
grid-template-columns: auto auto 100px;
justify-content: space-between;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.20) ;
backdrop-filter: blur();

align-items: center;
gap: 1.3rem;
h4 {
  margin-bottom: 0;
  font-weight: 400;
  font-size:30px;
}
img {
  width: 50px !important;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform .5s ease;
  margin-left:15px;
}
img:hover{
   transform: scale(1.8);
   cursor:pointer;
}
button {
  background: transparent;
  border: transparent;
  font-size: 1.2rem;
  text-transform: capitalize;
  letter-spacing: var(--spacing);
  color: #fff;
  cursor: pointer;
  width:95px;
  heigth:50px;
  background:red;
  padding:10px 10px ;
  border-radius:20px;
  margin-right:15px;
}
button:hover{
  background:green;
  transition:1s;
}
`;

export default Navbar;
