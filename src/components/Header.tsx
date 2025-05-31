const Header = () => {
  return (
    <div className="lg:w-[60%] md:w-[75%] w-[90%] flex justify-between items-center border border-gray-200 ">
      <div className="block md:hidden">Mobile</div>
      <div className="hidden md:block lg:hidden">Tablet</div>
      <div className="hidden lg:block">
        <p>Desktop</p>
      </div>
      <p>Header</p>
      <p>Header</p>
    </div>
  );
};

export default Header;
