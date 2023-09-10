
const clientsModel = require('../../models/clients.model');

exports.findAll = async (filter, projection) => {
  if (filter && projection) {
    return await clientsModel.find(filter, projection);
  } else if (!projection) {
    return await clientsModel.find(filter);
  } else if (!filter && !projection) {
    return await clientsModel.find();
  } else if (!filter) {
    return await clientsModel.find({}, projection);
  }
};

exports.findOneResult = async (filter) => {
  return await findOne(filter);
};

exports.insertOne = async (info) =>{
  return await clientsModel.create(info);
};

exports.updateOne = async (filter, dataUpdated) =>{
  return await clientsModel.findOneAndUpdate(filter, dataUpdated);
};

exports.deleteOne = async(filter) =>{
    return await clientsModel.findOneAndDelete(filter)
};