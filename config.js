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
global.OwnerNumber = [""];
global.ownertag = [""]; 
global.OwnerName =  "dm to know";
global.BotName = "🐦MAKINO-md-v2";
global.packname = "dm to know";                             //Do not change.
global.author = "🐦Makino md MULTI-DEVICE";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2349019760022"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"kE+NekZa1HulIrZDNSNbfQY1axRoEznIqX8mbJUKtGQ="},"public":{"type":"Buffer","data":"ipbQCN1tg085QadbNylZIf6wORueEnWmy3aOQLzcDR4="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KE2HGjzZonwEqKWY14/E9PeUKWzR++ynA1ASioy8el0="},"public":{"type":"Buffer","data":"EDZILEZuZBnkR/sZ1sM35tuGVlAjtEJA2g7L6rUIfB4="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"iNY10f9FpxhwBbQHxPlIOL9aSeeei1QaBPNApqxIc1M="},"public":{"type":"Buffer","data":"1Obd5gjRmKOYxcEsLlD6agC60rps5BGUcr4gDMT6OxA="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"QCEmNXD/08H+ci/naASUn17nYL/gA+sFPnZfj3WSwno="},"public":{"type":"Buffer","data":"wVRO3ti6o4DnPANVchusJw56mpL90POVA9O6VrKe5Xo="}},"signature":{"type":"Buffer","data":"EUIeTDtjI8t2l7LSYThfDtQgMfDB8/R+bz2p10wM2iZaOKuEu4eYLI9IRSKS75LkdxK/dj2A+b/2D11FcqIliA=="},"keyId":1},"registrationId":235,"advSecretKey":"V08iE3dIEpOHFnK7aqIWpXMCXiyIXjy4wCdSsnX9nyE=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"cZcNPlEARvq43AZaHUU92w","phoneId":"1fc094be-fa21-439f-8ca6-393c24cd1bf0","identityId":{"type":"Buffer","data":"16iMFKg6pqnCmVm+2hOPsk9wiNU="},"registered":true,"backupToken":{"type":"Buffer","data":"k1nZMkLsSnpGBu8sbKtFmoRtRck="},"registration":{},"pairingCode":"6HRT7VYR","me":{"id":"2349019760022:37@s.whatsapp.net"},"account":{"details":"CMiSwKEGEIe8yLUGGCUgACgA","accountSignatureKey":"+QNe3f2YVH+5n3Z3mugCKfdqqZoA7OYl9EFMKf+kNQ0=","accountSignature":"1ahoZupTA3+G2ffQLJu/6YBJ2e5YNQx/fmrk58qyRQx8agKOQkMQnMZPqJejk+DPfWmK9pivmDlPDolawYiTDw==","deviceSignature":"caqtLkjsk32r4LocrN3HOca+c0B+7ieQr8BmHSyQMVo5QdpaLD8I8lYN+rXVewqLjPmy+mv+olV3Mk/wa58qjA=="},"signalIdentities":[{"identifier":{"name":"2349019760022:37@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfkDXt39mFR/uZ92d5roAin3aqmaAOzmJfRBTCn/pDUN"}}],"platform":"android","lastAccountSyncTimestamp":1722949140,"myAppStateKeyId":"AAAAAKHZ"}`
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
