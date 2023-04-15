const Drawer = ({ onClose, onRemove, items = [] }) => {
    return (
        <div className="overlay"> 
            <div className="drawer d-flex flex-column">
                <h2 className="mb-20 justify-between d-flex ">
                    Корзина <img onClick={onClose} className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" />
                </h2>

                {items.length > 0 ? 
                <div>
                    <div className="items">
                        {
                            items.map((obj) => (
                                <div className="cartItem d-flex align-center mb-20">
                                    <div style={{backgroundImage: `url(${obj.imageUrl})`}} 
                                    className="cartItemImg"></div>
            
                                    <div className="mr-20 flex">
                                        <p className="mb-10">{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                                </div>
                            ))
                        }
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
                </div> :
                <div className="cartEmpty d-flex align-center justify-center flex-column flex">
                    <img className="mb-20" width={120} height={120} src="/img/empty-cart.png" alt="" />
                    <h2 className="mb-20">Корзина пустая</h2>
                    <p className="opacity-6 text-center mb-20">Добавьте хотя бы одну пару кроссовок, чтобы оформить заказ</p>
                    <button className="greenButton cu-p" onClick={onClose}>
                        <img className="arrow-back" src="/img/arrow.svg" alt="Back" />
                        Вернуться назад
                    </button>
                </div>
                }
            </div>
        </div>
    );
}

export default Drawer;