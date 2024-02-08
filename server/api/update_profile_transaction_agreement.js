const sharetribeIntegrationSdk = require('sharetribe-flex-integration-sdk');

//This endpoint is used to send new Proposal Agreement from Influencer to Seller
module.exports = (req, res) => {

  const sellerIsAuthor = req.body.sellerIsAuthor;
  const listingSignature = req.body.sig;
  const listingId = req.body.listingId;
  const partyA = req.body.sellerId.uuid;
  const partyB = req.body.influencerId.uuid;
  const agreementAccepted = false;
  const agreementCancel = false;
  const showAgreement = true;
  const startDate = req.body.startDate;
  const dueDate = req.body.dueDate;
  const isSellerListing = req.body.isSellerListing;
  let listExist = false;
  let listingImage = "";
  let amount = 0;
  let description = "";
  let partyAName = "";
  let partyBName = "";
  let partyAProfileImage = "";
  let partyBProfileImage = "";
  let listingDetails = "";
  let alternateListingSellersPayToId = req.body.alternateListingSellersPayToId;

  //console.log(JSON.stringify(req.body.listingId)+ "----------------------Listing-----------------------------");
  //console.log(JSON.stringify(req.body.sellerId)+ "----------------------Seller-----------------------------"+partyA);
  //console.log(JSON.stringify(req.body.influencerId) + "----------------------Influencer-----------------------------"+partyB);
  //console.log(JSON.stringify(req.body.startDate));
  //console.log(req.body.dueDate);
  

 
  // Create new SDK instance
// To obtain a client ID, see Applications in Flex //console

// Create new SDK instance
const integrationSdk = sharetribeIntegrationSdk.createInstance({
   clientId: process.env.SHARETRIBE_INTEGRATION_CLIENT_ID,
   clientSecret: process.env.SHARETRIBE_INTEGRATION_CLIENT_SECRET
 });

 const sdkUtil = sharetribeIntegrationSdk.util;

 

 const separateObject = obj => {
  
   if(listExist)return[];
  
   if(obj === undefined || obj === null)return[];
   const res = [];
   const keys = Object?.keys(obj);
   keys.forEach(key => {
     
     try{
         if(parseInt(obj[key]) !== undefined && obj[key].sig === listingSignature){
          if((partyA === obj[key].partyA && partyB === obj[key].partyB) || (partyB === obj[key].partyA && partyA === obj[key].partyB))
           listExist = true;
         }
         res.push(
           obj[key]
         );
         
     }catch(error){}
    
   });
   return res;
 };

 const checkIfExist = (obj) => {
  
   if(obj === undefined || obj === null)return[];
   const keys = Object?.keys(obj);
   keys.forEach(key => {
     try{
         if(parseInt(obj[key]) !== undefined && obj[key].sig === listingSignature){
          
           listExist = true;
         }
     }catch(error){}
   });
  ;
 };

//Update either a Buyer or Author Info
const updateUser = (isSeller)=>{

  //console.log( +"  --------------------updateUser1------------------------  ");
  const userId = isSeller?partyA:partyB;
 const parameters ={
   id: userId
 };

 //Get Author profile info including profile image Id
 integrationSdk.users.show(
   parameters
 ).then(res => {
  //console.log( +"  --------------------updateUser2------------------------  ");
   const currentListing = res?.data.data.attributes.profile.privateData.Agreements;
   const role = res?.data.data.attributes.profile.protectedData.role;
   
   
   checkIfExist(currentListing);
   if(role==="Freelancer"){
    updateUserProfileData(currentListing,true);
   }else{
    updateUserProfileData(currentListing,false);
   }
   
   
 })

 function updateUserProfileData (currentListings,isInfluencer){
   
  if(listingImage === true || listingImage === false)return;

  //alternateListingSellersPayToId = isInfluencer?alternateListingSellersPayToId:"";

  //Updating Influencer Information
  //Check if the post blong to the Seller or Influencer before updating
   const listingDetails = {
     sig:listingSignature,
     listingId:listingId,   //Id of the listing that is being paid forr
     partyA:partyA,
     partyB:partyB,
     partyAName:partyAName,
     partyBName:partyBName,
     partyAProfileImage:partyAProfileImage,
     partyBProfileImage:partyBProfileImage,
     listingPhoto:listingImage,
     deliveryDate:"",
     status:"Not Started",
     dueDate:""+dueDate,
     submissionDate:"",
     completed:false, 
     agreementAccepted : agreementAccepted,
     agreementCancel : agreementCancel,
     showAgreement : showAgreement,
     startDate :""+startDate,
     dueDate : ""+dueDate,
     amount:amount,  
     description:description,  
     alternateListingSellersPayToId:alternateListingSellersPayToId,
   }

   //console.log(listingImage +"  --------------------listingImage------------------------  ");
   
   const newCon = separateObject(currentListings);
   
   newCon.push(listingDetails);
 
   //convert array to object
   const updatedAgreement = Object.assign({},newCon);

   //compile user data
   const id = isSeller? partyA:partyB;
  integrationSdk.users.updateProfile(
   {
     id: id,
     privateData: {
       Agreements:updatedAgreement,
     },
     metadata: {
       identityVerified: true
     }
   }, {
     expand: true,
     include: ["profileImage"]
   }

 ).then(res => {
   //console.log(`Success with status: ${res.status} ${res.statusText}`);
   })
   .catch(res=>{
     //console.log(`Request failed with status: ${res.status} ${res.statusText}`);
   });
 };

 }

 const getPartyAData = (id)=>{
  //console.log("  --------------------------Done A-------------------------    ");
  const parameters ={
    id: id,
    include: ['profileImage'],
    'fields.image': [
      'variants.square-small',
      'variants.square-small2x',
      'variants.square-xsmall',
      'variants.square-xsmall2x',
    ],
    'imageVariant.square-xsmall': sdkUtil.objectQueryString({
      w: 40,
      h: 40,
      fit: 'crop',
    }),
    'imageVariant.square-xsmall2x': sdkUtil.objectQueryString({
      w: 80,
      h: 80,
      fit: 'crop',
    }),
  };
 
  //Get Author profile info including profile image Id
  integrationSdk.users.show(
    parameters
  ).then(res => {
    //console.log("  --------------------------Done B-------------------------    ");
   
    const {firstName, lastName} = res?.data.data.attributes.profile;
    //const role = res.data.attributes.profile.protectedData.role;
    partyAName = firstName +" "+ lastName;
    
    // if(role==="Influencer"){
    //   //Get the listings for this Influencer
    //   //Then look for the one to use as alternateListingSellersPayToId
    // }
    try{
      //console.log("  --------------------------Done C-------------------------    ");
      partyAProfileImage = res?.data.included[0].attributes.variants["square-small"].url;
    }catch(err){}
    
   
  })
 }

 
 const getPartyBData = (id)=>{
  const parameters ={
    id: id,
    include: ['profileImage'],
    'fields.image': [
      'variants.square-small',
      'variants.square-small2x',
      'variants.square-xsmall',
      'variants.square-xsmall2x',
    ],
    'imageVariant.square-xsmall': sdkUtil.objectQueryString({
      w: 40,
      h: 40,
      fit: 'crop',
    }),
    'imageVariant.square-xsmall2x': sdkUtil.objectQueryString({
      w: 80,
      h: 80,
      fit: 'crop',
    }),
  };
 
  //Get Author profile info including profile image Id
  integrationSdk.users.show(
    parameters
  ).then(res => {
   
    const {firstName, lastName} = res?.data.data.attributes.profile;
    partyBName = firstName +" "+ lastName;
    
    try{
      partyBProfileImage = res?.data.included[0].attributes.variants["square-small"].url;
    }catch(err){}
   
  })
 }

const updateUserAgreement = async (userId) => {
  console.log("  --------------------------Done M-------------------------    ");
  //Get the image url
  await integrationSdk.listings.show({
    id: listingId.uuid,
    include: ["images"],
    "fields.image": ["variants.square-small", "variants.my-variant"],
    // SDK provides a util function to construct image variant URL param strings
    "imageVariant.my-variant": sdkUtil.objectQueryString({
      w: 320,
      h: 640,
      fit: 'scale'
    })
  })
  .then(res => {
    //updateUser(true);
    console.log("  --------------------------Done N-------------------------    ");
    listingImage = res?.data.included[0].attributes.variants["square-small"].url;
    amount = res?.data.data.attributes.price.amount;
    description = res?.data.data.attributes.description;

    console.log(listingImage +"  --------------------------Done O Data-------------------------    " + amount +"          " + description);
   
    updateUser(true);
  })
  .then(res => {
    //console.log("  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa    ");
    updateUser(false);
  })
  .catch(error=>{
      //console.log(error +"  eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee    ");
  })


}

//Get User Data
getPartyAData(partyA);
////console.log("  --------------------------Done1-------------------------    ");
getPartyBData(partyB);
////console.log("  --------------------------Done2-------------------------    ");
updateUserAgreement(partyB);
////console.log("  --------------------------Done3-------------------------    ");
//createListingCopy(listingDetails);
////console.log("  --------------------------Done22222222222-------------------------    ");

 
}

