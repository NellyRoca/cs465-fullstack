const tripsEndpoint = 'http://localhost:3000/api/trips';

const options = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'
    }
};

const travel = async function (req, res) {
    try {
        const response = await fetch(tripsEndpoint, options);

        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }

        const json = await response.json();

        if (!json || !Array.isArray(json)) {
            return res.render("travel", {
                title: "Travlr Getaways",
                trips: [],
                message: "Invalid data received from API"
            });
        }

        if (json.length === 0) {
            return res.render("travel", {
                title: "Travlr Getaways",
                trips: [],
                message: "No trips available at this time"
            });
        }

        return res.render("travel", {
            title: "Travlr Getaways",
            trips: json,
            message: null
        });

    } catch (err) {
        return res.status(500).send(err.message);
    }
};

module.exports = {
    travel
};