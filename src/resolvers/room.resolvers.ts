import { Resolver, Query, Arg, FieldResolver, Root } from 'type-graphql';
import { Room } from '../gql_types/room.types';
import { client } from '../clients/prisma';
import { Item, ItemCategory, ItemLocation } from '../gql_types/item.types';

@Resolver(Room)
export class RoomResolver {
  @FieldResolver(() => [Item])
  async items(@Root() room: Room) {
    return await client.item.findMany({
      where: {
        room: {
          some: {
            id: room.id,
          },
        },
      },
      include: {
        itemCategory: true,
        itemLocation: {
          where: {
            roomId: room.id,
          },
        },
      },
    });
  }

  // @FieldResolver(() => [ItemLocation])
  // async itemLocations(@Root() room: Room) {
  //   return await client.itemLocation.findMany({
  //     where: {
  //       roomId: room.id,
  //     },
  //   });
  // }

  @Query(() => Room)
  async userRoomData(@Arg('userId') userId: number): Promise<any | null> {
    // const test = await client.itemLocation.findMany({
    //   where: {
    //     roomId: 1,
    //   },
    // });

    // console.info(test);

    const room = await client.room.findUnique({
      where: {
        id: userId,
      },
      include: {
        user: true,
        itemLocations: true,
        chatMessages: true,
        items: true,
      },
    });

    if (!room) {
      return null; // User not found
    }

    return room;
  }
}
