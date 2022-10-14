import {Button} from '@chakra-ui/react'
import {signOut} from "next-auth/react"
interface IChatProps{}


const Chat: React.FC<IChatProps> = (props) =>{
    return (
        <div className="">chat
            <Button onClick={()=> signOut()}> logout</Button>
        </div>

    )
}

export default Chat