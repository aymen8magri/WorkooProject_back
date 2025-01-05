const express = require('express');
const router = express.Router();
const proposalController = require('../controllers/proposal.controller');

router.post('/create', proposalController.createProposal);
router.get('/service/:id', proposalController.getProposalByServiceId);
router.get('/my/:id', proposalController.getProposalByUserId);
router.get('/:id', proposalController.deleteProposal);
router.put('/:id', proposalController.acceptProposal);



module.exports = router;