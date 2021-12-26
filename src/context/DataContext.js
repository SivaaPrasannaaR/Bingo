import { useState, useEffect, useContext, createContext } from 'react'
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'
import { db } from '../utils/firebase_config'

export const DataContext = createContext({})

export const useDataContext = () => {
  return useContext(DataContext)
}

export const DataContextProvider = ({ children }) => {
  const [newName, setNewName] = useState('')
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')

  const createUser = async (item) => {
    await addDoc(usersCollectionRef, { num: item.num, used: item.used })
    console.log(item)
  }

  const updateUser = async (id, age) => {
    const userDoc = doc(db, 'users', id)
    const newFields = { age: age + 1 }
    await updateDoc(userDoc, newFields)
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    getUsers()
  }, [])

  const contextValue = {
    createUser,
    updateUser,
    deleteUser,
  }

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  )
}
