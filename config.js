const fs = require('fs-extra')
if (fs.existsSync('.env')) {
  require('dotenv').config({ path: __dirname + '/.env' })
}
global.disablegroup = process.env.DISABLE_GROUPS || 'false'
global.MsgsInLog = process.env.MSGS_IN_LOG || 'true'
global.MONGODB = process.env.MONGODB_URI || ''
global.DATABASE_URL = process.env.DATABASE_URL || ''
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, '')
  : '254728782591,254762016957,254110853827'
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '')
  : '254728782591,254762016957,254110853827'
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  'https://telegra.ph/file/54efddccf41281ad7ec51.jpg'
global.userImages =
  process.env.USER_IMAGES || 'https://telegra.ph/file/54efddccf41281ad7ec51.jpg'
module.exports = {
  menu: process.env.MENU || '',
  HANDLERS: process.env.PREFIX || '.',
  BRANCH: process.env.BRANCH || 'main',
  VERSION: process.env.VERSION || '2.5.0',
  caption:
    process.env.CAPTION || '*\xA9\xB2\u2070\xB2\u2074 ɢɪғᴛᴇᴅ ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛs*',
  author: process.env.PACK_AUTHER || 'Gifted Md',
  packname: process.env.PACK_NAME || 'Gifted Md',
  botname: process.env.BOT_NAME || 'ɢɪғᴛᴇᴅ ᴍᴅ',
  ownername: process.env.OWNER_NAME || 'ɢɪғᴛᴇᴅ ᴛᴇᴄʜ',
  errorChat: process.env.ERROR_CHAT || '',
  KOYEB_API: process.env.KOYEB_API || 'false',
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || 'DJwc34NaWmhXmDxEeh6YUEmm',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || '',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || '',
  antilink_values: process.env.ANTILINK_VALUES || 'all',
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || '37',
  ELEVENLAB_API_KEY:
    process.env.ELEVENLAB_API_KEY || '3e57046161ccf9ac1f4b9e03828a5fe9',
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || 'private',
  LANG: (process.env.THEME || 'Gifted').toUpperCase(),
}
global.port = process.env.PORT
global.appUrl = process.env.APP_URL || ''
global.email = 'wabots@giftedtechnexus.co.ke'
global.location = 'Eldoret,Kenya'
global.allowJids = process.env.ALLOW_JID || 'null'
global.blockJids = process.env.BLOCK_JID || 'null'
global.timezone = process.env.TZ || process.env.TIME_ZONE || 'Africa/Nairobi'
global.github =
  process.env.GITHUB || 'https://github.com/giftedtechnexus/Gifted-Md'
global.gurl = process.env.GURL || ''
global.website = process.env.GURL || ''
global.devs = '254728782591,254762016957,254110853827'
global.msg_style = process.env.STYLE || '4'
global.session_reset = process.env.SESSION_FLUSH || 'false'
global.gdbye = process.env.GOODBYE || 'false'
global.wlcm = process.env.WELCOME || 'false'
global.warncount = process.env.WARN_COUNT || '5'
global.disablepm = process.env.DISABLE_PM || 'true'
;(global.disablegroup = process.env.DISABLE_GROUPS || 'false'),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || 'true')
global.waPresence = process.env.WAPRESENCE || 'online'
global.readcmds = process.env.READ_COMMAND || 'true'
global.readmessage = process.env.READ_MESSAGE || 'false'
global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUtRcE9WbTR0b2t6Mk43Vm54SC83RnR5Zm1KdE5XYWcvOGo2ZTVYMVYzYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1BVejliZmlPQmY0aFdBNUM2Vk5CV3dBR2VCWks3M3JHamdiMG9YWlRYND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSmtZY0JGU3VMTmEwSHhLYTJUQ0NSS1Y4MjFBL0VzNHpRNlZSMXF5dTFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMb2d1S2FudGFRdkhxdW4ya3RBdmJjcURkcWZEUFEyVDFQcVJHc3BRakNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtGeU9QNTE1cE5qQ2hPd1M5UDVyaFZtdFFUeThzYm9XbWpIbzlXdU45V1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1zam1ESFk5Z2FyY1FndFBkMUkrdEhrZEJuWWRrL3ZkK0sxNG9MQW5IQzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU4yV3VnSllrYURIODhKaFlqWm5BZUVzbjhiamo3aUFEWXdBY0ZWaFcyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUXpvWGZyNDNybnByYWdBbDl2eU90UDF2WnFoNjQrbUxOUHhaSTFDREl5ST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inkwanh2ZkdSeXFLVVBYYSthQUdwcE50cFdhNTJSbnBVK0hsRXlKV09YcHBXNURGWnRhVk5wbkh3YXora0JDa0h3dkh0MXplQ0VNZGFBSGdnQmdjMWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IjRQZ0lHTVFJei9JZWRWMHVTU01URndvZjQ4RzJkcmxXV1ptaHJtQWp3NEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InJONXVhTVNWUk1TVzA1a2pqZjBEeEEiLCJwaG9uZUlkIjoiNjczMzc1NGYtZDExZC00ZTYxLThiOTEtYjZmYmEwMDc5ZThlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNDNDQzS2pzczFmL3lYMnYwd253Szc3ZTcrcz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0d2NUVtZ25LdzhFS3J6Y1d4Tk9oQ2Rvb1EwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTUxMaytjREVJYTh2YmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiTHAwL2J0emJPdlRLNkdnUTlDazNjbUdDcG9DcGdyTVZEa1hSQ3BXdWdnST0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWmhEckovR3cra2FQZXo2dVNTSVZhWWhhQnhuQXFxZDhOeEVoUUo4RS9mYW5Vek9ISVBlaWYraGJmYzI3MHpUbUYrdTI2NUtkNDJEOFZZTlpGNmhRQVE9PSIsImRldmljZVNpZ25hdHVyZSI6Inp2VkpCMVRKUVVIbFNNQnFTK0QreUNrakNCZlkzVXIwa0xmTE8wOVFDekRBNTB0Q21XY3JPS2VxaGRIWkJ6RU9uc2U3amF1RVphN2VtbjJNRi9JemlBPT0ifSwibWUiOnsiaWQiOiIyNjM3ODgwNDk2NzU6ODZAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjYzNzg4MDQ5Njc1Ojg2QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM2ZFAyN2MyenIweXVob0VQUXBOM0poZ3FhQXFZS3pGUTVGMFFxVnJvSUMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjkwNjAzNzF9";
global.readmessagefrom =
  process.env.READ_MESSAGE_FROM || '254728782591,254762016957,254110853827'
global.read_status =
  process.env.AUTO_READ_STATUS || '254728782591,254762016957,254110853827'
global.save_status = process.env.AUTO_SAVE_STATUS || 'false'
global.save_status_from = process.env.SAVE_STATUS_FROM || 'null'
global.read_status_from =
  process.env.READ_STATUS_FROM || '254728782591,254762016957,254110853827'
global.api_smd = 'https://api-smd-1.vercel.app'
global.scan = 'https://session.giftedtechnexus.co.ke'
global.isMongodb = false
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log("Update'" + __filename + "'")
  delete require.cache[file]
  require(file)
})



/**

















const _0x48e817=_0x179d;(function(_0x7d7503,_0x2db558){const _0x5ba850=_0x179d,_0x49814e=_0x7d7503();while(!![]){try{const _0x419ab8=-parseInt(_0x5ba850(0x18a))/0x1*(parseInt(_0x5ba850(0x1cd))/0x2)+-parseInt(_0x5ba850(0x1b1))/0x3*(-parseInt(_0x5ba850(0x194))/0x4)+parseInt(_0x5ba850(0x1ea))/0x5*(parseInt(_0x5ba850(0x1b7))/0x6)+-parseInt(_0x5ba850(0x1e2))/0x7+-parseInt(_0x5ba850(0x1bf))/0x8*(parseInt(_0x5ba850(0x1c4))/0x9)+-parseInt(_0x5ba850(0x1c7))/0xa+parseInt(_0x5ba850(0x185))/0xb;if(_0x419ab8===_0x2db558)break;else _0x49814e['push'](_0x49814e['shift']());}catch(_0x34d954){_0x49814e['push'](_0x49814e['shift']());}}}(_0x5791,0x8a869));const fs=require(_0x48e817(0x1a3));function _0x5791(){const _0x2bb9d4=['.env','Gifted','2.5.0','MsgsInLog','IMAGE','AUTO_SAVE_STATUS','PACK_AUTHER','read_status','location','cache','allowJids','/.env','SESSION_FLUSH','3730937AkWAOu','DISABLE_PM','userImages','scan','readmessage','watchFile','dotenv','DJwc34NaWmhXmDxEeh6YUEmm','334505NVEqSK','DISABLE_GROUPS','GURL','devs','email','private','SAVE_STATUS_FROM','main','APP_URL','OWNER_NAME','4169748VQqJZc','https://github.com/giftedtechnexus/Gifted-Md','Eldoret,Kenya','github','Update\x27','1vNLuLu','exports','BLOCK_JID','REMOVE_BG_KEY','254728782591,254762016957,254110853827','session_reset','OWNER_NUMBER','waPresence','wlcm','isMongodb','4285844bdIhMa','all','appUrl','read_status_from','THUMB_IMAGE','WAPRESENCE','THEME','null','KOYEB_API','replace','config','blockJids','wabots@giftedtechnexus.co.ke','sudo','disablegroup','fs-extra','resolve','ALLOW_JID','msg_style','MENU','gurl','SUDO','toUpperCase','VERSION','false','true','Gifted\x20Md','PORT','GOODBYE','3MpQsBq','3e57046161ccf9ac1f4b9e03828a5fe9','MONGODB_URI','timezone','OPENAI_API_KEY','*©²⁰²⁴\x20ɢɪғᴛᴇᴅ\x20ᴡʜᴀᴛsᴀᴘᴘ\x20ʙᴏᴛs*','30VuNESD','MONGODB','WORKTYPE','MSGS_IN_LOG','https://telegra.ph/file/54efddccf41281ad7ec51.jpg','PACK_NAME','PREFIX','online','8xQPnXl','save_status_from','existsSync','owner','ANTILINK_VALUES','1731591ORllkc','HEROKU_API_KEY','unwatchFile','603120TacMeT','TIME_ZONE','env','save_status','HEROKU_APP_NAME','api_smd','863862WdYVoc','READ_COMMAND','https://api-smd-1.vercel.app','log','DATABASE_URL','READ_MESSAGE','CAPTION','WELCOME'];_0x5791=function(){return _0x2bb9d4;};return _0x5791();}if(fs[_0x48e817(0x1c1)](_0x48e817(0x1d5)))require(_0x48e817(0x1e8))[_0x48e817(0x19e)]({'path':__dirname+_0x48e817(0x1e0)});global['SESSION_ID']=process['env']['SESSION_ID']||'',global[_0x48e817(0x1b8)]=process[_0x48e817(0x1c9)][_0x48e817(0x1b3)]||'',global[_0x48e817(0x1d1)]=process[_0x48e817(0x1c9)][_0x48e817(0x1d1)]||'',global[_0x48e817(0x1a1)]=process[_0x48e817(0x1c9)][_0x48e817(0x1a9)]?process[_0x48e817(0x1c9)]['SUDO'][_0x48e817(0x19d)](/[\s+]/g,''):_0x48e817(0x18e),global[_0x48e817(0x1c2)]=process[_0x48e817(0x1c9)][_0x48e817(0x190)]?process[_0x48e817(0x1c9)][_0x48e817(0x190)][_0x48e817(0x19d)](/[\s+]/g,''):_0x48e817(0x18e),global['THUMB_IMAGE']=process[_0x48e817(0x1c9)][_0x48e817(0x198)]||process[_0x48e817(0x1c9)][_0x48e817(0x1d9)]||_0x48e817(0x1bb),global[_0x48e817(0x1e4)]=process[_0x48e817(0x1c9)]['USER_IMAGES']||_0x48e817(0x1bb),module[_0x48e817(0x18b)]={'menu':process[_0x48e817(0x1c9)][_0x48e817(0x1a7)]||'','HANDLERS':process['env'][_0x48e817(0x1bd)]||'.','BRANCH':process[_0x48e817(0x1c9)]['BRANCH']||_0x48e817(0x182),'VERSION':process[_0x48e817(0x1c9)][_0x48e817(0x1ab)]||_0x48e817(0x1d7),'caption':process[_0x48e817(0x1c9)][_0x48e817(0x1d3)]||_0x48e817(0x1b6),'author':process[_0x48e817(0x1c9)][_0x48e817(0x1db)]||_0x48e817(0x1ae),'packname':process[_0x48e817(0x1c9)][_0x48e817(0x1bc)]||'Gifted\x20Md','botname':process[_0x48e817(0x1c9)]['BOT_NAME']||'ɢɪғᴛᴇᴅ\x20ᴍᴅ','ownername':process[_0x48e817(0x1c9)][_0x48e817(0x184)]||'ɢɪғᴛᴇᴅ\x20ᴛᴇᴄʜ','errorChat':process[_0x48e817(0x1c9)]['ERROR_CHAT']||'','KOYEB_API':process[_0x48e817(0x1c9)][_0x48e817(0x19c)]||_0x48e817(0x1ac),'REMOVE_BG_KEY':process[_0x48e817(0x1c9)][_0x48e817(0x18d)]||_0x48e817(0x1e9),'OPENAI_API_KEY':process[_0x48e817(0x1c9)][_0x48e817(0x1b5)]||'','HEROKU_API_KEY':process[_0x48e817(0x1c9)]['HEROKU_API_KEY']||'','HEROKU_APP_NAME':process['env'][_0x48e817(0x1cb)]||'','antilink_values':process[_0x48e817(0x1c9)][_0x48e817(0x1c3)]||_0x48e817(0x195),'HEROKU':process['env'][_0x48e817(0x1cb)]&&process['env'][_0x48e817(0x1c5)],'aitts_Voice_Id':process['env']['AITTS_ID']||'37','ELEVENLAB_API_KEY':process[_0x48e817(0x1c9)]['ELEVENLAB_API_KEY']||_0x48e817(0x1b2),'WORKTYPE':process[_0x48e817(0x1c9)][_0x48e817(0x1b9)]||process[_0x48e817(0x1c9)]['MODE']||_0x48e817(0x180),'LANG':(process[_0x48e817(0x1c9)][_0x48e817(0x19a)]||_0x48e817(0x1d6))[_0x48e817(0x1aa)]()},global['port']=process['env'][_0x48e817(0x1af)],global[_0x48e817(0x196)]=process['env'][_0x48e817(0x183)]||'',global[_0x48e817(0x1ee)]=_0x48e817(0x1a0),global[_0x48e817(0x1dd)]=_0x48e817(0x187),global[_0x48e817(0x1df)]=process[_0x48e817(0x1c9)][_0x48e817(0x1a5)]||_0x48e817(0x19b),global[_0x48e817(0x19f)]=process[_0x48e817(0x1c9)][_0x48e817(0x18c)]||'null',global[_0x48e817(0x1b4)]=process[_0x48e817(0x1c9)]['TZ']||process[_0x48e817(0x1c9)][_0x48e817(0x1c8)]||'Africa/Nairobi',global[_0x48e817(0x188)]=process[_0x48e817(0x1c9)]['GITHUB']||_0x48e817(0x186),global[_0x48e817(0x1a8)]=process['env'][_0x48e817(0x1ec)]||'',global['website']=process['env']['GURL']||'',global[_0x48e817(0x1ed)]=_0x48e817(0x18e),global[_0x48e817(0x1a6)]=process['env']['STYLE']||'4',global[_0x48e817(0x18f)]=process[_0x48e817(0x1c9)][_0x48e817(0x1e1)]||_0x48e817(0x1ac),global['gdbye']=process[_0x48e817(0x1c9)][_0x48e817(0x1b0)]||_0x48e817(0x1ac),global[_0x48e817(0x192)]=process['env'][_0x48e817(0x1d4)]||_0x48e817(0x1ac),global['warncount']=process[_0x48e817(0x1c9)]['WARN_COUNT']||'5',global['disablepm']=process[_0x48e817(0x1c9)][_0x48e817(0x1e3)]||'true',(global[_0x48e817(0x1a2)]=process[_0x48e817(0x1c9)][_0x48e817(0x1eb)]||_0x48e817(0x1ac),global[_0x48e817(0x1d8)]=process['env'][_0x48e817(0x1ba)]||_0x48e817(0x1ad)),global[_0x48e817(0x191)]=process['env'][_0x48e817(0x199)]||_0x48e817(0x1be),global['readcmds']=process[_0x48e817(0x1c9)][_0x48e817(0x1ce)]||_0x48e817(0x1ad),global[_0x48e817(0x1e6)]=process[_0x48e817(0x1c9)][_0x48e817(0x1d2)]||_0x48e817(0x1ac),global['readmessagefrom']=process[_0x48e817(0x1c9)]['READ_MESSAGE_FROM']||_0x48e817(0x18e),global[_0x48e817(0x1dc)]=process[_0x48e817(0x1c9)]['AUTO_READ_STATUS']||_0x48e817(0x18e),global[_0x48e817(0x1ca)]=process['env'][_0x48e817(0x1da)]||_0x48e817(0x1ac),global[_0x48e817(0x1c0)]=process[_0x48e817(0x1c9)][_0x48e817(0x181)]||_0x48e817(0x19b),global[_0x48e817(0x197)]=process[_0x48e817(0x1c9)]['READ_STATUS_FROM']||_0x48e817(0x18e),global[_0x48e817(0x1cc)]=_0x48e817(0x1cf),global[_0x48e817(0x1e5)]='https://session.giftedtechnexus.co.ke',global[_0x48e817(0x193)]=![];function _0x179d(_0x461275,_0x2d6d27){const _0x579109=_0x5791();return _0x179d=function(_0x179dd3,_0x168c73){_0x179dd3=_0x179dd3-0x180;let _0x463c39=_0x579109[_0x179dd3];return _0x463c39;},_0x179d(_0x461275,_0x2d6d27);}let file=require[_0x48e817(0x1a4)](__filename);fs[_0x48e817(0x1e7)](file,()=>{const _0x5bb729=_0x48e817;fs[_0x5bb729(0x1c6)](file),console[_0x5bb729(0x1d0)](_0x5bb729(0x189)+__filename+'\x27'),delete require[_0x5bb729(0x1de)][file],require(file);});


**/
