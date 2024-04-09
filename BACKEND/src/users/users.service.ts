import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  findAll(query: any) {
    const {
      _page = 1,
      _limit = 5,
      _sort = 'createAt',
      _order = 'asc',
      _expand,
    } = query;

    const options = {
      page: _page,
      limit: _limit,
      sort: { [_sort]: _order === 'desc' ? -1 : 1 },
    };

    const populateOptions = _expand ? [] : [];

    return [];
  }

  findOne(id: number) {}
  create(user) {}
  edit(id, user) {}
  delete(id) {}
}
