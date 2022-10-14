import { Button, Center, Image, Input, Stack, Text } from "@chakra-ui/react";
import { Session } from "next-auth"
import { signIn } from "next-auth/react";
import { useState } from "react";


interface IAuthProps{
    session: Session | null,
    reloadSession: ()=> void;
}


const Auth: React.FC<IAuthProps> = ({reloadSession,session}) =>{
    const [username,setUsername]=useState('');
    
    const onSubmit = async()=>{
        try {
            
        } catch (error) {
            
        }
    }

    return (
        <Center height='100vh'>
            <Stack align='center' spacing='8'>
                {session ? (
                    <>
                        <Text>Create a Username</Text>
                        <Input placeholder="enter a username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                        <Button onClick={onSubmit}>Save</Button>
                    </>
                ): (
                    <>
                    <Text fontSize='3xl'>MessangerQL</Text>
                    <Button onClick={()=>signIn('google')} leftIcon={<Image height='20px'src='/images/googlelogo.png'/>}>Continue with Google</Button>
                    </>
                )}
            </Stack>

        </Center>
    )
}

export default Auth