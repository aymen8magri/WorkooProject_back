const Service = require('../models/service.model');

//create a service
exports.createService = async (req, res) => {
    try{
        const service = new Service(req.body);
        await service.save();
        res.status(201).json({ message: 'Service created successfully' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//get all services
exports.getServicess = async (req, res) => {
    try{
        const services = await Service.find().populate('idUser','firstname lastname image');
        res.status(200).json(services);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//get my services
exports.getMyService = async (req, res) => {
    try{
        const services = await Service.find({ idUser: req.params.id }).populate('idUser','firstname lastname image');
        res.status(200).json(services);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//get service by id
exports.getServicesById = async (req, res) => {
    try{
        const services = await Service.findById(req.params.id).populate('idUser','firstname lastname image');
        res.status(200).json(services);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//delete service by id
exports.deleteService = async (req, res) => {
    try{
        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Service deleted successfully' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};