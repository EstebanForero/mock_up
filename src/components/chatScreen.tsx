import { Message } from "../data/messages.ts"

interface Props {
  messages: Message[]
}

const ChatScreen = ({ messages }: Props) => {
  return (
    <div
      className="w-[450px] bg-gray-200 h-[900px] my-10 rounded-xl p-4 overflow-scroll"
    >
      {messages.map(message => {
        if (message.isDaySeparator) {
          return <div className="mb-8">
            <hr className="border border-black"/>
            <p className="font-semibold">New chat</p>
          </div>
        }

        return (
          <div className={`flex ${message.recipient === 'user' ? 'justify-start': 'justify-end'}`}>
            <div className={`p-4 rounded-xl mb-5 w-3/4 ${message.recipient === 'user' ? 'bg-white' : 'bg-black text-white'}`}>
              {message.content}
            </div>
          </div>
        );


      })}
    </div>
  )
}

export default ChatScreen
