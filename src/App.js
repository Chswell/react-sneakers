import React from 'react'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'
import Header from './components/Header'
import Drawer from './components/Drawer'
import Home from './components/pages/Home'
import Favorites from './components/pages/Favorites'

const API_URL = 'http://localhost:3001';


function App() {
  

  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
      axios.get(`${API_URL}/items`).then(res => {
        setItems(res.data)
      });
      axios.get(`${API_URL}/cart`).then(res => {
        setCartItems(res.data)
      });
      axios.get(`${API_URL}/favorites`).then(res => {
        setFavorites(res.data)
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post(`${API_URL}/cart`, obj);
    setCartItems(prev => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`${API_URL}/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
    console.log(id);
  }

  const onAddToFavorite = (obj) => {
    if (favorites.find(obj => obj.id === obj.id)) {
      axios.delete(`${API_URL}/favorites/${obj.id}`);
      setFavorites(prev => prev.filter(item => item.id !== obj.id));
    } else {
      axios.post(`${API_URL}/favorites`, obj);
      setFavorites(prev => [...prev, obj]);
    }
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div className="App">
      <div className="wrapper clear">
        
        {cartOpened && <Drawer onRemove={onRemoveItem} items={cartItems} onClickAway={() => setCartOpened(false)} onClose={() => setCartOpened(false)} />}
        <Header 
          onClickCart={() => setCartOpened(true)}
        />
        <Routes>
          <Route path="/" exact 
            element = {
              <Home
                items = {items}
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}
                onChangeSearchInput = {onChangeSearchInput}
                onAddToFavorite = {onAddToFavorite}
                onAddToCart = {onAddToCart}
                onRemoveItem = {onRemoveItem}
              />
            }>
          </Route>
          <Route path="favorites" 
          element = {

          <Favorites 
            items = {favorites}
            onAddToFavorite = {onAddToFavorite}
          />
          
          }></Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
