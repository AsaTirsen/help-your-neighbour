// url: /api/new-request
import prisma from "../../db/prisma";
import { disconnect } from "../../db/disconnect";

async function handler(req, res) {
  console.log("before post" + req.body);
  if (req.method === "POST") {
    try {
      const data = req.body;
      //create a connection to db to POST
      //https://daily-dev-tips.com/posts/nextjs-posting-data-to-postgres-through-prisma/
      const { firstname, lastname, location, details, startdate, enddate } =
        data;
      const request = await prisma.requests.create({
        data: data,
      });
      return res.status(200).json(request);
      if ((res.status = 201)) {
        res.status(201).json({ message: "Request inserted" });
      } else {
        throw new Error(res.status);
      }
    } catch (error) {
      console.log(e.message);
    } finally {
      disconnect(prisma);
    }
  }
}

export default handler;
