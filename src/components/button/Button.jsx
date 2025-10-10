import './Button.css';

const Button = ({
  text,
  variant = 'primary',
  onClick,
  href,
  className = ''
}) => {
  const buttonClass = `custom-button custom-button--${variant} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={buttonClass}
        onClick={onClick}
      >
        <span className="custom-button__text">{text}</span>
        <span className="custom-button__hover-effect"></span>
      </a>
    );
  }

  return (
    <button
      className={buttonClass}
      onClick={onClick}
    >
      <span className="custom-button__text">{text}</span>
      <span className="custom-button__hover-effect"></span>
    </button>
  );
};

export default Button;
