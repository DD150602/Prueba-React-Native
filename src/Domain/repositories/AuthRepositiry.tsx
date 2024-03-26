import { ResponseApiDelivery } from "../../Data/sorces/remote/models/ResponseApiDelivery";
import { User } from "../entities/user";
export interface AuthRepository{
  login(email: string, password: string): Promise<ResponseApiDelivery>
  register(user:User):Promise<ResponseApiDelivery>
}