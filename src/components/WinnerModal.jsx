import Square from "./Square";
import PropTypes from 'prop-types';

function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Gano: ";

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">{winner && <Square>{winner}</Square>}</header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  winner: PropTypes.oneOfType([
    PropTypes.string, // Para el símbolo del ganador (por ejemplo, "X" o "O")
    PropTypes.bool, // Para indicar empate si `winner` es `false`
    PropTypes.oneOf([null]), // Para cuando no hay ganador aún
  ]),
  resetGame: PropTypes.func.isRequired, // Función obligatoria para reiniciar el juego
};

export default WinnerModal;
