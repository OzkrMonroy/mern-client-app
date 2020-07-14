import React from "react";

const Toolbar = ({ user, signOut }) => {
  return (
    <header className="app-header">
      <p className="nombre-usuario">
        Hola <span>{user ? user.userName : ""}</span>
      </p>
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={() => signOut()}>
          Cerrar sesión
        </button>
      </nav>
    </header>
  );
};

export default Toolbar;
