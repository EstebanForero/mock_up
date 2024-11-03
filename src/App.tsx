import { useState } from 'react'
import ChatScreen from "./components/chatScreen"
import { messages_v1, messages_v2 } from "./data/messages.ts";

function App() {

  const [selectionMade, setSelectionMade] = useState(false)
  const [selection, setSelection] = useState(0)

  const onSelection = (selection: number) => {
    setSelection(selection)
    setSelectionMade(true)
  }

  return (
    <>
      {
        selectionMade ? 
          <div className="bg-black w-full h-screen flex justify-center align-middle">
            <ChatScreen messages={selection == 0 ? messages_v1 : messages_v2}/>          
          </div>: 
          <div className=' w-full h-screen flex justify-around align-middle text-white bg-gray-200 pt-8'>
            <button className="bg-black p-4 rounded-xl h-16" onClick={() => onSelection(1)}>Consultoras</button>
            <button className="bg-black p-4 rounded-xl h-16" onClick={() => onSelection(2)}>Final Client</button>
          </div>
      }

    </>
  )
}

export default App
