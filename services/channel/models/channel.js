const mongoose = require("mongoose");

const channelSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  _id: mongoose.Schema.Types.ObjectId,
  userId: {
    type: String,
    required: true,
  },
  streamServer: {
    type: String,
    default:""
  },
  streamKey: {
    type: String,
    default:""
  },
  playbackUrl: {
    type: String,
    default:""
  },
  logo: {
    logo_url: {
      type: String,
      default: "",
    },
    logo_cloudinary_id: {
      type: String,
      default: "",
    },
  },
  cover: {
    cover_url: {
      type: String,
      default: "",
    },
    cover_cloudinary_id: {
      type: String,
      default: "",
    },
  },
  description: {
    type: String,
    default: "",
  },
  subscribers: {
    type: Array,
    default: [],
  },
  tags: {
    type: Array,
    default: [],
  },
  videos: {
    type: Array,
    default: [],
  },
});

module.exports = mongoose.model("channel", channelSchema);
