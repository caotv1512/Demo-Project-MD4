import { Request, Response } from "express";
import UserService from "../services/user.service";
const userService = new UserService();
export default class UserController {
  async sendHello(req: Request, res: Response) {
    userService.sendHello(req, res);
  }

  async getAll(req: Request, res: Response) {
    const data = await userService.getAll();
    res.send(data);
  }

  async create(req: Request, res: Response) {
    const data = await userService.create(req.body);
    res.send({ message: "User created successfully", data: data });
  }
}
