import client from "../database";
import bcrypt from "bcrypt";

export type UserList = {
  id?: number;
  userID: number;
  name: string;
};

export type userUpdate = {
  userID?: number | null;
  name?: string | null;
};

export class userListModel {
  async index(): Promise<UserList[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM userList`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get userList ${err}`);
    }
  }

  async show(id: number): Promise<UserList[]> {
    try {
      const conn = await client.connect();
      const query = `SELECT * FROM userList where is = ($1)`;
      const result = await conn.query(query, [id]);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot get userList of id ${id} ${err}`);
    }
  }
  async create(ul: UserList): Promise<UserList[]> {
    try {
      const conn = await client.connect();
      const query = `INSERT INTO userList (userID, name) values ($1, $2)`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot add userlist ${err}`);
    }
  }
  async delete(id: number): Promise<UserList[]> {
    try {
      const conn = await client.connect();
      const query = `DELETE FROM userList where id = ($1)`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot delete userlist of id ${id} ${err}`);
    }
  }
  async update(id: number, m: userUpdate): Promise<UserList[]> {
    try {
      const conn = await client.connect();
      const query = `UPDATE TABLE userlist set name= COALESCE($2, userID), releaseDate = COALESCE($3, name) where id = ${id} RETURNING *`;
      const result = await conn.query(query);
      conn.release();
      return result.rows;
    } catch (err) {
      throw new Error(`Cannot update userlist of id ${id} ${err}`);
    }
  }
}
