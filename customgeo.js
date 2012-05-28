var mongoose = require('mongoose'),
  mongoose_auth = require('mongoose-auth'),
  Schema = mongoose.Schema;

var CustomGeoSchema = new Schema({
  latlngs: Array,
  sourceid: String,
  addedToMap: String,
  updated: Date
});

var CustomGeo = mongoose.model('CustomGeo', CustomGeoSchema);

exports.CustomGeo = CustomGeo;
