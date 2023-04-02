import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'
import React from 'react'

function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://64299366ebb1476fcc4c4fbb.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      })
  }, []);

  return (
    <div className="App">
      <div className="wrapper clear">
        
        {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
        <Header 
          onClickCart={() => setCartOpened(true)}
        />
        
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {
              items.map((obj) => (
                <Card 
                  title={obj.title} 
                  price={obj.price} 
                  imageUrl={obj.imageUrl}
                  onClickFavorite={() => console.log(`Добавили в закладки - ${obj.title}`)}
                  onClickPlus={() => console.log(`Нажали плюс - ${obj.title}`)}  />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
