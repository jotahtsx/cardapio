import './create-modal.css'
import { useEffect, useState } from "react"
import { useFooDataMutate } from "../../hooks/useFooDataMutate";
import { FooData } from "../../unterface/FooData";

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue}: InputProps) => {

    
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event=> updateValue(event.target.value)}></input>
        </>
    )
}

export function CreateModal({closeModal}: ModalProps) {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const {mutate, isSuccess, isLoading} = useFooDataMutate();

    const submit = () => {
        const fooData: FooData = {
            title,
            price,
            image
        }

        mutate(fooData)
    }

    useEffect(() => {
        if(!isSuccess) return
            closeModal();
    }, [isSuccess])

    return (
        <div>
            <div className="modal-overlay" onClick={() => {closeModal()}}>
                <div className="modal-body" onClick={e => {e.stopPropagation()}}>
                    <h2>Cadastre uma nova comida no cardápio</h2>
                    <form className="input-container">
                        <Input label="Título" value={title} updateValue={setTitle} />
                        <Input label="Valor" value={price} updateValue={setPrice} />
                        <Input label="Imagem" value={image} updateValue={setImage} />
                    </form>
                    <button onClick={submit} className='btn-store'>
                        {isLoading ? "cadastrando": "cadastrar"}
                    </button>
                    <button onClick={() => {closeModal()}} className='btn-close'>
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
    )
}