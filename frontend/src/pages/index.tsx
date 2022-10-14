import { Box } from '@chakra-ui/react'
import type { NextPage, NextPageContext } from 'next'
import {getSession, signIn,signOut,useSession} from 'next-auth/react'
import Auth from '../components/Auth/Auth'
import Chat from '../components/Chat/Chat'


const Home: NextPage = () => {
  const {data: session } = useSession()

  const reloadsession =()=>{}
  return (
      <Box>
          {session?.user?.username ? <Chat/> : <Auth session={session} reloadSession={reloadsession}/>}
      </Box>
  )
}

export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context)

  return{
    props:{
      session,
    }
  }
}

export default Home
