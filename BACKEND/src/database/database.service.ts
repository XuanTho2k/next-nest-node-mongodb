import { Inject, Injectable } from '@nestjs/common';
import { getConnectionToken } from '@nestjs/mongoose';
import { Mongoose } from 'mongoose';

@Injectable()
export class DatabaseService {
  constructor(@Inject(getConnectionToken()) private mongoose: Mongoose) {
    this.mongoose.connection.on('connected', this.onDatabaseConnected);
  }
  private onDatabaseConnected() {
    console.log('Successfully connected to the database');
  }
}
