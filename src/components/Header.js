const Header = () => {
    return (
        <header className="d-flex justify-between align-center p-40">
          <div className="d-flex align-center">
            <img className="mr-20" width={40} height={40} src="img/logo.png" alt="Logo" />
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Магазин кроссовок</p>
            </div>
          </div>

          <ul className="d-flex">
            <li className="mr-30">
            <img className="mr-10" src="/img/cart.svg" alt="" />
              <span>1205р.</span>
            </li>
            <li>
              <img src="/img/user.svg" alt="" />
            </li>
          </ul>
        </header>
    );
}

export default Header;