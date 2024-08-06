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


global.Owner = ["The one"];
global.OwnerNumber = ["2349019760022"];
global.ownertag = ["2349019760022"]; 
global.OwnerName =  "THE ONE";
global.BotName = "🐦(⁠☉⁠｡⁠☉⁠)⁠!";
global.packname = "THE ONE ";                             //Do not change.
global.author = "🐦The one (⁠☉⁠｡⁠☉⁠)⁠!";                               //Do not change.
global.BotSourceCode = "https://github.com/anonphoenix007/MAKINO-MD-V2"; //Do not change.
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm "; 
global.SupportGroupLink = "https://chat.whatsapp.com/KEg0G3UUs1G39ikdyfF5Pm"; //Do not change!
//global.dbase = process.env.DBASE || "";//Mongodb here
global.AuthorWhatsapp = "https://wa.me/2349019760022"; //Bot creator WhatsApp link,don't change or bot will not work.

global.sessID = process.env.sessID || `{"noiseKey":{"private":{"type":"Buffer","data":"2HHmLzelHSSgMSkbQd0foSYntEFiqb5kVE8GQ/nC/lg="},"public":{"type":"Buffer","data":"9ckhhBI0oDUon20tJvth7++pdz9Dwl3oZJ1Tfowf5Fg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"sKXah4gSlvbbX8/Dzr7JxokwaXno1mLDo9Iz2N07m2E="},"public":{"type":"Buffer","data":"rq9g9JN87DsQDoMq4l26Cht5wxT+q5oxs2zmbr/JsSQ="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"4L3qq7v17HimDp4eI0LXCIjfFxvZ/U6ClKfqaJSkyHM="},"public":{"type":"Buffer","data":"Rnyr2cq5vbF0mq36kQ/2czQWTIoBB7QsRAEfxtb4zxQ="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"2KCJ6jcJNH82dumYuV0Tp21BlQ2ijxOwfvZy1NooLHs="},"public":{"type":"Buffer","data":"dBLYS5yBu6XVkG23SCK8I29nEA0oSWf7ym6NO7J0JVs="}},"signature":{"type":"Buffer","data":"bI7/16IYvBWtlUyRMNmyXfXxrDE2ma2/g0qxhpTMDUwx/c1r6oxG76I0yywfGv0CNnzWhAgaHzH/sPM4MNelBA=="},"keyId":1},"registrationId":152,"advSecretKey":"+00jtYLXzuBqcO5wA+dNCsLx/2l0HH+9EfxX1ZjVhk4=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Ujgdrz7xTSipwKl8KLSprg","phoneId":"adc2ea49-d215-4597-a691-77db89b93e82","identityId":{"type":"Buffer","data":"d8kGV5VK8S7pGD9cR40IL/ma9G4="},"registered":true,"backupToken":{"type":"Buffer","data":"A6VP6jIhYAzx+/fbJ8Rh54nUFzU="},"registration":{},"pairingCode":"HFMTGW6W","me":{"id":"2349019760022:36@s.whatsapp.net"},"account":{"details":"CMiSwKEGEP6lyLUGGCQgACgA","accountSignatureKey":"+QNe3f2YVH+5n3Z3mugCKfdqqZoA7OYl9EFMKf+kNQ0=","accountSignature":"yflvI7esezvNkzfJcmvE2iofuMrsGiPVaKaWZ7X5R+sLn5ac6PXx2AVh9v1FDiBpSh5aQMBPYlPjC97Wzbh6Aw==","deviceSignature":"7uP17gKtLtGpaXZ+NxYxajZlPpMiCA2LWWCRpSW32dlLHXL8tWSOM+/tVQI1M8rgbK+m+nOE81h6721t/X9JAw=="},"signalIdentities":[{"identifier":{"name":"2349019760022:36@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BfkDXt39mFR/uZ92d5roAin3aqmaAOzmJfRBTCn/pDUN"}}],"platform":"android","lastAccountSyncTimestamp":1722946316,"myAppStateKeyId":"AAAAAKHZ"}`
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
