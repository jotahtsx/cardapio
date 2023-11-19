import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFooData } from './hooks/useFooData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {

  const {data} = useFooData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <>
      <div className='container'>
        <h1>Cardápio</h1>

        <div className='card-grid'>
          {data?.map(fooData => <Card price={fooData.price} title={fooData.title} image={fooData.image} />)}
        </div>
        {isModalOpen && <CreateModal closeModal={handleOpenModal} />}
        <button className='create-food' onClick={handleOpenModal}>
        <span className="material-symbols-outlined">
          add
        </span>
        </button>
      </div>
    </>
  )
}

export default App
