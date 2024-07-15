import { AbstractRepository } from '@app/common';
import { Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from './models/users.schema';

export class UsersRepository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UserDocument.name);

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
