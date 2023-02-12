import client from "../database";
import bcrypt from "bcrypt";

export type User = {
  id?: number;
  email: string;
  password: string;
};

export type userUpdate = {
  email?: string | null;
  password?: string | null;
};

export class MovieModel {
  async index(): Promise<User[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM users`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get users ${err}`);
    }
  }

  async show(id: number): Promise<User[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM users where is = ($1)`;
      const result = await conn.query(query, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get movie of id ${id} ${err}`);
    }
  }
  async create(u: User): Promise<void> {
    try {
      const hashedPassword = await bcrypt.hash(u.password, 10);
      const conn = await client.connect();
      const query = `INSERT INTO users (email, password) VALUES ('${u.email}', '${hashedPassword}')`;
      await conn.query(query);
      conn.release();
    } catch (err) {
      throw new Error(`Cannot create user ${err}`);
    }
  }
  async delete(id: number): Promise<User[]> {
    try {
      const conn = await client.connect();
      const query = `DELETE FROM users where id = ($1)`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot delete user of id ${id} ${err}`);
    }
  }
  async update(id: number, m: userUpdate): Promise<User[]> {
    try {
      const conn = await client.connect();
      const query = `UPDATE TABLE users set name= COALESCE($2, name), releaseDate = COALESCE($3, releaseDate) where id = ${id} RETURNING *`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot update movie of id ${id} ${err}`);
    }
  }
}
