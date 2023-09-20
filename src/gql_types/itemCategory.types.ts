import { ObjectType, Field, ID } from 'type-graphql';
import { Item } from './item.types';

@ObjectType()
export class ItemCategory {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => [Item])
  items: Item[];
}
