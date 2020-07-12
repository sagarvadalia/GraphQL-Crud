import { Query, Resolver, Mutation, Arg } from 'type-graphql';
import { Stock } from '../entity/Stock';

@Resolver()
export class StockResolver {
  @Query(() => String)
  hello() {
    return 'hi!';
  }
  @Mutation(() => Boolean)
  async createStock(
    @Arg('company') company: string,
    @Arg('symbol') symbol: string,
    @Arg('sector') sector: string
  ) {
    console.log(company, symbol, sector);
    await Stock.insert({ company, symbol, sector });
    return true;
  }
  @Query(() => [Stock])
  stocks() {
    return Stock.find();
  }
}
