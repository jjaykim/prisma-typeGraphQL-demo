import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user.types';
import { Item } from './item.types';
import { ChatMessage } from './chatMessage.types';

@ObjectType()
export class Room {
  @Field(() => ID)
  id: number;

  @Field(() => User)
  user: User;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;

  @Field(() => [Item], { nullable: true })
  items: Item[];

  @Field(() => [ChatMessage], { nullable: true })
  chatMessages: ChatMessage[];
}
