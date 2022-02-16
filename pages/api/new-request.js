// url: /api/new-request 

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { firstname, lastname, location, dates} = data;
    }
}

export default handler;