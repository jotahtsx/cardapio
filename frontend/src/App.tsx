import './App.css'
import { Card } from './components/card/card';
import { useFooData } from './hooks/useFooData';

function App() {

  const {data} = useFooData();

  return (
    <>
      <div className='container'>
        <h1>Cardápio</h1>

        <div className='card-grid'>
          {data?.map(fooData => <Card price={fooData.price} title={fooData.title} image={fooData.image} />)}
        </div>
      </div>
    </>
  )
}

export default App
