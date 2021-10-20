import { StatsModel } from './stats.model';

export interface UserModel {
  user_id: number;
  name: string;
  profileUri: string;
  email: string;
  password: string;

  stats?: StatsModel;
}
