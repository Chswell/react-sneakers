import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

const arr =[
  { title: "Мужские Кроссовки Nike Kyrie 7", price: 12999, imageUrl: "/img/sneakers/1.jpg"},
  { title: "Мужские Кроссовки Nike Kyrie 8", price: 15999, imageUrl: "/img/sneakers/2.jpg"},
  { title: "Мужские Кроссовки Nike Kyrie 9", price: 17999, imageUrl: "/img/sneakers/3.jpg"},
  { title: "Мужские Кроссовки Nike Kyrie 10", price: 11999, imageUrl: "/img/sneakers/4.jpg"}
]

function App() {
  return (
    <div className="App">
      <div className="wrapper clear">
        
        <Drawer />
        <Header />
        
        <div className="content p-40">
          <div className="d-flex align-center justify-between mb-40">
            <h1>Все кроссовки</h1>
            <div className="search-block d-flex">
              <img src="/img/search.svg" alt="Search" />
              <input type="text" placeholder="Поиск..." />
            </div>
          </div>
          <div className="d-flex">
            {
              arr.map((obj) => (
                <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl}/>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
