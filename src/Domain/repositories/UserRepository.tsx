import React from 'react'
import { User } from '../entities/User'
import { ResponseAPITiendaVirtual } from '../../Data/sources/remote/models/ResponseApiTiendaVirtual'
import * as ImagePicker from 'expo-image-picker';

export interface UserRepository {
  updateWithoutImage(user: User): Promise<ResponseAPITiendaVirtual>;
  update(user: User, file: ImagePicker.ImagePickerAsset): Promise<ResponseAPITiendaVirtual>;
}
