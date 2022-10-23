import express, { Request, Response } from "express";
const app = express();
const port = 10000;

type Data = { name: string; age: number; url: string };
const sendData: Data = { name: "name", age: 3, url: "tistory.com" };

app.get("/", (req: Request, res: Response) => {
  res.send("adsf");
});

app.get("/get", (req: Request, res: Response) => {
  res.send(sendData);
});

app.listen(port);
