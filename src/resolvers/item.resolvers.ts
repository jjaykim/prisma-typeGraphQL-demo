import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';
import { Room } from '../gql_types/room.types';
import { client } from '../clients/prisma';
import { Item, ItemCategory, ItemLocation } from '../gql_types/item.types';

@Resolver(Item)
export class ItemResolver {
  @FieldResolver(() => ItemCategory)
  async itemCategory(@Root() item: Item) {
    return await client.itemCategory.findUnique({
      where: {
        id: item.itemCategory.id,
      },
    });
  }

  @FieldResolver(() => ItemLocation)
  async itemLocations(@Root() item: Item) {
    return await client.itemLocation.findUnique({
      where: {
        id: item.itemLocation[0].id,
      },
    });
  }

  // @FieldResolver(() => [ItemLocation])
  // async itemLocations(@Root() item: Item) {
  //   console.log('check', item.id);
  //   return await client.itemLocation.findMany({
  //     where: {
  //       roomId: item.id,
  //     },
  //   });
  // }
  // @Query(() => Room)
  // async userRoomData(@Arg('userId') userId: number): Promise<any | null> {
  //   const test = await client.itemLocation.findMany({
  //     where: {
  //       roomId: 1,
  //     },
  //   });
  //   console.info(test);
  //   const room = await client.room.findUnique({
  //     where: {
  //       id: userId,
  //     },
  //     include: {
  //       user: true,
  //       ItemLocation: true,
  //       CatMessage: true,
  //       item: true,
  //     },
  //   });
  //   if (!room) {
  //     return null; // User not found
  //   }
  //   return room;
  // }
}
