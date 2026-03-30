const Button = ({ text, type = "primary" }) => {
  const base = "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const styles = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-100",
  };

  return <button className={`${base} ${styles[type]}`}>{text}</button>;
};

export default Button;