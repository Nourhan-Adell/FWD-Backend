import express, { Request, Response } from "express";
import { Movies, MovieModel } from "../models/movieModel";

// const secret = process.env.TOKEN_SECRET as string;
const store = new MovieModel();

const index = async (req: Request, res: Response) => {
  const users = await store.index();
  res.json(users);
};

const show = async (req: Request, res: Response) => {
  const users = await store.show(parseInt(req.params.id));
  res.json(users);
};
const create = async (req: Request, res: Response) => {
  const movie: Movies = {
    name: req.body.name,
    releaseDate: req.body.releaseDate,
  };
  const users = await store.create(movie);
  res.json(users);
};

const Delete = async (req: Request, res: Response) => {
  const users = await store.delete(parseInt(req.params.id));
  res.json(users);
};
const update = async (req: Request, res: Response) => {
  const movie: Movies = {
    name: req.body.name,
    releaseDate: req.body.releaseDate,
  };
  const users = await store.update(parseInt(req.params.id), movie);
  res.json(users);
};

const movieRoutes = (app: express.Application) => {
  app.get("/movies", index);
  app.post("/movies/", create);
  app.get("movies/:id", show);
};

export default movieRoutes;
