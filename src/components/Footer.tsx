function Footer() {
  const date = new Date();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <p className="text-center">
        © {date.getFullYear() + ' '} News Center. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
