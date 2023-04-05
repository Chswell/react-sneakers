import React from 'react'
import axios from 'axios'
import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'


function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      axios.get('https://64299366ebb1476fcc4c4fbb.mockapi.io/items').then(res => {
        setItems(res.data)
      });
      axios.get('https://64299366ebb1476fcc4c4fbb.mockapi.io/cart').then(res => {
        setCartItems(res.data)
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://64299366ebb1476fcc4c4fbb.mockapi.io/cart', obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://64299366ebb1476fcc4c4fbb.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
    console.log(id);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="App">
      <div className="wrapper clear">
        
        {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClose={() => setCartOpened(false)} />}
        <Header 
          onClickCart={() => setCartOpened(true)}
        />
        
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <div className='pageTitle'>
              <h1>
                {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
              </h1>
            </div>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              {searchValue && 
              <img 
                onClick={() => { setSearchValue('')}} 
                className="clear cu-p" 
                src="/img/btn-remove.svg" 
                alt="Clear" />}
              <input maxLength="29" onChange={onChangeSearchInput} value={searchValue} type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {
              items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((item) => (
                <Card 
                  key={item.id}
                  title={item.title} 
                  price={item.price} 
                  imageUrl={item.imageUrl}
                  onClickFavorite={() => console.log(`Добавили в закладки - ${item.title}`)}
                  onPlus={(obj) => onAddToCart(obj)}  />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
