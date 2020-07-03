import React from 'react';

const Toolbar = () => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">Hola <span>Oscar Monroy</span></p>
      <nav className="nav-principal">
        <a href="#!">Cerrar sesión</a>
      </nav>
    </header>
  );
}
 
export default Toolbar;