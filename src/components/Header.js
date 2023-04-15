import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className="d-flex justify-between align-center p-40">
          <Link to="/">
            <div className="d-flex align-center">
              <img className="mr-20" width={40} height={40} src="img/logo.png" alt="Logo" />
              <div>
                <h3 className="text-uppercase">React Sneakers</h3>
                <p className="opacity-5">Магазин кроссовок</p>
              </div>
            </div>
          </Link>

          <ul className="d-flex">
            <li onClick={props.onClickCart} className="mr-30 cu-p">
            <img className="mr-30" src="/img/cart.svg" alt="Корзина" />
              <span>1205р.</span>
            </li>
            <li>
              <Link to="/favorites">
                <img src="/img/heart.svg" alt="Закладки" />
              </Link>
            </li>
            <li>
              <img className="ml-15" src="/img/user.svg" alt="Пользователь" />
            </li>
          </ul>
        </header>
    );
}

export default Header;