const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_03_29_10_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU4LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDg5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDc5LFxuICAgICAgICA1LFxuICAgICAgICAxODEsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjExLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjE5LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY2LFxuICAgICAgICA2NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDM0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA2OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDgwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICA3NSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTIsXG4gICAgICAgIDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA1MixcbiAgICAgICAgMTI0LFxuICAgICAgICAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDcyLFxuICAgICAgICAyOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxODIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDgsXG4gICAgICAgIDg4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1LFxuICAgICAgICA3MSxcbiAgICAgICAgODksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICA3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDg3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTksXG4gICAgICAgIDI4LFxuICAgICAgICA1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgODYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSDVHdmJKSkEyL3E2YTRXN0ZQemZGS1Z3c0xCUS8ybmI2bFBzMS9ENk45MD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5NDc4NTIwNTAxMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNUIwMEU2QUQ0M0ZBOEI3Q0ZDNzRGNzg1NDc2ODE2QkRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MDk4OTY2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlNIanRLeGhBUk9tREphQk04YjRCeHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzM4NjA2MzEtYmYxYy00YTBlLThkZmEtNDc3ZTU3NTUyOGNhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MCxcbiAgICAgIDI1MCxcbiAgICAgIDExNCxcbiAgICAgIDE4NSxcbiAgICAgIDEwLFxuICAgICAgMTg4LFxuICAgICAgMzIsXG4gICAgICAyMjYsXG4gICAgICAyMzYsXG4gICAgICA4NCxcbiAgICAgIDIyMSxcbiAgICAgIDQ5LFxuICAgICAgMjIsXG4gICAgICAxODIsXG4gICAgICAyOCxcbiAgICAgIDMwLFxuICAgICAgMTYxLFxuICAgICAgMjM4LFxuICAgICAgMTA2LFxuICAgICAgMTA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4LFxuICAgICAgMTExLFxuICAgICAgMjA0LFxuICAgICAgMjE3LFxuICAgICAgMjI4LFxuICAgICAgNDksXG4gICAgICAyNTEsXG4gICAgICA5MSxcbiAgICAgIDM1LFxuICAgICAgMTE4LFxuICAgICAgMTY4LFxuICAgICAgNCxcbiAgICAgIDE4OSxcbiAgICAgIDE3MyxcbiAgICAgIDE2NCxcbiAgICAgIDE1NixcbiAgICAgIDY5LFxuICAgICAgMTM2LFxuICAgICAgMTU0LFxuICAgICAgMjQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkI0TVgyV1ZYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc4NTIwNTAxMjo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjE2NTE4MjYwNDY5ODU5OjQxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0syWS80a0RFSTNsZ3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZ29xMS9wQldrNi9ka3VmVDBKT1ZXWlkyZWJUUzE2b1g4bFNUR3JZNklnVT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJDQUtRYUdDSm9iOFo5YlJxaHJobEIvbjBMVXBoMXd2cEw1VG4yQUE0eE1UUkY0aEUrT29Ia3BBZWpkU3FDMG15aUJMbTVwSG5pdWo3dUplOUlyTUlEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIzOHUvbEg3YXBFT2FNUWpmM25vbG1LYjdTVTNQeFlzeU1tTkFDZWJQWDF6VVRFVUw4OVN0K2VqTlpBc1ZDdk5zaURBdHR4cHVTbTFpb2daSzYxQTVnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5NDc4NTIwNTAxMjo0MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI4MDk4OTYxXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
