require('dotenv').config(); 
console.log(process.env.GOOGLE_PROJECT_ID)
const pvtKey = process.env.PRIVATE_KEY.replaceAll("\\n", "\n");
module.exports = {
    googleProjectID:process.env.GOOGLE_PROJECT_ID,
    dialogFlowSessionID:process.env.SESSION_ID,
    dialogFlowSessionLanguageCode:process.env.LANGUAGE,
    googlePrivateKeyId:process.env.PRIVATE_ID,
    googlePrivateKey:pvtKey,
    googleClientEmail:process.env.CLIENT_EMAIL,
}
