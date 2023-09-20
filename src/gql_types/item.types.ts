import { ObjectType, Field, ID } from 'type-graphql';
import { User } from './user.types';
import { Room } from './room.types';
import { LocationType } from '@prisma/client';

@ObjectType()
export class ItemCategory {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;
}

@ObjectType()
export class ItemLocation {
  @Field(() => ID)
  id: number;

  @Field(() => Room)
  room: Room;

  @Field()
  locationType: LocationType;

  @Field()
  x: number;

  @Field()
  y: number;
}

@ObjectType()
export class Item {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field(() => ItemCategory, { nullable: true })
  itemCategory: ItemCategory;

  @Field()
  created_at: Date;

  @Field(() => [User])
  users: User[];

  @Field(() => [ItemLocation], { nullable: true })
  itemLocation: [ItemLocation];
}
