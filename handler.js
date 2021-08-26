/*

Elios and Ben
Recode by Akmalz

*/

const { GroupSettingChange, WAMessageProto, MessageType, prepareMessageFromContent, relayWAMessage } = require('@adiwajshing/baileys')
const { exec } = require('child_process');
const axios = require('axios')
const fs = require('fs')
let FormData = require('form-data')
const afkJs = require('./lib/afk')
const moment = require('moment-timezone');
const os = require('os')
const speed = require('performance-now')
const {
	listmenu,
	gmenu,
	dwmenu,
	smenu,
	emenu,
	srcmenu,
	pmenu,
	rnmenu,
	txmaker,
	imgmaker,
	othmenu,
	info,
	ownerm,
        nimem,
	ingfo,
	mess
} = require('./lib/text')
const { color, getBuffer, convertMp3 } = require('./lib/func')
moment.tz.setDefault('Asia/Jakarta').locale('id');
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType

/*

*/

module.exports = handle = (client, Client) => {
    try {

    	/*MENU*/
    	Client.cmd.on('listmsg', async(data) => {
    	const time = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time < "20:00:00"){
var ucapanWaktu = 'Selamat petang'
                                         }
if(time < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time < "03:30:00"){
var ucapanWaktu = 'Selamat malam'
										}
             sec = []
          sec.push({
            "rows": [
              {
                "title": "List Menu",
                "description": "", 
                "rowId": `${data.prefix}listmenu`
              }, 
              {
                "title": "Group Menu", 
                "description": "", 
                "rowId": `${data.prefix}gmenu`
              }, 
              {
                "title": "Download Menu", 
                "description": "", 
                "rowId": `${data.prefix}dwmenu`
              }, 
              {
                "title": "Sticker Menu", 
                "description": "", 
                "rowId": `${data.prefix}smenu`
              }, 
              {
                "title": "Education Menu", 
                "description": "", 
                "rowId": `${data.prefix}emenu`
              }, 
              {
                "title": "Searching Menu", 
                "description": "", 
                "rowId": `${data.prefix}srcmenu`
              }, 
              {
                "title": "Primbon Menu", 
                "description": "", 
                "rowId": `${data.prefix}pmenu`
              }, 
              {
                "title": "Random Menu", 
                "description": "", 
                "rowId": `${data.prefix}rnmenu`
              }, 
              {
                "title": "Text Maker", 
                "description": "", 
                "rowId": `${data.prefix}txmaker`
              }, 
              {
                "title": "Image Maker", 
                "description": "", 
                "rowId": `${data.prefix}imgmaker`
              }, 
              {
                "title": "Asupan Menu", 
                "description": "", 
                "rowId": `${data.prefix}asupan`
              }, 
              {
                "title": "Random Image", 
                "description": "", 
                "rowId": `${data.prefix}randomimg`
              }, 
              {
                "title": "Anime Menu", 
                "description": "", 
                "rowId": `${data.prefix}nimem`
              }, 
              {
                "title": "Other Menu", 
                "description": "", 
                "rowId": `${data.prefix}othmenu`
              }, 
              {
                "title": "Owner Menu", 
                "description": "", 
                "rowId": `${data.prefix}ownerm`
              }
              ], title: `Pilih Satu ya kak`
              })
          	let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": `MENU J-BOT`,
                  "description": `${ucapanWaktu} kak *${data.pushname}*`,
                  "buttonText": "MENU!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
        }) 
        Client.cmd.on('listmenu', async(data) => {
                   try {
                    data.reply(listmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('gmenu', async(data) => {
         	if(!data.isGroup) return data.reply(mess.group)
                   try {
                    data.reply(gmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('dwmenu', async(data) => {
                   try {
                    data.reply(dwmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('smenu', async(data) => {
                   try {
                    data.reply(smenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('emenu', async(data) => {
                   try {
                    data.reply(emenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('srcmenu', async(data) => {
                   try {
                    data.reply(srcmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('pmenu', async(data) => {
                   try {
                    data.reply(pmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('rnmenu', async(data) => {
                   try {
                    data.reply(rnmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('txmaker', async(data) => {
                   try {
                    data.reply(txmaker(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('nimem', async(data) => {
                   try {
                    data.reply(nimem(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('imgmaker', async(data) => {
                   try {
                    data.reply(imgmaker(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('othmenu', async(data) => {
                   try {
                    data.reply(othmenu(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('infom', async(data) => {
                   try {
                    data.reply(info(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
         Client.cmd.on('ownerm', async(data) => {
         	if(!data.isOwner) return data.reply(mess.ownerOnly)
                   try {
                    data.reply(ownerm(data.prefix)) 
                   } catch(e) {
                     data.reply('' + e) 
                   }
         })
/*ANIME*/
        Client.cmd.on('waifu', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/waifu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Waifu',
				  footerText: 'Press the button below to get a random waifu image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}waifu`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('husbu', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://zxbott.herokuapp.com/husbu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: '*Husbu*\n' + res.data.name,
				  footerText: 'Press the button below to get a random husbu image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}husbu`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('neko', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/sfw/neko`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Neko',
				  footerText: 'Press the button below to get a random neko image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}neko`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
		Client.cmd.on('hentai', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			const res = await axios.get(`https://waifu.pics/api/nsfw/waifu`)
			const mediaMsg = await client.prepareMessageMedia(await getBuffer(res.data.url), 'imageMessage')
            const buttonMessage = {
			      contentText: 'Hentai',
				  footerText: 'Press the button below to get a random hentai image',
                        "contextInfo": {
                              participant: data.sender,
                              stanzaId: data.message.key.id,
                              quotedMessage: data.message.message,
							  },
                              buttons: [
                                {
                                 buttonId: `${data.prefix}hentai`,
                                 buttonText: {
                                    displayText: `⏯️ MORE`
                                  },
                                  "type": "RESPONSE"
                                },
                                  ],
                                   headerType: 4,
                                ...mediaMsg 
                                }
            let zz = await client.prepareMessageFromContent(data.from, {buttonsMessage: buttonMessage}, {})
            client.relayWAMessage(zz, {waitForAck: true}) 
		})
        Client.cmd.on('anime', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}anime [ query ]*\nContoh : ${data.prefix}anime naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/anime?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, episodes, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Anime found!*\n\n*Title:* ${title}\n*Episodes:* ${episodes}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Anime not found')
            }
		})
        Client.cmd.on('manga', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}manga [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/manga?q=${data.body}`)
			const damta = await res.json()
			const { title, synopsis, chapters, url, rated, score, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Manga found!*\n\n*Title:* ${title}\n*Chapters:* ${chapters}\n*Rating:* ${rated}\n*Score:* ${score}\n*Synopsis:* ${synopsis}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Manga not found')
            }
		})
        Client.cmd.on('chara', async (data) => {
			try {
			if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}chara [ query ]*\nContoh : ${data.prefix}manga naruto`)
            data.reply(mess.wait)
            const res = await fetch(`https://api.jikan.moe/v3/search/character?q=${data.body}`)
			const damta = await res.json()
			const { name, alternative_names, url, image_url } = damta.results[0]
			Client.sendFileFromUrl(data.from, image_url, 'p.jpg', `*Character found!*\n\n*Name:* ${name}\n*Alternative names:* ${alternative_names}\n*URL*: ${url}`, data.message)
            } catch(e) {
                data.reply('Character not found')
            }
		})
        /*DOWNLOADER
Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
*/
        Client.cmd.on('ytmp4', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp4 [ link ]*\nContoh : ${data.prefix}ytmp4 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp4/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp4`, `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('ytmp3', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytmp3 [ link ]*\nContoh : ${data.prefix}ytmp3 https://www.youtube.com/watch?v=0maWbr0FHKY`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytmp3/2?apikey=${configs.zeksKey}&url=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        Client.cmd.on('tiktok', async(data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
                      if (data.body == "") return data.reply('Input Link')
               Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/socialmedia/tiktoknowm?url=${data.body}&apikey=BryanRfly`, 'tiktok.mp4', `Video Berhasil Di Dapatkan@${data.sender.split('@')[0]}`,  data.message)
        })
        Client.cmd.on('playvid', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playvid [ query ]*\nContoh : ${data.prefix}playvid amv`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp4/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp4\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${ytm.link}`, 'video.mp4', `Video telah terkirim @${data.sender.split('@')[0]}`, data.message)
            } catch (e) {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        /*
        Client.cmd.on('play', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}play [ link ]*\nContoh : ${data.prefix}play alone`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/ytplaymp3/2?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(res.data.message)
                ytm = res.data.result
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : ${ytm.ext}\n*Source* : ${ytm.source}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                if(Number(ytm.size.split(' MB')[0]) >= 50.00) return Client.sendFileFromUrl(data.from, `${ytm.thumb}`, 'thumb.jpg', `*Data Berhasil Didapatkan!*\n\n*Title* : ${ytm.title}\n*Ukuran* : ${ytm.size}\n*Kualitas* : ${ytm.quality}\n*Ext* : mp3\n*Source* : ${ytm.source}\n*Link* : ${ytm.link}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, data.message)
                Client.sendFileFromUrl(data.from, ytm.thumb, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, ytm.link, `${ytm.title} - Download.mp3`, ``, data.message)
            } catch {
                data.reply('Ups maaf server sedang error atau mungkin apikey invalid')
            }
        })
        */
        Client.cmd.on('ig', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ig [ link ]*\nContoh : ${data.prefix}ig https://www.instagram.com/p/CJ8XKFmJ4al/?igshid=1acpcqo44kgkn`)
            data.reply(mess.wait)
            getresult = await axios.get(`${configs.apiUrl}/api/ig?apikey=${configs.zeksKey}&url=${data.body}`)
            if(getresult.data.status == false) return data.reply(getresult.data.message)
            for(let i = 0; i < getresult.data.result.length; i++) {
                Client.sendFileFromUrl(data.from, getresult.data.result[i].url, `ig.${getresult.data.result[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${getresult.data.owner}\n*Caption*: ${getresult.data.caption}`, data.message);
            }
        })
        
        Client.cmd.on('igstory', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstory [ username ]*\nContoh : ${data.prefix}igstory jessnolimit`)
                data.reply(mess.wait)
                stomr = await axios.get(`${configs.apiUrl}/api/igs?apikey=${configs.zeksKey}&username=${data.body}`)
                if(stomr.data.status == false) return data.reply(stomr.data.message)
                for(let i = 0; i < stomr.data.data.length; i++) {
                    Client.sendFileFromUrl(data.from, stomr.data.data[i].url, `ig.${stomr.data.data[i].type}`, `「 INSTAGRAM 」\n\n*Username*: ${stomr.data.username}\n*Type*: ${stomr.data.data[i].type}`, data.message);
                }
            } catch {
                data.reply('Username tidak ditemukan')
            }
        })
        Client.cmd.on('joox', async (data) => {
            try {
                if(isLimit(data.sender)) return data.reply(mess.limit)
                if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}joox [ lagu ]*\nContoh : ${data.prefix}joox bad liar`)
                data.reply(mess.wait)
                res = await axios.get(`${configs.apiUrl}/api/joox?apikey=${configs.zeksKey}&q=${data.body}`)
                if(res.data.status == false) data.reply(jox.data.message)
                jox = res.data.data[0]
                teks = `*Data berhasil didapatkan!*\n\n*Judul* : ${jox.judul}\n*Artis* : ${jox.artist}\n*Album* : ${jox.album}\n*Ukuran* : ${jox.size}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                Client.sendFileFromUrl(data.from, `${jox.thumb}`, 'thumb.jpg', teks, data.message)
                Client.sendFileFromUrl(data.from, `${jox.audio}`, 'audio.mp3', ``, data.message)
            } catch {
                data.reply('Maaf lagu tidak ditemukan')
            }
        })
        /*RANDOM*/
        Client.cmd.on('asupan', async (data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
            if(data.args[0].toLowerCase() == '1') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanukhty?apikey=${configs.uhykey}`, 'ukhty.mp4', `Nih Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '2') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupan?apikey=${configs.uhykey}`, 'santuy.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '3') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupan?apikey=${configs.uhykey}`, '+62.mp4',`Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '4')  {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanbocil?apikey=${configs.uhykey}`, 'bocil.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '5') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanrikagusriani?apikey=${configs.uhykey}`, 'rika.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '6') {
              Client.sendFileFromUrl(data.from, `${configs.apiUhy}/api/asupan/asupanghea?apikey=${configs.uhykey}`, 'ghea.mp4', `Nih Kak Asupannya`, data.message)
            } else if(data.args[0].toLowerCase() == '7') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/chika?apikey=pais', 'chika.mp4', `Nih Kak Asupannya`, data.message) 
            } else if(data.args[0].toLowerCase() == '8') {
              Client.sendFileFromUrl(data.from, 'https://pencarikode.xyz/api/asupan?apikey=pais', 'random.mp4', 'Nih', data.message)
            } else {
              		let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": `ASUPAN MENU`,
                  "description": `Menu Asupan nya kak ${data.pushname}`,
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "1",
                              "description": "Asupan Ukhty", 
                              "rowId": `${data.prefix + data.command} 1`
                           },
						   {
                              "title": "2",
                              "description": "Asupan Santuy", 
                              "rowId": `${data.prefix + data.command} 2`
                           }, 
                           {
                             "title": " 3", 
                             "description": "Asupan +62", 
                             "rowId": `$${data.prefix + data.command} 3`
                           }, 
                           {
                             "title": " 4", 
                             "description": "Asupan Bocil", 
                             "rowId": `${data.prefix + data.command} 4`
                           }, 
                           {
                             "title": " 5", 
                             "description": "Asupan Rika Gusriani", 
                             "rowId": `${data.prefix + data.command} 5`
                           }, 
                           {
                             "title": " 6", 
                             "description": "Asupan Ghea", 
                             "rowId": `${data.prefix + data. command} 6`
                           }, 
                           {
                             "title": " 7", 
                             "description": "Asupan Chika", 
                             "rowId": `${data.prefix + data.command} 7`
                           }, 
                           {
                             "title": " 8", 
                             "description": "Asupan Random", 
                             "rowId": `${data.prefix + data.command} 8`
                           }
                        ], title: `Awas horny`
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            }
        })
        Client.cmd.on('randomimg', async (data) => {
            if (isLimit(data.sender)) return data.reply(mess.limit) 
            if(data.args[0].toLowerCase() == '1') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/cecan?apikey=${configs.lolkey}`, 'cecan.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '2') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/cogan?apikey=${configs.lolkey}`, 'cogan.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '3') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/bts?apikey=${configs.lolkey}`, 'bts.jpeg','Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '4')  {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/exo?apikey=${configs.lolkey}`, 'exo.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '5') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/estetic?apikey=${configs.lolkey}`, 'estetik.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '6') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/blackpink?apikey=${configs.lolkey}`, 'bpink.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '7') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/waifu?apikey=${configs.lolkey}`, 'waifu.jpeg', 'Nih Ramdom Imagenya', data.message) 
            } else if(data.args[0].toLowerCase() == '8') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/husbu?apikey=${configs.lolkey}`, 'husbu.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '9') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/loli?apikey=${configs.lolkey}`, 'loli.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '10') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/neko?apikey=${configs.lolkey}`, 'neko.jpeg','Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '11')  {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/elf?apikey=${configs.lolkey}`, 'elf.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '12') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/shota?apikey=${configs.lolkey}`, 'shota.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '13') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/sadgirl?apikey=${configs.lolkey}`, 'sadgirl.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else if(data.args[0].toLowerCase() == '14') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/art?apikey=${configs.lolkey}`, 'fanart.jpeg', 'Nih Ramdom Imagenya', data.message) 
            } else if(data.args[0].toLowerCase() == '15') {
              Client.sendFileFromUrl(data.from, `${configs.apiLol}/api/random/wallnime?apikey=${configs.lolkey}`, 'wallnime.jpeg', 'Nih Ramdom Imagenya', data.message)
            } else {
              		let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "RANDOM IMAGE",
                  "description": `Menu Random Image Permintaan Dari ${data.pushname}`,
                  "buttonText": "Klik Disini",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "1",
                              "description": "Random Image Cecan", 
                              "rowId": `${data.prefix + data.command} 1`
                           },
						   {
                              "title": "2",
                              "description": "Random Image Cogan", 
                              "rowId": `${data.prefix + data.command} 2`
                           }, 
                           {
                             "title": "3", 
                             "description": "Random Image BTS", 
                             "rowId": `$${data.prefix + data.command} 3`
                           }, 
                           {
                             "title": " 4", 
                             "description": "Random Image EXO", 
                             "rowId": `${data.prefix + data.command} 4`
                           }, 
                           {
                             "title": " 5", 
                             "description": "Random Image Estetik", 
                             "rowId": `${data.prefix + data.command} 5`
                           }, 
                           {
                             "title": " 6", 
                             "description": "Random Image Blackpink", 
                             "rowId": `${data.prefix + data. command} 6`
                           }, 
                           {
                             "title": " 7", 
                             "description": "Random Image Waifu", 
                             "rowId": `${data.prefix + data.command} 7`
                           }, 
                           {
                             "title": " 8", 
                             "description": "Random Image Husbu", 
                             "rowId": `${data.prefix + data.command} 8`
                           },
						   {
                              "title": " 9",
                              "description": "Random Image Loli", 
                              "rowId": `${data.prefix + data.command} 9`
                           }, 
                           {
                             "title": " 10", 
                             "description": "Random Image Neko", 
                             "rowId": `$${data.prefix + data.command} 10`
                           }, 
                           {
                             "title": " 11", 
                             "description": "Random Image Elf", 
                             "rowId": `${data.prefix + data.command} 11`
                           }, 
                           {
                             "title": " 12", 
                             "description": "Random Image Shota", 
                             "rowId": `${data.prefix + data.command} 12`
                           }, 
                           {
                             "title": " 13", 
                             "description": "Random Image Sad Girl", 
                             "rowId": `${data.prefix + data. command} 13`
                           }, 
                           {
                             "title": " 14", 
                             "description": "Random Image Anime Fanart", 
                             "rowId": `${data.prefix + data.command} 14`
                           }, 
                           {
                             "title": " 15", 
                             "description": "Random Image Wallpaper Anime", 
                             "rowId": `${data.prefix + data.command} 15`
                           }
                        ], title: `Pilih satu ya kak`
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
            }
        })
        Client.cmd.on('fml', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/fml?apikey=${configs.zeksKey}`)
            data.reply(res.data.result)
        })
        Client.cmd.on('randomquran', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/randomquran?apikey=${configs.zeksKey}`)
            rquran = res.data.result
            teks = `*Surah* : ${rquran.nama}\n*Arti* : ${rquran.arti}\n*Ayat* : ${rquran.asma}\n*Keterangan* : ${rquran.keterangan}`
            data.reply(teks)
            Client.sendFileFromUrl(data.from, rquran.audio, 'quran.mp3', ``, data.message)
        })
        Client.cmd.on('estetikpic', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/estetikpic?apikey=${configs.zeksKey}`, 'estetik.jpg', ``, data.message)
        })
        Client.cmd.on('meme', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/memeindo?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, `${res.data.result}`, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('darkjoke', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/darkjokes?apikey=${configs.zeksKey}`)
            Client.sendFileFromUrl(data.from, `${res.data.result}`, 'p.jpg', ``, data.message)
        })
        Client.cmd.on('nickepep', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/nickepep?apikey=${configs.zeksKey}`)
            n = res.data.result
            nick = n[Math.floor(Math.random() * n.length)]
            data.reply(nick)
        })
        Client.cmd.on('quotes', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/quote?apikey=${configs.zeksKey}`)
            que = res.data.result
            teks = `*Author* : ${que.author}\n*Quotes* : ${que.quotes}`
            data.reply(teks)
        })
        Client.cmd.on('pantun', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/pantun?apikey=${configs.zeksKey}`)
            data.reply(res.data.result.pantun)
        })
        Client.cmd.on('limit', async (data) => {
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            if(dataUser[data.sender].premium) return data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\nAnda adalah user premium yang memiliki akses tanpa batas limit!`)
            limits = configs.maxLimit - dataUser[data.sender].limit
            if(limits <= 0) return data.reply("```" + `Limit anda sudah habis` + "```")
            data.reply(`Hai @${data.sender.split('@')[0]} 👋🏻\n Limit anda tersisa ${limits || 30}\nLimit setiap hari di reset jam 00.00\nJika anda ingin mendapatkan unlimited limit silahkan chat owner bot ketik !owner`)
        })
        Client.cmd.on('sourcecode', async (data) => {
		data.reply(`Bot ini di buat dengan bahasa pemrograman Node.js / JavaScript

Original source code bot : https://github.com/justpiple/whatsapp-bot

Source code yang dipakai : https://github.com/Dvnz99/wabot

Apabila terjadi error, kalian bisa menghubungi owner bot ketik ${data.prefix}owner`)
		})
        /*OWNER*/
        Client.cmd.on('setpp', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(client.user.jid, dlfile)
            data.reply(`success!, profile picture has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('block', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "add"))
            data.reply(`Succecs block @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('unblock', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            data.mentionedJidList.forEach(jids => client.blockUser(jids, "remove"))
            data.reply(`Succecs unblock @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)
        })
        Client.cmd.on('addvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(!data.isQuotedAudio) return data.reply('Reply vn/audio!')
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(vn.includes(data.body)) return data.reply('Nama vn sudah ada, harap gunakan nama lain')
            nv = await data.downloadMediaQuotedMessage()
            fs.writeFileSync(`./lib/vn/${data.body}.mp3`, nv)
            global.vn.push(data.body)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn))
            data.reply(`Berhasil menambahkan vn ${data.body} dari database`)
        })
        Client.cmd.on('delvn', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Kirim perintah ${data.prefix}addvn [ nama ]\nContoh ${data.command}addvn hai`)
            if(!vn.includes(data.body)) return data.reply('vn tidak ditemukan!')
            global.vn.splice(vn.indexOf(data.body), 1)
            fs.writeFileSync('./lib/json/vn.json', JSON.stringify(vn, null, 2))
            fs.unlinkSync(`./lib/vn/${data.body}.mp3`)
            data.reply(`Berhasil mengahpus vn ${data.body} dari database`)
        })
        Client.cmd.on('listvn', async (data) => {
            let listvn = 'Ketik nama vn untuk mendownload vn\n\n*List vn*:\n\n'
            vn.forEach((vnn, i) => listvn += `*${i+1}*. ${vnn}\n`)
            data.reply(listvn)
        })
        Client.cmd.on('tebakgambar', async (data) => {
			if(isLimit(data.sender)) return data.reply(mess.limit)
			if (global.tebakgambar[data.from] && global.tebakgambar[data.from].id) return data.reply("Masih ada soal yang berjalan")
            const getSoal = await axios.get(`${configs.apiUrl}/api/tebakgambar?apikey=${configs.zeksKey}`)
			ses = Date.now()
			send = await Client.sendFileFromUrl(data.from, getSoal.data.result.soal, "soal.jpg", "Waktu menjawab 30 detik!", data.message)
			global.tebakgambar[data.from] = {jawaban: getSoal.data.result.jawaban, id: ses}
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 20 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from,"Waktu tersisa 10 detik", send)
			await sleep(10000)
			if (global.tebakgambar[data.from].id != ses) return
			Client.reply(data.from, "Waktu habis", send)
			Client.reply(data.from,`Jawabannya adalah: ${getSoal.data.result.jawaban}`, send)
			global.tebakgambar[data.from] = {}
			
        })
        Client.cmd.on('clearall', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const getAll = await client.chats.all()
            getAll.forEach(async chats => {
                if(chats.jid.endsWith('@g.us')) await client.modifyChat(chats.jid, 'clear')
                else await client.modifyChat(chats.jid, 'delete')
            })
            data.reply('OkE')
        })
        Client.cmd.on('resetlimit', async (data) => {
            if(!data.isOwner) return data.reply('Owner only!')
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            for(users in dataUser) {
                dataUser[users].limit = 0
            }
            fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            console.log(color('[ INFO ]', 'cyan'), 'LIMIT RESETED!')
            data.reply('Sukses!')
        })
        Client.cmd.on('bc', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == '') return
            var list = await client.chats.all()
            mediaBuffer = data.type == 'extendedTextMessage' ? await data.downloadMediaQuotedMessage() : data.type == 'imageMessage' || data.type == 'videoMessage' ? await data.downloadMediaMessage() : null
            var ext = data.isQuotedImage ? 'jpg' : 'mp4'
            list.forEach(async dataC => {
                if(mediaBuffer) Client.sendFileFromBase64(dataC.jid, mediaBuffer.toString('base64'), `bc.${ext}`, `*BOT BROADCAST*\n\n${data.body} ${dataC.jid.endsWith('@g.us') ?'\n\n_#izin admin grup _*'+dataC.name+'*_' : ''}`)
                else Client.sendText(dataC.jid, `*BOT BROADCAST*\n\n${data.body}\n\n_#izin admin grup *${dataC.name}*_`)
            })
        })
        Client.cmd.on('join', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            if(data.body == "") return data.reply(`Link nya?`)
            Client.acceptInviteLink(data.body).then(() => data.reply('ok')).catch(() => data.reply('failed'))
        })
        Client.cmd.on('owner', async (data) => {
            Client.sendContact(data.from, { number: configs.ownerList[0].split('@')[0], name: 'owner' }, data.message)
        })
        Client.cmd.on('fetch', async(data) => {
           if (isLimit(data.sender)) return data.reply(mess.limit)
           if (data.body == "") return data.reply('input url')
           axios.get(`${data.body}`)
           .then(res => {
             data.reply(res.data)
           })
           .catch(e => {
             data.reply('' + e)
           })
         })
        Client.cmd.on('premium', async (data) => {
            if(!data.isOwner) return data.reply(mess.ownerOnly)
            const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
            dataToPr = data.mentionedJidList.length ? data.mentionedJidList : [data.args[1] + "@s.whatsapp.net"] || null

            if(data.args[0].toLowerCase() == 'add') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums]) dataUser[nums] = {
                        limit: 0
                    }
                    dataUser[nums].premium = true
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
                data.reply(`Berhasil menambahkan user premium @${dataToPr.join(' @').replace(/@s.whatsapp.net/g, '')}`)
            } else if(data.args[0].toLowerCase() == 'del') {
                if(data.args.length < 2) return data.reply('what?')
                dataToPr.forEach(nums => {
                    if(!dataUser[nums] || !dataUser[nums].premium) return data.reply(`User @${nums.split('@')[0]} not premium!`)
                    dataUser[nums].premium = false
                    data.reply(`berasil menghapus user premium @${nums.split('@')[0]}`)
                })
                fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
            } else if(data.args[0].toLowerCase() == 'list') {
                strings = `LIST PREMIUM\n\n`
                for(var [num, val] of Object.entries(dataUser))
                    if(val.premium) strings += `~> @${num.split('@')[0]}\n`
                data.reply(strings)
            } else data.reply(`do u need example?\n\nExample:\n${data.prefix}premium add @0 \nor\n${data.prefix}premium add 62xxxx`)
        })
        /*NEWS*/
        Client.cmd.on('tribunnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/tribunews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 TRIBUNNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Link*: ${ttt[i].url}\n\n`
            }
            await data.reply(teks)
        })
        Client.cmd.on('liputannews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/liputan6?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 LIPUTANNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].ket}\n*Kategori*: ${ttt[i].category}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        Client.cmd.on('foxnews', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            res = await axios.get(`${configs.apiUrl}/api/foxnews?apikey=${configs.zeksKey}`)
            if(res.data.status == false) data.reply(res.data.message)
            ttt = res.data.result
            var teks = `*「 FOXNEWS 」*\n\n`
            for(let i = 0; i < ttt.length; i++) {
                teks += `*Title* : ${ttt[i].title}\n*Waktu* : ${ttt[i].time}\n*Keterangan*: ${ttt[i].content}\n*Negara*: ${ttt[i].country}\n*Link*: ${ttt[i].url}\n\n`
            }
            await Client.sendFileFromUrl(data.from, ttt[0].thumb, 'p.jpg', teks, data.message)
        })
        /*GROUP*/
        Client.cmd.on('afk', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            timesNow = moment(data.t * 1000).format('YYYY-MM-DD HH:mm:ss')
            afkJs.addAfk(data.from, data.sender, data.body, timesNow)
            Client.sendText(data.from, "```" + `${data.pushname} [@${data.sender.split('@')[0]}] sedang AFK\n\nAlasan: ${data.body}\nTime: ${timesNow}` + "```")
        })
	     Client.cmd.on('welcome', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].welcome) return data.reply('Already on!')
                dataGc[data.from].welcome = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].welcome) return data.reply('Already off!')
                dataGc[data.from].welcome = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
	    Client.cmd.on('play', async (data) =>{
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}youtubedl [ query ]*\nContoh : ${data.prefix}youtubedl Alan walker`)
            data.reply(mess.wait)
			axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`).then((xres) =>{
			if (!xres.data.status || !xres.data.result) return data.reply(xres.data.message)
			secs = []
			xres.data.result.splice(10, xres.data.result.length)
			xres.data.result.forEach((xres, i) =>{
				secs.push({
                        "rows": [
                           {
                              "title": "MP3",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp3 ${xres.video.url}`
                           },
						   {
                              "title": "MP4",
							  description: `Title: ${xres.video.title}\n\nUploader: ${xres.uploader.username}`,
                              "rowId": `${data.prefix}ytmp4 ${xres.video.url}`
                           }
                        ], title: i+1})
			})
			let po = client.prepareMessageFromContent(data.from, {
				  "listMessage":{
                  "title": "*YOUTUBE DOWNLOAD*",
                  "description": `*Result for : ${data.body}*\n*Download video by click button bellow*`,
                  "buttonText": "Result",
                  "listType": "SINGLE_SELECT",
                  "sections": secs}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})	
			})
        })
        Client.cmd.on('leave', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].leave) return data.reply('Already on!')
                dataGc[data.from].leave = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].leave) return data.reply('Already off!')
                dataGc[data.from].leave = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antitagall', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antitagall) return data.reply('Already on!')
                dataGc[data.from].antitagall = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antitagall) return data.reply('Already off!')
                dataGc[data.from].antitagall = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
		Client.cmd.on('antilink', (data) => {
            if(!data.isGroup) return data.reply(mess.admin)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            const dataGc = JSON.parse(fs.readFileSync('./lib/json/dataGc.json'))
            if(data.args[0].toLowerCase() == 'on') {
                if(dataGc[data.from].antilink) return data.reply('Already on!')
                dataGc[data.from].antilink = true
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else if(data.args[0].toLowerCase() == 'off') {
                if(!dataGc[data.from].antilink) return data.reply('Already off!')
                dataGc[data.from].antilink = false
                fs.writeFileSync('./lib/json/dataGc.json', JSON.stringify(dataGc))
                data.reply('Sukses!')
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh on/off",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "on",
                              "rowId": `${data.prefix}${data.command} on`
                           },
						   {
                              "title": "off",
                              "rowId": `${data.prefix}${data.command} off`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('revoke', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.revokeInvite(data.from)
            data.reply(`Linkgroup berhasil di reset oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('group', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.args[0] && data.args[0].toLowerCase() == 'open') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, false)
                data.reply(`Group telah dibuka oleh admin @${data.sender.split('@')[0]}`)
            } else if(data.args[0] && data.args[0].toLowerCase() == 'close') {
                client.groupSettingChange(data.from, GroupSettingChange.messageSend, true)
                data.reply(`Group telah ditutup oleh admin @${data.sender.split('@')[0]}`)
            } else {
				let po = client.prepareMessageFromContent(data.from, {
					"listMessage":{
                  "title": "*WHATSAPP-BOT*",
                  "description": "pilh open/close",
                  "buttonText": "COMMANDS",
                  "listType": "SINGLE_SELECT",
                  "sections": [
                     {
                        "rows": [
                           {
                              "title": "open",
                              "rowId": `${data.prefix}${data.command} open`
                           },
						   {
                              "title": "close",
                              "rowId": `${data.prefix}${data.command} close`
                           }
                        ]
                     }]}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
			}
        })
        Client.cmd.on('bye', (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            client.groupLeave(data.from)
        })
        Client.cmd.on('tagall', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            text = `『 *_TAG ALL_* 』\n\n*Total member*: ${data.groupMetadata.participants.length}​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​


`
            data.groupMetadata.participants.forEach((member, i) => {
                text += `${i+1}. ⤷@${member.jid.split('@')[0]}\n`
            })
            Client.sendText(data.from, text)
        })
        Client.cmd.on('setgroupicon', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(!data.isQuotedImage && data.type != 'imageMessage') return data.reply(`Wrong format!, please send image with caption ${data.prefix}setgroupicon, or reply image with ${data.prefix}setgroupicon`)
            const getbuff = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
            const dlfile = await client.downloadMediaMessage(getbuff)
            client.updateProfilePicture(data.from, dlfile)
            data.reply(`success!, group icon has been changed by @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupname', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateSubject(data.from, `${data.body}`)
            data.reply(`Nama group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('setgroupdesc', async (data) => {
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ text ]*\nContoh : ${data.prefix}${data.command} Elios`)
            client.groupUpdateDescription(data.from, `${data.body}`)
            data.reply(`Deskripsi group telah diganti oleh admin @${data.sender.split('@')[0]}`)
        })
        Client.cmd.on('promote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupMakeAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menambahkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')} sebagai admin.`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('demote', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupDemoteAdmin(data.from, data.mentionedJidList).then(() => data.reply(`Perintah diterima, menghapus admin @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('kick', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.mentionedJidList.length == 0) return data.reply(`Kirim perintah *${data.prefix}${data.command} [ @tag ]*\nContoh : ${data.prefix}${data.command} @0`)
            client.groupRemove(data.from, data.mentionedJidList).then(() => data.reply(`Berhasil mengeluarkan @${data.mentionedJidList.join(' @').replace(/@s.whatsapp.net/g, '')}`)).catch(() => data.reply('Gagal!'))
        })
        Client.cmd.on('add', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            if(!data.isGroup) return data.reply(mess.group)
            if(!data.isAdmin) return data.reply(mess.admin)
            if(!data.botIsAdmin) return data.reply(mess.botAdmin)
            if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ nomor ]*\nContoh : ${data.prefix}${data.command} 6285736996646`)
            args = data.args.map(mp => mp + "@s.whatsapp.net")
            client.groupAdd(data.from, args).then(() => data.reply(`Berhasil menambahkan @${data.args.join(' @')}`)).catch(() => data.reply('Unable to invite'))
        })
        Client.cmd.on('testing', async (data) => {
            console.log(client)
        })
        /*IMAGE MAKER*/
        Client.cmd.on('missing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'missing.jpeg')
                text = data.body.split('|')
                const getAxios = await axios(`${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                text = data.body.split('|')
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/missing-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}&text1=${text[0]}&text2=${text[1]}&text3=${text[2]}`, 'missing.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, Example: tag someone or reply image\n${data.prefix}missing lost|idk|call xxxxx|@${client.user.jid.split('@')[0]}`)

        })
        Client.cmd.on('calender', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/calender?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('removebg', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}calender`)

        })
        Client.cmd.on('drawing', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/draw-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        Client.cmd.on('sketch', async (data) => {
            if(isLimit(data.sender)) return data.reply(mess.limit)
            data.reply(mess.wait)
            if(data.isQuotedImage || data.type == 'imageMessage') {
                const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                bodyForm = new FormData()
                bodyForm.append('image', getbuffs, 'myimg.jpeg')
                const getAxios = await axios(`${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}`, {
                    method: 'POST',
                    responseType: "arraybuffer",
                    headers: {
                        ...bodyForm.getHeaders()
                    },
                    data: bodyForm.getBuffer()
                })
                Client.sendFileFromBase64(data.from, getAxios.data.toString('base64'), 'p.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else if(data.mentionedJidList.length > 0) {
                ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                if(!ppUrl) return data.reply('Profile picture not found!')
                Client.sendFileFromUrl(data.from, `${configs.apiUrl}/api/sketch-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, 'calender.jpg', '*Gambar berhasil dibuat!* ', data.message)
            } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}drawing`)

        })
        //If you want case method
        Client.cmd.on('*', async (data) => {
            const {
                args,
                body,
                message,
                prefix,
                from,
                sender,
                command,
                isOwner,
                type,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = data
            switch(command.toLowerCase()) {
                                case 'self':
					if (!isOwner) return data.reply(mess.ownerOnly)
					if (Client.self) return data.reply('Already Self Mode')
					Client.self = true
					data.reply('OK')
				break
				case 'public':
					if (!isOwner) return data.reply(mess.ownerOnly)
					if (!Client.self) return data.reply('Already Public Mode')
					Client.self = false
					data.reply('OK')
				break
                case 'command':
                case 'cmd':
                case 'menu':
                case 'help':
num = `${sender.split("@")[0]}@s.whatsapp.net`
let yo = client.user
const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return ' ' + pad1(hrs) + ' : ' + pad1(mins) + ' : ' + pad1(secs)
                }
            const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
    
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time2 < "20:00:00"){
var ucapanWaktu = 'Selamat petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time2 < "03:30:00"){
var ucapanWaktu = 'Selamat malam'
										}

    teksny = `${ucapanWaktu} kak @${num.split("@")[0]}, Semoga harimu menyenangkan

Follow IG 
https://Instagram.com/akmalz.real

Note : Semua fitur free ya, ga semua fitur work krn sy noob :)
`

	footer = `*── 「 BOT STAT 」 ──*
Bot Name : ${yo.name}
Device : ${yo.phone.device_manufacturer}
Model : ${yo.phone.device_model}
WA Ver : ${yo.phone.wa_version}
MCC : ${yo.phone.mcc}
MNC : ${yo.phone.mnc}
OS : ${yo.phone.os_version}
Platform : ${os.platform()}
Version : ${os.version}
Host : ${os.hostname()}
Runtime : ${formater1(uptime1)}
Speed : ${latensip.toFixed(4)} Second
RAM : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB

*J-BOT | Recode By* @${628885960825}`

 	                 const mediaMsg = await client.prepareMessageMedia(await getBuffer(configs.imgUrl), 'imageMessage')
                     const buttonMessage = {
                           contentText: teksny,
                           footerText: footer,
                                "contextInfo": {
									  mentionedJid: [configs.ownerList[0], num],
                                      participant: sender,
                                      stanzaId: message.key.id,
                                      quotedMessage: message.message,
                                     },
                                     buttons: [
                                     {
                                       buttonId: `${data.prefix}listmsg`,
                                       buttonText: {
                                          displayText: "📒 MENU"
                                        },
                                         "type": "RESPONSE"
                                     },
                                     {
                                       buttonId: `${data.prefix}infom`,
                                       buttonText: {
                                          displayText: "📄 INFO"
                                        },
                                         "type": "RESPONSE"
                                     },
                                     {
                                       buttonId: `${data.prefix}owner`,
                                       buttonText: {
                                          displayText: "👤 OWNER"
                                        },
                                         "type": "RESPONSE"
                                     },
                                        ],
                                         headerType: 4,
                                     ...mediaMsg 
                                     }
                    let zz = await client.prepareMessageFromContent(from, {buttonsMessage: buttonMessage}, {})
                	client.relayWAMessage(zz, {waitForAck: true})     
                    break
case 'imgtag':
					if(!isAdmin || !data.isOwner) return data.reply('only be used by admin!')
				    var encmedia = data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message
					media = await client.downloadMediaMessage(encmedia)
					konsol = data.body
					var group = await client.groupMetadata(data.from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(data.from,media,image,{contextInfo: { mentionedJid: mem }, quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "「 Bot 」\n Created By @akmal.okz", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/fake.jpeg')} } }, caption: `${konsol}`})
			      break
case 'audtag':
			if(!isAdmin || !data.isOwner) return data.reply('only be used by admin!')
        	       var encmedia = data.isQuotedAudio ? JSON.parse(JSON.stringify(data.message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message
					media = await client.downloadMediaMessage(encmedia)
					var group = await client.groupMetadata(data.from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					client.sendMessage(data.from, media, audio,{contextInfo: { mentionedJid: mem },mimetype: 'audio/mp4', quoted : data.message, ptt: true })
					//onlydev.sendMessage(from,media,audio,{contextInfo: { mentionedJid: mem },quoted: mek, ptt : true })
					/*onlydev.sendMessage(from, options, text)*/
				break
                    /*STICKER*/
                case 'sgif':
                case 'sticker':
                case 's':
                case 'stiker':
                case 'stickergif':
                case 'stikergif':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    const getbuff = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfile = await client.downloadMediaMessage(getbuff)
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    else Client.sendImageAsSticker(from, dlfile.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    break
                case 'tomp3':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
					data.reply(mess.wait)
                    if(type != 'videoMessage' && !isQuotedVideo) return data.reply('Wrong format!')
					const getbuffz = data.isQuotedVideo ? JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo : data.message	
				    const dlfilez = await client.downloadMediaMessage(getbuffz)
                    convertMp3(dlfilez).then(data =>Client.sendFileFromUrl(from, data, 'p.mp3', '', message)).catch(er => Client.reply(from, 'Unexpected error!', message))
					break
/*
               case 'tomp3-2':
                if(isLimit(data.sender)) return data.reply(mess.limit)
					data.reply(mess.wait)
					if(type != 'videoMessage' && !isQuotedVideo) return data.reply('Wrong format!')
					encmedia = JSON.parse(JSON.stringify(message).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dvnz.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${media} ${ran}`, (er) => {
						fs.unlinkSync(media)
						if (er) return reply(e)
						buffer = fs.readFileSync(ran)
						client.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4', quoted: data.message})
						fs.unlinkSync(ran)
					})
					break
*/
                case 'stikerwm':
                case 'stickerwm':
                case 'swm':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(type != 'videoMessage' && !isQuotedVideo && !isQuotedImage && type != 'imageMessage') return data.reply('Wrong format!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    const getbuffs = data.isQuotedVideo || data.isQuotedImage ? JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : data.message
                    const dlfiles = await client.downloadMediaMessage(getbuffs)
                    text = data.body.split('|')
                    if(type == 'videoMessage' || isQuotedVideo) Client.sendMp4AsSticker(from, dlfiles.toString('base64'), message, { crop: false, pack: `${text[0]}`, author: `${text[1]}` })
                    else Client.sendImageAsSticker(from, dlfiles.toString('base64'), message, { pack: `${text[0]}`, author: `${text[1]}` })
                    break
                case 'stikeremoji':
                case 'stickeremoji':
                case 'semoji':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ emoji ]*\nContoh : ${data.prefix}${data.command} 😃`)
                        Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/emoji-image?apikey=${configs.zeksKey}&emoji=${encodeURIComponent(data.body)}`, message, { pack: `${configs.pack}`, author: `${configs.author}` })
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'takestick':
                case 'takestik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(!data.isQuotedSticker) return data.reply('Reply sticker!')
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ pack|author ]*\nContoh : ${data.prefix}${data.command} punya|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    const buff = await client.downloadMediaMessage(JSON.parse(JSON.stringify(data.message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                    Client.sendWebpAsSticker(data.from, buff.toString('base64'), data.message, {
                        pack: `${text[0]}`,
                        author: `${text[1]}`
                    })
                    break
                case 'stikerfire':
                case 'stickerfire':
                case 'sfire':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/burning-image?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                case 'stikernobg':
                case 'stickernobg':
                case 'snobg':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedImage || data.type == 'imageMessage') {
                        const getbuffs = data.isQuotedImage ? await data.downloadMediaQuotedMessage() : await data.downloadMediaMessage()
                        bodyForm = new FormData()
                        bodyForm.append('image', getbuffs, 'myimg.jpeg')
                        const getAxios = await axios(`${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}`, {
                            method: 'POST',
                            responseType: "arraybuffer",
                            headers: {
                                ...bodyForm.getHeaders()
                            },
                            data: bodyForm.getBuffer()
                        })
                        Client.sendMediaAsSticker(data.from, getAxios.data.toString('base64'), data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else if(data.mentionedJidList.length > 0) {
                        ppUrl = await client.getProfilePicture(data.mentionedJidList[0])
                        if(!ppUrl) return data.reply('Profile picture not found!')
                        Client.sendStickerFromUrl(data.from, `${configs.apiUrl}/api/removebg?apikey=${configs.zeksKey}&image=${encodeURIComponent(ppUrl)}`, data.message, {
                            pack: `${configs.pack}`,
                            author: `${configs.author}`
                        })
                    } else data.reply(`Wrong format!, tag someone or reply image with ${data.prefix}stickerfire`)
                    break
                    /*TEXT MAKER*/
                case 'qrencode':
                case 'barcode':
                case 'bneon':
                case 'matrix':
                case 'breakwall':
                case 'gneon':
                case 'dropwater':
                case 'tfire':
                case 'sandw':
                case 'epep':
                case 'gplaybutton':
                case 'splaybutton':
                case 'text3dbox':
                case 'text3d':
                case 'logobp':
                case 'leavest':
                case 'thundertext':
                case 'tlight':
                case 'naruto':
                case 'crosslogo':
                case 'cslogo':
                case 'crismes':
                case 'flametext':
                case 'glowtext':
                case 'smoketext':
                case 'flowertext':
                case 'lithgtext':
                case 'nulis':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?text=${data.body}&apikey=${configs.zeksKey}`, 'gambar.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
                    break
                case 'wolflogo':
                case 'logoaveng':
                case 'phlogo':
                case 'marvellogo':
                case 'gtext':
                case 'pubglogo':
                case 'snowwrite':
                case 'watercolour':
                    try {
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks1|teks2 ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/${command}?apikey=${configs.zeksKey}&text1=${text[0]}&text2=${text[1]}`, 'p.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    } catch {
                        data.reply('error')
                    }
					break
                case 'tahta':
                case 'harta':
                case 'hartatahta':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} shiro`)
                    data.reply(mess.wait)
                    Client.sendFileFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, 'harta.jpg', `*Gambar berhasil dibuat!* @${data.sender.split('@')[0]}`, message)
                    Client.sendStickerFromUrl(from, `${configs.apiUrl}/api/hartatahta?text=${data.body}&apikey=${configs.zeksKey}`, message, {
                        crop: false,
                        pack: 'Pack',
                        author: 'AUTHOR'
                    })
                    break
                    /*SEARCHING*/
                case 'playstore':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}playstore [ apk ]*\nContoh : ${data.prefix}playstore pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/sgplay?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 PLAYSTORE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Harga* : ${ttt[i].price}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'wiki':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wiki [ query ]*\nContoh : ${data.prefix}wiki manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/wiki?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result.result}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf wiki ${data.body} tidak ditemukan`)
                    }
                    break	
                case 'kbbi':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}kbbi [ query ]*\nContoh : ${data.prefix}kbbi manusia`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/kbbi?apikey=${configs.zeksKey}&q=${data.body}`)
                        te = `*Hasil pencarian dari* : ${data.body}\n\n*Result* : ${res.data.result}\n*Source* : ${res.data.source}`
                        data.reply(te)
                    } catch {
                        data.reply(`Maaf kbbi ${data.body} tidak ditemukan`)
                    }
                    break
                case 'film':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}film [ film ]*\nContoh : ${data.prefix}film doraemon`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/film?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 FILM 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf film ${data.body} tidak ditemukan`)
                    }
                    break
                case 'happymod':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}happymod [ apk ]*\nContoh : ${data.prefix}happymod pubg`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/happymod?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 HAPPYMOD 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].title}\n*Rate*: ${ttt[i].rating}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf aplikasi MOD ${data.body} tidak ditemukan`)
                    }
                    break
                case 'iguser':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}iguser [ username ]*\nContoh : ${data.prefix}iguser jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/iguser?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Username* : ${ttt[i].username}\n*Full name*: ${ttt[i].full_name}\n*Akun private* : ${ttt[i].private_user}\n*Verified*: ${ttt[i].verified_user}\n*Link*: https://instagram.com/${ttt[i].username}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].profile_pic, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytsearch':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytsearch [ query ]*\nContoh : ${data.prefix}ytsearch jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/yts?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var teks = `*「 YOUTUBE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Title* : ${ttt[i].video.title}\n*Durasi*: ${ttt[i].video.duration}\n*Upload* : ${ttt[i].video.upload_date}\n*View*: ${ttt[i].video.views}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].video.url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].video.thumbnail_src, 'axis.jpg', teks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytplaylist':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytplaylist[ channel ]*\nContoh : ${data.prefix}ytplaylist jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytplaylist?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var tekss = `*「 YOUTUBE PLAYLIST 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            tekss += `*Nama* : ${ttt[i].title}\n*Jumlah video*: ${ttt[i].video_count}\n*Channel*: ${ttt[i].uploader.username}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', tekss, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
                case 'ytchannel':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}ytchannel [ channel ]*\nContoh : ${data.prefix}ytchannel jessnolimit`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/ytchannel?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.result
                        var eks = `*「 YOUTUBE CHANNEL 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            eks += `*Nama* : ${ttt[i].title}\n*Deskripsi*: ${ttt[i].description}\n*Verified* : ${ttt[i].verified}\n*Jumlah video*: ${ttt[i].video_count}\n*Subcriber*: ${ttt[i].subscriber_count}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumbnail, 'axis.jpg', eks, message)
                    } catch(e) {
                        data.reply(`Maaf pencarian ${data.body} tidak ditemukan`)
                    }
                    break
/*
		case 'buggc':
              try {
              quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
              sendBug(from, `${quotedText}`)
              } catch {
              sendBug(from, `${q}`)
}
              break
*/
                case 'shopee':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}shopee [ query ]*\nContoh : ${data.prefix}shopee sepatu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/shopee?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SHOPEE 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Nama* : ${ttt[i].name}\n*Harga*: ${ttt[i].harga}\n*Terjual* : ${ttt[i].terjual}\n*Lokasi*: ${ttt[i].location}\n*Deskripsi*: ${ttt[i].desc}\n*Stok*: ${ttt[i].stock}\n*Informasi*: ${ttt[i].information}\n*Link*: ${ttt[i].url}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].img_detail[0], 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf produk ${data.body} tidak ditemukan`)
                    }
                    break
                case 'igstalk':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}igstalk [ query ]*\nContoh : ${data.prefix}igstalk elios_xyz`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/igstalk?apikey=${configs.zeksKey}&username=${data.body}`)
                        pe = res.data
                        tek = `*「 INSTAGRAM PROFILE 」*	
					
*Username:* @${pe.username}
*Nama:* ${pe.fullname}
*Pengikut:* ${pe.follower}
*Mengikuti*: ${pe.following}
*Deskripsi:* ${pe.bio}
*Link:* https://instagram.com/${pe.username}
`
                        Client.sendFileFromUrl(from, pe.profile_pic, 'p.jpg', tek, message)
                    } catch {
                        data.reply(`Maaf username ${data.body} tidak ditemukan`)
                    }
                    break
                case 'brainly':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}brainly [ query ]*\nContoh : ${data.prefix}brainly siapa penemu lampu`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/brainly?apikey=${configs.zeksKey}&q=${data.body}&count=3`)
                        for(let i = 0; i < res.data.data.length; i++) {
                            await Client.reply(from, `Pertanyaan : ${res.data.data[i].question}\n\nJawaban : ${res.data.data[i].answer[0].text}`, message)
                        }
                    } catch {
                        data.reply(`Maaf jawaban tidak ditemukan`)
                    }
                    break
                case 'spotify':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}spotify [ lagu ]*\nContoh : ${data.prefix}spotify melukis senja`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/spotify?apikey=${configs.zeksKey}&q=${data.body}`)
                        ttt = res.data.data
                        var teks = `*「 SPOTIFY 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                        for(let i = 0; i < ttt.length; i++) {
                            teks += `*Judul* : ${ttt[i].title}\n*Artis*: ${ttt[i].artists}\n*Album* : ${ttt[i].album}\n*Link*: ${ttt[i].url}\n*Preview*: ${ttt[i].preview_mp3}\n\n`
                        }
                        await Client.sendFileFromUrl(from, ttt[0].thumb, 'p.jpg', teks, message)
                    } catch {
                        data.reply(`Maaf lagu ${data.body} tidak ditemukan`)
                    }
                    break
                case 'gsmarena':
                    try {
                        if(isLimit(data.sender)) return data.reply(mess.limit)
                        if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}gsmarena [ hp ]*\nContoh : ${data.prefix}gsmarena asus rog phone 3`)
                        data.reply(mess.wait)
                        res = await axios.get(`${configs.apiUrl}/api/gsmArena?apikey=${configs.zeksKey}&q=${data.body}`)
                        captions = `*HP* : ${res.data.data.title}\n\n${res.data.data.full_desc.string}\n${res.data.data.link}`
                        Client.sendFileFromUrl(from, res.data.data.thumb, 'p.jpg', captions, message)
                    } catch (e) {
                        data.reply(`Maaf hp ${data.body} tidak ditemukan`)
                    }
                    break
                case 'searchmusic':
                case 'searchmusik':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.isQuotedAudio) {
                        files = await client.downloadMediaMessage(JSON.parse(JSON.stringify(message).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo)
                        bodyForm = new FormData()
                        bodyForm.append('audio', files, 'music.mp3')
                        axios(`${configs.apiUrl}/api/searchmusic?apikey=${configs.zeksKey}`, {
                                method: 'POST',
                                headers: {
                                    ...bodyForm.getHeaders()
                                },
                                data: bodyForm.getBuffer()
                            })
                            .then(({
                                data
                            }) => {
                                if(data.status) {
                                    Client.reply(from, `_[ *Search Music* ]_\n\n*Title*: ${data.data.title}\n*Artists*: ${data.data.artists}\n*Genre*: ${data.data.genre}\n*Album*: ${data.data.album}\n*Release date*: ${data.data.release_date}`, message)
                                } else Client.reply(from, data.message, message)
                            }).catch(() => Client.reply(from, 'Internal server error!, try again later', message))
                    } else Client.reply(from, 'Wrong format!', message)
                    break
                case 'wallpaper':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}wallpaper [ query ]*\nContoh : ${data.prefix}wallpaper kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/unsplash?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    n = res.data.result
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image.img_hd, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'pinterest':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}pinterest [ query ]*\nContoh : ${data.prefix}pinterest kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/pinimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'googleimage':
				    try{
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}googleimage [ query ]*\nContoh : ${data.prefix}googleimage kucing`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/gimg?apikey=${configs.zeksKey}&q=${data.body}`)
                    n = res.data.data
                    image = n[Math.floor(Math.random() * n.length)]
                    Client.sendFileFromUrl(from, image, 'p.jpg', `*Hasil pecarian* : ${data.body}`, message)
                    } catch {
                        data.reply(`error`)
                    }
                    break
                case 'jagokata':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}jagokata [ apk ]*\nContoh : ${data.prefix}jagokata bersyukurlah`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jagokata?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    ttt = res.data.result
                    var teks = `*「 JAGOKATA 」*\n\n*Hasil Pencarian : ${data.body}*\n\n`
                    ttt.forEach(tt1 => teks += `*Kata* : ${tt1.kata}\n*Author* : ${tt1.author}\n*Info*: ${tt1.author_info}\n*Link*: ${tt1.author_url}\n\n` )
                    await data.reply(teks)
                    break
                    /*PRIMBON*/
                case 'jodoh':
                case 'ramalpasangan':
                case 'pasangan':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ kamu|dia ]*\nContoh : ${data.prefix}${data.command} shiro|elios`)
                    data.reply(mess.wait)
                    p = data.body
                    text = p.split('|')
                    res = await axios.get(`${configs.apiUrl}/api/primbonjodoh?apikey=${configs.zeksKey}&nama1=${text[0]}&nama2=${text[1]}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    p = res.data.result
                    tek = `*Nama kamu* : ${p.nama1}\n*Nama dia* : ${p.nama2}\n\n*Hasil positif* : ${p.positif}\n*Hasil negatif* : ${p.negatif}`
                    Client.sendFileFromUrl(from, p.thumb, 'p.jpg', tek, message)
                    break
                case 'artinama':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artinama [ nama ]*\nContoh : ${data.prefix}artinama elios`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artinama?apikey=${configs.zeksKey}&nama=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result)
                    break
                case 'artimimpi':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}artimimpi[ mimpi ]*\nContoh : ${data.prefix}artimimpi ular`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/artimimpi?apikey=${configs.zeksKey}&q=${data.body}`)
                    if(res.data.status == false) data.reply(res.data.message)
                    data.reply(res.data.result.string)
                    break
                    /*OTHER*/
                case 'jsholat':
                case 'jadwalsholat':
                case 'jadwalshalat':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} jakarta`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwalsholat?apikey=${configs.zeksKey}&daerah=${data.body}`)
                    data.reply(res.data.data.string)
                    break
                case 'jadwaltv':
                    if(isLimit(data.sender)) return data.reply(mess.limit)
                    if(data.body == "") return data.reply(`Kirim perintah *${data.prefix}${data.command} [ teks ]*\nContoh : ${data.prefix}${data.command} antv`)
                    data.reply(mess.wait)
                    res = await axios.get(`${configs.apiUrl}/api/jadwaltv?apikey=${configs.zeksKey}&channel=${data.body}`)
                    data.reply(res.data.result)
                    break
                    /*GROUP*/
                case 'hidetag':
                case 'everyone':
                    if(!isAdmin) return data.reply('only be used by admin!')
                    var mention = []
                    data.groupMetadata.participants.forEach((member, i) => {
                        mention.push(member.jid)
                    })
                    data.reply(`${data.body}`, {
                        contextInfo: {
                            "mentionedJid": mention
                        }
                    })
                    break
                case 'linkgroup':
                    if(!data.isGroup) return data.reply(mess.group)
                    if(!data.botIsAdmin) return data.reply(mess.botAdmin)
                    linkgc = await client.groupInviteCode(data.from)
                    data.reply(`https://chat.whatsapp.com/${linkgc}`)
                    break
                    /*DLL*/
                case 'stickermenu':
                case 'stickercmd':
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/menus.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menampilkan menu!', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/sticks.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuat sticker dengan cara reply image/video dengan sticker ini', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/open.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk membuka group', {
                        quoted: resData
                    }))
                    Client.sendRawWebpAsSticker(from, fs.readFileSync('./lib/temp/close.webp'), message).then(resData => Client.sendText(from, 'gunakan sticker ini untuk menutup group', {
                        quoted: resData
                    }))
                    break
                case 'tes':
                    data.reply('auto upt')
                    break
                case '':
		        case 'eval':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
                    try {
                        data.reply(JSON.stringify(eval(body), null, 3))
                    } catch (ers) {
                        data.reply(ers.toString())
                    }
                    break
		        case 'term':
				case '>':
                    if(!data.isOwner) return data.reply(mess.ownerOnly)
					exec(data.body, (err, stdout) => {	
				    if (err) return data.reply(err.toString())
					if (stdout) return data.reply(stdout)
					})
				    break
                case 'getquoted':
                    data.reply(JSON.stringify(message.message.extendedTextMessage.contextInfo, null, 3))
                    break
                case 'toimg':
                case 'togif':
                case 'tomedia':
                case 'toimage':
                    if(!isQuotedSticker) return data.reply('reply sticker!')
                    const mtdt = await data.downloadMediaQuotedMessage()
                    if(message.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated) {
                        axios(`https://serv-api.zeks.xyz/sticker/togif`, { method: "post", headers: { "content-type": 'application/json' }, data: {base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.gif', 'nih', message)
			})
                    } else {
                        axios(`https://serv-api.zeks.xyz/sticker/png`, { method: "post", headers: { "content-type": 'application/json' }, data: { base64: mtdt.toString('base64')}}).then(bf => {
                            Client.sendFileFromBase64(from, bf.data.result, 'to.png', 'nih', message)
                        })
                    }
                    break
            }
        })
        //Handler Sticker Command
        Client.handlerStick.on("*", async (datas) => {
            const {
                idStick,
                message,
                from,
                sender,
                isOwner,
                isQuotedVideo,
                isQuotedImage,
                isQuotedSticker,
                isQuotedAudio,
                groupMetadata,
                isAdmin,
                botIsAdmin,
                pushname,
                t
            } = datas
            console.log(`ID STICKER: ${idStick}`) //digunakan untuk mendapatkan id sticker
            /*	Cara bikin stickercmd 
                -ambil id sticker lewat console.log
            	-id sticker nya dibuat case 
                -case 'idnya': contoh ada dibawah
            	*/
            switch(idStick) {
                case '2.453746655066493e+123':
                const time3 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time3 < "23:59:00"){
var ucapanWaktu = 'Selamat malam'
                                        }
if(time3 < "20:00:00"){
var ucapanWaktu = 'Selamat petang'
                                         }
if(time3 < "18:00:00"){
var ucapanWaktu = 'Selamat sore'
                                         }
if(time3 < "15:00:00"){
var ucapanWaktu = 'Selamat siang'
                                         }
if(time3 < "11:00:00"){
var ucapanWaktu = 'Selamat pagi'
                                         }
if(time3 < "03:30:00"){
var ucapanWaktu = 'Selamat malam'
										}
                    sec = []
          sec.push({
            "rows": [
              {
                "title": "List Menu",
                "description": "", 
                "rowId": `#listmenu`
              }, 
              {
                "title": "Group Menu", 
                "description": "", 
                "rowId": `#gmenu`
              }, 
              {
                "title": "Download Menu", 
                "description": "", 
                "rowId": `#dwmenu`
              }, 
              {
                "title": "Sticker Menu", 
                "description": "", 
                "rowId": `#smenu`
              }, 
              {
                "title": "Education Menu", 
                "description": "", 
                "rowId": `#emenu`
              }, 
              {
                "title": "Searching Menu", 
                "description": "", 
                "rowId": `#srcmenu`
              }, 
              {
                "title": "Primbon Menu", 
                "description": "", 
                "rowId": `#pmenu`
              }, 
              {
                "title": "Random Menu", 
                "description": "", 
                "rowId": `#rnmenu`
              }, 
              {
                "title": "Text Maker", 
                "description": "", 
                "rowId": `#txmaker`
              }, 
              {
                "title": "Image Maker", 
                "description": "", 
                "rowId": `#imgmaker`
              }, 
              {
                "title": "Other Menu", 
                "description": "", 
                "rowId": `#othmenu`
              }, 
              {
                "title": "Owner Menu", 
                "description": "", 
                "rowId": `#ownerm`
              }
              ], title: `Pilih Satu ya kak`
              })
          	let po = client.prepareMessageFromContent(from, {
				  "listMessage":{
                  "title": `MENU J-BOT`,
                  "description": `${ucapanWaktu} kak ${pushname}`,
                  "buttonText": "MENU!",
                  "listType": "SINGLE_SELECT",
                  "sections": sec}}, {}) 
            client.relayWAMessage(po, {waitForAck: true})
                    break
                case '1.415045466145215e+123':
                    if(datas.isQuotedImage || datas.isQuotedVideo) {
                        const getBuffs = await client.downloadMediaMessage(JSON.parse(JSON.stringify(datas.message.message.stickerMessage.contextInfo).replace('quotedMessage', 'message')))
					if(isQuotedVideo) Client.sendMp4AsSticker(from, getBuffs.toString('base64'), message, { pack: `${configs.pack}`, author: `${configs.author}` })
                   	else Client.sendImageAsSticker(from, getBuffs.toString('base64'), message, {  pack: `${configs.pack}`, author: `${configs.author}` })    
                    }
                    break
			    case '1.4129505721465047e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, false)
                    datas.reply(`Group telah dibuka oleh admin @${datas.sender.split('@')[0]}`)
				    break
			    case '1.3049292658533466e+123':
				    if(!datas.isGroup) return datas.reply(mess.group)
                    if(!datas.isAdmin) return datas.reply(mess.admin)
                    if(!datas.botIsAdmin) return datas.reply(mess.botAdmin)
                    client.groupSettingChange(from, GroupSettingChange.messageSend, true)
                    datas.reply(`Group telah ditutup oleh admin @${datas.sender.split('@')[0]}`)
				    break
            }
        })
    } catch (e) {
        console.log(e)
    }
}

function isLimit(sender, count) {
    const dataUser = JSON.parse(fs.readFileSync('./lib/json/dataUser.json'))
    if(dataUser[sender].premium) return false
    if(dataUser[sender].limit >= configs.maxLimit) return true
    dataUser[sender].limit += count || 1
    fs.writeFileSync('./lib/json/dataUser.json', JSON.stringify(dataUser))
    return false
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
