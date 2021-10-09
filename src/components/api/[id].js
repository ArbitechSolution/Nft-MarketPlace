import {TronWebNode, ADDRESS, ABI} from "../../config.js"
import Web3 from "web3";
import TronWebNode from "tronweb";
import traits from "../../database/traitsfinal.json";

const infuraAddress = TronWebNode

const HiddenWarriorApi = async(req, res) => {

  const provider = new Web3.providers.HttpProvider(infuraAddress)
  const web3infura = new Web3(provider);
  const HiddenWarriorContract = new web3infura.eth.Contract(ABI, ADDRESS)
  const query = req.query.id;

  const totalHiddenWarriors = 3000;
  if(parseInt(query) < totalHiddenWarriors) {

    const tokenNameCall = await HiddenWarriorContract.methods.HiddenWarriorNames(query).call();
    let tokenName = `#${query}${(tokenNameCall === '') ? "" : ` - ${tokenNameCall}`}`
    
    const signatures = [137,883,1327,1781,2528,2763,3833,5568,5858,6585,6812,7154,8412]
    const trait = traits[parseInt(query)]
    let metadata = {}
    if ( signatures.includes( parseInt( query ) ) ) {
    
      metadata = {
        "name": tokenName,
        "description": "HiddenWarriors is a community-centered enterprise focussed on preserving our research about the emerging reports that several HiddenWarrior species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's HiddenWarriors depends on it.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.HiddenWarriors.co",
        "attributes": [   
          {
            "trait_type": "Signature Series",
            "value": trait["Signature Series"]
          }    
        ]
      }
    } else {
      metadata = {
        "name": tokenName,
        "description": "HiddenWarriors is a community-centered enterprise focussed on preserving our research about the emerging reports that several HiddenWarrior species have begun exhibiting strange characteristics following the recent worldwide pandemic. Our research team located across the globe has commenced efforts to study and document these unusual phenomena. Concerned about parties trying to suppress our research, the team has opted to store our findings on the blockchain to prevent interference. Although this is a costly endeavour, our mission has never been clearer. The fate of the world's HiddenWarriors depends on it.",
        "tokenId" : parseInt(query),
        "image": `https://gateway.pinata.cloud/ipfs/${trait["imageIPFS"]}`,
        "external_url":"https://www.HiddenWarriors.co",
        "attributes": [          
            {
              "trait_type": "Background",
              "value": trait["Background"]
            },
            {
              "trait_type": "HiddenWarrior Base",
              "value": trait["HiddenWarrior Base"]
            },
            {
              "trait_type": "Mouth",
              "value": trait["Mouth"]
            },
            {
              "trait_type": "Eyes",
              "value": trait["Eyes"]
            },
            {
              "trait_type": "Head Gear",
              "value": trait["Head Gear"]
            },
    
        ]
      }
      
    }
    
    res.statusCode = 200
    res.json(metadata)
  } else {
    res.statuscode = 404
    res.json({error: "The HiddenWarrior you requested is out of range"})

  }
  
}

export default HiddenWarriorApi