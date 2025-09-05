import './App.css'
import type {User} from '@demo/types'
import { checkIsTrueName } from '@demo/utils'

function App() {
  const user : User = {
    id: '1',
    name: 'John Doe',
    email: "teste@email.com",
    createdAt: new Date(),
    updatedAt: new Date()
  }

  return (
    <>
      {checkIsTrueName(user.name) && <h1>Welcome, {user.name}</h1>}
    </>
  )
}

export default App
