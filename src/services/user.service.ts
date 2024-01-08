import { Request, Response } from "express";
import connection from "../db";
import IUser from "../interfaces/user.interface";

export default class UserService {
  sendHello(req: Request, res: Response) {
    res.send("Hello from User Service!");
   }

 async getAll(): Promise<IUser[]> {
      const query: string = "SELECT * FROM users";
      const data:any =  new Promise((resolve, reject) => {
          connection.query( query, (err, data) => {
              if (err) reject(err);
              resolve(data);
          });
      })
     return data
  }

  async create(data: IUser) {
     return new Promise((resolve, reject) => {
          connection.query("INSERT INTO users SET ?", data, (err, result) => {
              if (err) reject(err);
              resolve(result);
          });
      })
  }
}
