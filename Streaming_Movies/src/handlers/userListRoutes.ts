import express, { Request, Response } from "express";
import { UserList, userListModel } from "../models/userListModel";

// const secret = process.env.TOKEN_SECRET as string;
const store = new userListModel();

const index = async (req: Request, res: Response) => {
  try {
    const users = await store.index();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const users = await store.show(parseInt(req.params.id));
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

const create = async (req: Request, res: Response) => {
  const userlist: UserList = {
    userID: req.body.userID,
    movieID: req.body.movie,
  };
  try {
    const users = await store.create(userlist);
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

const Delete = async (req: Request, res: Response) => {
  try {
    const users = await store.delete(parseInt(req.params.id));
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json(err);
  }
};

const update = async (req: Request, res: Response) => {
  const userlist: UserList = {
    userID: req.body.userID,
    movieID: req.body.movie,
  };
  try {
    const users = await store.update(parseInt(req.params.id), userlist);
    res.status(200).json(users);
  } catch (err) {
    res.status(200).json(err);
  }
};

const userListRoutes = (app: express.Application) => {
  app.get("/userlist", index);
  app.post("/userlist/", create);
  app.get("userlist/:id", show);
  app.patch("userlist/:id", update);
  app.delete("userlist/:id", Delete);
};

export default userListRoutes;
