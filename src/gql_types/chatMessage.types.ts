import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user.types';
import { Room } from './room.types';

@ObjectType()
export class ChatMessage {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  user: User;

  @Field(() => Room)
  room: Room;

  @Field()
  message: string;

  @Field()
  timestamp: Date;
}
