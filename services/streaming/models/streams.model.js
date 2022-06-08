const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const streamSchema = new Schema({
  streamTitle: { type: String, required: true, },
  isLive: { type: Boolean, default: false},
  channelId: { type: String, },
  streamDate: { type: Date },
  tags: { type: Array },
  streamServer: { type: String, },
  streamKey: { type: String,  },
  playbackUrl: { type: String, },
  recordingConfigurationArn: { type: String, },
}, {
  timestamps: true,
})

const Stream = mongoose.model('Stream', streamSchema)

module.exports = Stream