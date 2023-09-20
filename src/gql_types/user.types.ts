import { ObjectType, Field, ID } from 'type-graphql';
import { Room } from './room.types';
import { ChatMessage } from './chatMessage.types';
import { Item } from './item.types';

@ObjectType()
export class User {
  @Field(() => ID)
  id: number;

  @Field()
  username: string;

  @Field()
  level: number;

  @Field()
  xp: number;

  @Field()
  coin: number;

  @Field()
  created_at: Date;

  @Field(() => Room)
  room: Room;

  @Field(() => [UserItem], { nullable: true })
  userItems: UserItem[];

  @Field(() => [ChatMessage], { nullable: true })
  chatMessages: ChatMessage[];
}

@ObjectType()
class UserItem {
  @Field(() => User)
  user: User;

  @Field(() => Item)
  item: Item;
}
