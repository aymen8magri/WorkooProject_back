const Proposal = require('../models/proposal.model');

//create a proposal
exports.createProposal = async (req, res) => {
    try {
        const proposal = new Proposal(req.body);
        await proposal.save();
        res.status(201).json({ message: 'Proposal created successfully' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//get proposal by id service 
exports.getProposalByServiceId = async (req, res) => {
    try {
        const proposals = await Proposal.find({ idService: req.params.id }).populate('idUser','firstname lastname image');
        res.status(200).json(proposals);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//get proposal by id user
exports.getProposalByUserId = async (req, res) => {
    try {
        const proposals = await Proposal.find({ idUser: req.params.id }).populate('idService','name');
        res.status(200).json(proposals);
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//delete proposal by id
exports.deleteProposal = async (req, res) => {
    try {
        await Proposal.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Proposal deleted successfully' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
//accept UPDATE  proposal by id
exports.acceptProposal = async (req, res) => {
    try {
        await Proposal.findByIdAndUpdate({ _id:req.params.id }, { status: true });
        res.status(200).json({ message: 'Proposal accepted successfully' });
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};