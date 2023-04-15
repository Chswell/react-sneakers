import Card from '../Card'

function Favorites({items, onAddToFavorite}) {
    return (
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <div className='pageTitle'>
              <h1>Мои закладки</h1>
            </div>
          </div>
          <div className="d-flex flex-wrap">
          {
              items.map((item, index) => (
                <Card 
                  key={index}
                  favorited={true}
                  onFavorite={onAddToFavorite}
                  {...item}
                  // onPlus={(obj) => onAddToCart(obj)}
                  // onRemove={(id) => onRemoveItem(id)} 
                  />
              ))
            }
          </div>
        </div>
    )
}

export default Favorites; 