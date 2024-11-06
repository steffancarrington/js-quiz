
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer>
      <p>JavaScript Quiz. &copy; {year}</p>
    </footer>
  );
};

export default Footer;
