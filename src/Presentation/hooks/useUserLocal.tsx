import React, { useEffect, useState } from 'react'
import { User } from '../../Domain/entities/user'
import { GetUserLocalUseCase } from '../../Domain/useCases/userLocal/GetUserLocal'

const useUserLocal = () => {
  const [user, setUser] = useState<User>()
  useEffect(()=>{
    getUserSession()
  },[])

  const getUserSession  = async ()=>{
    const user = await GetUserLocalUseCase()
    setUser(user)
  }

  return {
    user,
    getUserSession
  }
}

export default useUserLocal
