// url: /api/new-request 

function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;

        const { first_name, last_name, location, dates } = data;
    }
}

export default handler;