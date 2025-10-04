const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto text-center text-gray-600">
        <p>© {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
