import { useRef } from "react"
import { setTrainerSlice } from "../store/slices/trainer.slice"
import { useDispatch, } from "react-redux"
import { useNavigate } from "react-router-dom"

const HomePages = () => {


const inputTrainer = useRef()

const dispatch = useDispatch()

const navigate = useNavigate()

const handleTrainer = e => {
    e.preventDefault()
    setTrainerSlice
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()))
    navigate('/pokedex')


} 

  return (
    <div>
        <h1>Pokedex</h1>
        <h2>Hi Trainer¡</h2>
        <p>To start, please, enter your trainer name</p>
        <form onSubmit={handleTrainer}> 
            <input ref={inputTrainer} type="text" />
            <button>Start</button>
        </form>
    </div>
  )
}

export default HomePages