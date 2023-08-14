import { UserRepositoryImpl } from "../../../Data/repositories/UserRepository";
import { User } from "../../entities/User";
import * as ImagePicker from 'expo-image-picker';

const { update } = new UserRepositoryImpl();

export const UpdateUserUserCase = async (user: User, file: ImagePicker.ImagePickerAsset) =>{
    return await update(user, file);
}