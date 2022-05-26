const router = require('express').Router();
const Event = require('../models/Event');


router.get('/', (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ notfound: 'No events found' }));
}
);

//create new event
router.post('/', (req, res) => {
    const { startDate, endDate, title, game, location, userId, participantsNumber, description } = req.body;
    if (!startDate || !endDate || !title || !game || !location || !userId || !participantsNumber || !description) {
        return res.json({ error: 'Please provide all fields' });
    }
    const newEvent = new Event({
        startDate: startDate,
        endDate: endDate,
        title: title,
        game: game,
        location: location,
        userId: userId,
        participantsNumber: participantsNumber,
        description: description
    });
    newEvent.save()
        .then(event => res.status(200).json(event))
        .catch(err => res.status(400).json({ error: 'Error: ' + err }));
}
);

//get event by id
router.get('/:id', (req, res) => {
    Event.findById(req.params.id)
        .then(event => res.json(event))
        .catch(err => res.status(404).json({ notfound: 'No event found' }));
}
);

//update event
router.put('/:id', (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(event => res.json(event))
        .catch(err => res.status(404).json({ error: 'No event found' }));
    //update event by id and send back updated event
  

}
);

//delete event
router.delete('/:id', (req, res) => {
    Event.findByIdAndDelete(req.params.id)
        .then(() => res.json({ success: 'Event deleted' }))
        .catch(err => res.status(404).json({ error: 'No event found' }));
}
);

//get events by user id
router.get('/user/:id', (req, res) => {
    Event.find({ userId: req.params.id })
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ notfound: 'No events found' }));
}
);

//get all events
router.get('/all', (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(404).json({ notfound: 'No events found' }));
}
);




module.exports = router;