import client from "../database";
import bcrypt from "bcrypt";

export type Movies = {
  id?: number;
  name: string;
  releaseDate: Date;
};

export type movieUpdate = {
  name?: string | null;
  releaseDate?: Date | null;
};

export class MovieModel {
  async index(): Promise<Movies[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM movies`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get movies ${err}`);
    }
  }

  async show(id: number): Promise<Movies[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM movies where is = ($1)`;
      const result = await conn.query(query, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get movie of id ${id} ${err}`);
    }
  }
  async create(m: Movies): Promise<Movies[]> {
    try {
      const conn = await client.connect();
      const query = `INSERT INTO Movies (name, releaseDate) values ($1, $2)`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot add movie ${err}`);
    }
  }
  async delete(id: number): Promise<Movies[]> {
    try {
      const conn = await client.connect();
      const query = `DELETE FROM movies where id = ($1)`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot delete movie of id ${id} ${err}`);
    }
  }
  async update(id: number, m: movieUpdate): Promise<Movies[]> {
    try {
      const conn = await client.connect();
      const query = `UPDATE TABLE Movies set name= COALESCE($2, name), releaseDate = COALESCE($3, releaseDate) where id = ${id} RETURNING *`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot update movie of id ${id} ${err}`);
    }
  }
}
