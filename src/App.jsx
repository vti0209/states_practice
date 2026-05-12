import Counter from './components/counter'
import {Form} from './components/FormInput'
import {Form2} from './components/FormInput'
import {RectangleForm} from './components/RectangleForm'
import {Mausac} from './components/Mausac'
import './App.css'

function App() {
  return (
    <div className="App">
      <Counter />
      <br />
      <Form />
       <br />
      <Form2 />
      <br />
      <RectangleForm />
      <br />
      <Mausac />
    </div>

  )
}

export default App
