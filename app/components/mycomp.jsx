// components/MyComponentWithScript.js

import React, { useEffect } from 'react';

const MyComponentWithScript = () => {
  useEffect(() => {
    // Coloque seu código de script aqui
    const script = document.createElement('script');
    script.src = './script.js'; // Caminho para o seu script
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpe o script quando o componente for desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Meu Componente com Script</h1>
    </div>
  );
};

export default MyComponentWithScript;
