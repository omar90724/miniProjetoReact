import Cards from '../../src/Components/Cards/Cards';
import data from '../Backend/data';
import './Home.css';


const Home = () => {
  return (
    <div className="container-fluid">
        <h3 className="text-center mt-5 text-uppercase">Relógios Store 2.0</h3>
        <div className="container py-4">
            <div className="row">
              {data.produtos.map((item, index) => {
                return (
                  <Cards img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index} />
                )
              })}
            </div>
        </div>
    </div>
  )
}

export default Home