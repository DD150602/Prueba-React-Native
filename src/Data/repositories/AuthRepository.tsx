import { AxiosError } from "axios";
import { User } from "../../Domain/entities/user";
import { AuthRepository } from "../../Domain/repositories/AuthRepositiry";
import { ApiDelivery } from "../sorces/remote/api/ApiDelivery";
import { ResponseApiDelivery } from "../sorces/remote/models/ResponseApiDelivery";

export class AuthRepositoryImpl implements AuthRepository {
  async register (user: User):Promise<ResponseApiDelivery>{
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/Users/create', user)
      return Promise.resolve(response.data)
    } catch (error) {
      let e = (error as AxiosError)
      console.log(`error ${JSON.stringify(e.response?.data)}`)
      const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data))
      return Promise.resolve(apiError)
    }
  }
  async login(email: string, password: string): Promise<ResponseApiDelivery> {
    try {
      const response = await ApiDelivery.post<ResponseApiDelivery>('/Users/login', {
        email: email,
        password: password
      })
      return Promise.resolve(response.data)
    } catch (error) {
      let e = (error as AxiosError);
      console.log(`error ${JSON.stringify(e.response?.data)}`);
      const apiError:ResponseApiDelivery = JSON.parse(JSON.stringify(e.response?.data));
      return Promise.resolve(apiError);
    }
  }
}