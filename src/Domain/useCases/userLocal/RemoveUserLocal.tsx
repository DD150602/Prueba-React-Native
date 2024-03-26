import { UserLocalRepositoryImp } from "../../../Data/repositories/UserLocalRepository";
import { User } from "../../entities/user";
const {remove} = new UserLocalRepositoryImp()

import React from 'react'

const RemoveUserLocalUseCase = async () => {
  return await remove()
}

export default RemoveUserLocalUseCase
