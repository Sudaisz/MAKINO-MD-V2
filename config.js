const fs = require("fs");
const chalk = require("chalk");

//to enable function - true
//to disable function - false
//
global.available = false;
global.autoReadGc = false;
global.autoReadAll = false;
global.antitags = false;


//auto functioner
global.autoTyping = true;                //make true to enable auto typing
global.autoRecord = true;                //make true to enable auto recording
global.groupevent = true;                //This is the new variable for controlling group event handling.
global.statusseen = false;                 //make true to view statuses 


global.Owner = [""];
global.OwnerNumber = ["2349019760022"];
global.ownertag = [""]; 
global.OwnerName =  "THE ONE";
global.BotName = "🐦Makino-md-v2";
global.packname = "THE ONE ";                             //Do not change.
global.author = "🐦Makino md ᴍᴜʟᴛɪ-ᴅᴇᴠɪᴄᴇ";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2349019760022"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"sNP8mjnLw8VLG6aq11E92FhvXJPHd/L4GM/oQNJhD3Q="},"public":{"type":"Buffer","data":"MbbXtm5TXoDYr+kE2hHa3FizD94xqwNE25b+WG7f9xY="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"MLbH3XuQ0w757wNKC2sybADhAu0vaN2SRsuGs1WJkHk="},"public":{"type":"Buffer","data":"V8tzTzw/2WfpKbelZWsTY+p8m9KhMoyVRA2/NB8EpWk="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"wNpI5Zm7cz57cgLOElHk979I+nB9yjBMAIbC5tAvuWY="},"public":{"type":"Buffer","data":"i4ch2MTqyWkk21MEG3ZO+mj2WxuibyVwvclRuBcJOEA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"YCNN6PiyK1igpuJ+5ki8gCMooSA4oFpDt5yUris5RlA="},"public":{"type":"Buffer","data":"f7FDt6kKL7g1QGweiFlM5KIRaQl/iXORsX3CAfxkkBM="}},"signature":{"type":"Buffer","data":"h5k8yPCKeK27X5wTHwK7ZOZERN1L+Y2ZP8iV35N4uc6eMZ19q+3ATzMiO1ML8wmkLtzEt18qCI4HD3L0dJ9/gQ=="},"keyId":1},"registrationId":22,"advSecretKey":"Ge7CPf5fmrtVWHMGeNVy/2w1U/V0HKTLkJWhqyCRFeg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"5zWbET50T1y9cwN_gt3QEw","phoneId":"606281c9-976a-4c15-8a08-25ce5a47e353","identityId":{"type":"Buffer","data":"5h+gl4Jo7HAW8HrLLv7r5xLwiX4="},"registered":true,"backupToken":{"type":"Buffer","data":"4DibL7rGKn5MVcrmOR7aw+zaq24="},"registration":{},"pairingCode":"45HZBHZQ","me":{"id":"2349019760022:27@s.whatsapp.net"},"account":{"details":"CMiSwKEGEPSJpbUGGBsgACgA","accountSignatureKey":"+QNe3f2YVH+5n3Z3mugCKfdqqZoA7OYl9EFMKf+kNQ0=","accountSignature":"vGt7OJWxP5fgNNA5cINucVWyTOuDJyPNAd+5epAX1f4N37NML2iARIafdmoplCTtNxpW1IfQMxWmIhIF8UILDg==","deviceSignature":"eTzH/t0LzEzvfm6zBRCSWCOJkMeTUKH9wI9Xx6ROHUCsDi3aE1lznBLJQmg/pX6cPtzPhv5nVyXXdWow8ljuhg=="},"signalIdentities":[{"identifier":{"name":"2349019760022:27@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfkDXt39mFR/uZ92d5roAin3aqmaAOzmJfRBTCn/pDUN"}}],"platform":"android","lastAccountSyncTimestamp":1722369281,"myAppStateKeyId":"AAAAAKG9"}`
global.prefa = ["/"]

//
global.BotLogo = fs.readFileSync("./Assets/pic1.jpg");
global.Thumb = fs.readFileSync("./Assets/pic9.jpg");
global.Thumb1 = fs.readFileSync("./Assets/pic5.jpg");
global.ErrorPic = fs.readFileSync("./Assets/pic7.jpg");


//
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []


//
global.mess = {
    jobdone: 'Here you go...',
    useradmin: 'Only group Admin can use the command 😂 ',
    botadmin: 'Make me Admin first 😌📍.',
    botowner: 'Only my *Owner* can use this command,Dont trespass, Baka!',
    grouponly: 'This command is only made for *Groups*, Baka!',
    privateonly: 'This command is only made for *Private Chat*, Baka!',
    botonly: 'Only the *Bot itself* can use this command!',
    waiting: 'Wait a lil bit (¬_¬)ﾉ...',
    nolink: ' provide me *link*, Baka!',
    error: 'An error occurd!',
    banned: 'You cant use the commands because you Are *Banned*',
    bangc: 'This Group is *Banned* from using Commands!',
    nonsfw: 'Dont be a pervert,idiot! This is not a NSFW enabled group!'
    
}
