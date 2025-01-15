import PropTypes from 'prop-types';

const Square = ({ children, isSelected, updateBoard, index }) => {
  const ClassName = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={ClassName}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  updateBoard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default Square;
