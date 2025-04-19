import img from '../assets/footer.jpeg';

const Footer = () => {
  return (
    <footer className="w-full h-[760px]">
      <div
        className="w-full h-full bg-cover bg-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        
      </div>
    </footer>
  );
};

export default Footer;
