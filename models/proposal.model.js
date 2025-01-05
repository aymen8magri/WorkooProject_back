const mongoose = require('mongoose');

const proposalSchema = new mongoose.Schema({
    price: {
        type: Number, // Champ numérique
    },
    days: {
        type: Number, // Champ numérique
    },
    cover: {
        type: String, // Champ texte (chaîne de caractères)
    },
    status: {
        type: Boolean, // Boolean avec une majuscule
        default: false, // Valeur par défaut : false
    },
    idService: {
        type: mongoose.Schema.Types.ObjectId, // Référence vers un document dans la collection "Service"
        ref: 'Service',
    },
    idUser: {
        type: mongoose.Schema.Types.ObjectId, // Référence vers un document dans la collection "User"
        ref: 'User',
    }
});

module.exports = mongoose.model('Proposal', proposalSchema);
