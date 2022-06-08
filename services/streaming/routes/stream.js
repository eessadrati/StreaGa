const express = require("express")
const { IvsClient, CreateChannelCommand, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs");
const router = express.Router()
let Stream = require('../models/streams.model')

router.post("/add", (req, res) => {
    const streamTitle = req.body.streamTitle
    const isLive = req.body.isLive
    const channelId = req.body.channelId
    const streamDate = req.body.streamDate
    const tags = req.body.tags
    const streamServer = req.body.streamServer
    const streamKey = req.body.streamKey
    const playbackUrl = req.body.playbackUrl
    const recordingConfigurationArn = req.body.recordingConfigurationArn

    const newStream = new Stream({
        streamTitle,
        isLive,
        channelId,
        streamDate,
        tags,
        streamServer,
        streamKey,
        playbackUrl,
        recordingConfigurationArn,
    })

    newStream.save()
    .then(() => res.json('Live stream added!'))
    .catch(err => res.status(400).json('Error: ' + err))

})

router.post("/create-channel", async (req, res)  => {
    const config = req.body.recordingConfigurationArn
    const newChannel = req.body.newChannel
    const newBucket = req.body.newBucket

    const client = new IvsClient(config);
    const channelCommand = new CreateChannelCommand(newChannel);
    const bucketCommand = new CreateRecordingConfigurationCommand(newBucket);
    const channelRes = await client.send(channelCommand);
    const bucketRes = await client.send(bucketCommand);

    res.json(channelRes, bucketRes);

    //catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req, res) => {
    Stream.findById(req.params.id)
      .then(stream => res.json(stream))
      .catch(err => res.status(400).json('Error: ' + err));
  })

router.delete("/:id", (req, res) => {
    Stream.findByIdAndDelete(req.params.id)
    .then(() => res.json('Stream informations deleted.'))
    .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;