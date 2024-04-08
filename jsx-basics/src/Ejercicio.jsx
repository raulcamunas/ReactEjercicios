import { useState } from "react";

function Ejercicio() {
  // Ejercicio 3: Recorrer los elementos de un array y renderizarlos
    const array = ["Elemento 1", "Elemento 2", "Elemento 3"];

    // Ejercicio 4: Mapear un array de objetos para pintarlos
    const arrayObjetos = [
        { id: 1, nombre: "Objeto 1" },
        { id: 2, nombre: "Objeto 2" },
        { id: 3, nombre: "Objeto 3" }
    ];

    // Ejercicio 5: Crear un botón que modifique un valor de false a true y renderice un contenido cuando este valor se modifique
    const [valor, setValor] = useState(false);

    const handleClick = () => {
        setValor(!valor);
    };

    return (
        <div>
        {/* Ejercicio 3 */}
        <h2>Ejercicio 3:</h2>
        <ul>
            {array.map((elemento, index) => (
            <li key={index}>{elemento}</li>
            ))}
        </ul>

        {/* Ejercicio 4 */}
        <h2>Ejercicio 4:</h2>
        <ul>
            {arrayObjetos.map(objeto => (
            <li key={objeto.id}>{objeto.nombre}</li>
            ))}
        </ul>

        {/* Ejercicio 5 */}
        <h2>Ejercicio 5:</h2>
        <button onClick={handleClick}>Cambiar Valor</button>
        {valor && <p>El valor ha sido cambiado a true.</p>}
        </div>
    );
    }

    export default Ejercicio;
