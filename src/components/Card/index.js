import styles from './Card.module.scss'
import React from 'react'

const Card = ({ id, title, imageUrl, price, onFavorite, onPlus, onRemove }) => {
    const [isAdded, setIsAdded] = React.useState(false);
    const [isFavorite, setIsFavorite] = React.useState(false);

    const onClickPlus = () => {
        onPlus({ id, title, imageUrl, price });
        setIsAdded(!isAdded);
    }

    const onClickUnPlus = () => {
        onRemove(id);
        setIsAdded(!isAdded);
    }

    const onClickFavorite = () => {
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={styles.card}>
            <div onClick={onClickFavorite} className={styles.favorite}>
                <img src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="imageCard" />
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                    <img className={styles.plus} onClick={isAdded ? onClickUnPlus : onClickPlus} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="+" />
            </div>
        </div>
    )
}

export default Card;