import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Adotar gato?");

  return(
    <div>
      <h1>{message}</h1>
      <button onClick={() => {
        setMessage("Vendo gatitos disponiveis...");  
            }}>
        Mudar Mensagem
      </button>
    </div>
  )
}

export default App;