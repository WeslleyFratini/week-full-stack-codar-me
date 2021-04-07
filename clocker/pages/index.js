import { Login, Agenda } from './../components'
import firebase from './../config/firebase'

export { Login } from './../components'

export default function Home () {
  const authenticationUser = firebase.auth().currentUser
  return authenticationUser ? <Agenda /> : <Login />
}
