import { Module } from '@nestjs/common';
import {OrderModule} from "./order/order.module";
import {MongooseModule} from "@nestjs/mongoose";
import env from "../config";


@Module({
  imports: [
      OrderModule,
      MongooseModule.forRoot(env.dbUrl)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
