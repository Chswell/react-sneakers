const Drawer = (props) => {
    return (
        <div className="overlay"> 
            <div className="drawer d-flex flex-column">
                <h2 className="mb-20 justify-between d-flex ">
                    Корзина <img onClick={props.onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                <div className="items">
                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
                    className="cartItemImg"></div>

                    <div className="mr-20 flex">
                    <p className="mb-10">Мужские Кроссовки Nike Kyrie 7</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>

                <div className="cartItem d-flex align-center mb-20">
                    <div style={{backgroundImage: 'url(/img/sneakers/1.jpg)'}} 
                    className="cartItemImg"></div>

                    <div className="mr-20 flex">
                    <p className="mb-10">Мужские Кроссовки Nike Kyrie 7</p>
                    <b>12 999 руб.</b>
                    </div>
                    <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                </div>
                </div>

                <div className="cartTotalBlock">
                <ul>
                    <li>
                    <span>Итого:</span>
                    <div></div>
                    <b>21 498 руб.</b>
                    </li>
                    <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                    </li>
                </ul> 
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="->" /></button>
                </div>
            </div>
        </div>
    );
}

export default Drawer;