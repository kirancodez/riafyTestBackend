const { json } = require("body-parser");
const company = require("../models/company");
const Company = require("../models/company")

exports.company = ((req, res) => {
    const company = new Company(req.body);
    company.save((err, company) => {
        if(err){
            return res.status(400).json({
                error: "The user Insertion failed"
            })
        }
        return res.json(company);
    })
});

exports.search = ((req, res) => {
    const {keyword} =req.body;
    if(keyword !== ""){
        Company.find({ market_cap: new RegExp('^' + keyword, 'i') }, {_id:1, market_cap:1}).exec((err, docs) => {
            if(err){
                return res.json({error: `something went wrong: ${err}`})
            }
            else{
                return res.json(docs)
            }
        }) 
    }
})

exports.fetchFavs = ((req, res) => {
        Company.find({ featured: true }, {_id:1, market_cap:1}).exec((err, docs) => {
            if(err){
                return res.json({error: `something went wrong: ${err}`})
            }
            else{
                return res.json(docs)
            }
        }) 
})


exports.searchInfo = ((req, res) => {
    const {id} =req.body;
    Company.findById(id).exec((err, company) => {
        if(err){
            return res.json({
                error: err
            })
        }
        return res.json(company);
    })
})
