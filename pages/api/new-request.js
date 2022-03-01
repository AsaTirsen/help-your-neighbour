// url: /api/new-request 
import prisma from "../../lib/prisma";
async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        //create a connection to db to POST
        //https://daily-dev-tips.com/posts/nextjs-posting-data-to-postgres-through-prisma/
        const { firstname, lastname, startdate, enddate, details, location } = data;
        const request = await prisma.requests.create({
            data: data, 
          });
          return res.status(200).json(request);

    }
}

export default handler;
