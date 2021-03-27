
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered) => { 
	return `
╭────「 *ABOUT USER* 」
├ Nama : ${pushname}
├ Nomor : wa.me/${sender.split("@")[0]}
├ Uang : Rp${uangku}
├ XP : ${getLevelingXp(sender)}/$reqXp}
├ Level : ${getLevelingLevel(sender)}
├ Role : ${role}
├ User register : ${_registered.length}
├ Total Pengguna : ${pepolu} user
├───────────────────

╭────「 *ABOUT BOT* 」
├ Nama : ${client.user.namr}
├ browser : ${client.browserDescription[1]}
├ server : ${client.browserDescription[0]}
├ version : ${client.browserDescription[2]}
├ Speed : ${process.uptime()}
├ handphone : ${client.user.phone.device_manufacturer}
├ Versi Wa : ${client.user.phone.wa_version
├───────────────────

╭────「 *MAKER MENU* 」
├ ${prefix}sticker
├ ${prefix}ttp
├ ${prefix}nulis
├ ${prefix}quotemaker
├ ${prefix}qrcode
├ ${prefix}text3d
├ ${prefix}tahta
├ ${prefix}textlight
├ ${prefix}glitchtext
├───────────────────

╭────「 *FUN MENU* 」
├ ${prefix}tebakgambar
├ ${prefix}meme
├───────────────────

╭────「 *KERANG MENU* 」
├ ${prefix}apakah
├ ${prefix}kapankah
├ ${prefix}bisakah
├ ${prefix}rate
├───────────────────

╭────「 *PRIMBON MENU* 」
├ ${prefix}artinama
├───────────────────

╭────「 *MEDIA MENU* 」
├ ${prefix}brainly
├ ${prefix}pinterest
├ ${prefix}resepmakanan
├ ${prefix}igstalk
├ ${prefix}lirik
├ ${prefix}beritahoax
├ ${prefix}tiktok
├ ${prefix}infonomor
├ ${prefix}fototiktok
├ ${prefix}bitly
├ ${prefix}tiktokstalk
├ ${prefix}ssweb
├ ${prefix}kbbi
├───────────────────

╭────「 *DOWNLOADER MENU* 」
├ ${prefix}ytmp3
├ ${prefix}ytmp4
├ ${prefix}joox
├───────────────────

╭────「 *OTHER MENU* 」
├ ${prefix}chord
├ ${prefix}slap
├ ${prefix}emoji
├ ${prefix}animequotes
├ ${prefix}katacinta
├ ${prefix}neonime
├ ${prefix}tampar
├ ${prefix}quotes
├ ${prefix}moddroid
├ ${prefix}apkpure
├ ${prefix}happymod
├ ${prefix}mutual
├ ${prefix}next
├───────────────────

╭────「 *NSFW MENU* 」
├ ${prefix}anjing
├ ${prefix}blowjob
├ ${prefix}nekonime
├ ${prefix}pokemon
├ ${prefix}husbu
├ ${prefix}nangis
├ ${prefix}cium
├ ${prefix}peluk
├ ${prefix}ranime
├───────────────────

╭────「 *DOMPET MENU* 」
├ ${prefix}limit
├ ${prefix}buylimit
├ ${prefix}transfer
├ ${prefix}dompet
├ ${prefix}giftlimit
├ ${prefix}leaderboard
├───────────────────

╭────「 *GROUP MENU* 」
├ ${prefix}delete
├ ${prefix}hidetag
├ ${prefix}blocklist
├ ${prefix}grouplist
├ ${prefix}level
├ ${prefix}linkgc
├ ${prefix}tagall
├ ${prefix}setpp
├ ${prefix}add
├ ${prefix}kick
├ ${prefix}setname
├ ${prefix}setdesc
├ ${prefix}promote
├ ${prefix}demote
├ ${prefix}listadmin
├ ${prefix}group [buka/tutup]
├ ${prefix}leveling [enable/disable]
├ ${prefix}nsfw [1/0]
├ ${prefix}simih [1/0]
├ ${prefix}welcome [1/0]
├ ${prefix}antilink [1/0]
├ ${prefix}nobadword [enable/disable]
├───────────────────

╭────「 *TOOLS MENU* 」
├ ${prefix}bass
├ ${prefix}tomp3
├ ${prefix}slowmo
├ ${prefix}gemok
├ ${prefix}wasted
├ ${prefix}tourl
├ ${prefix}triggered
├ ${prefix}wanted
├ ${prefix}facebookpage
├ ${prefix}gtav
├ ${prefix}costumwp
├ ${prefix}pantaimalam
├ ${prefix}crossgun
├ ${prefix}bakar
├ ${prefix}pencil
├ ${prefix}tupai
├───────────────────

╭────「 *STORAGE MENU* 」
├ ${prefix}addsticker
├ ${prefix}getsticker
├ ${prefix}liststicker
├ ${prefix}addvideo
├ ${prefix}getvideo
├ ${prefix}videolist
├ ${prefix}addimage
├ ${prefix}getimage
├ ${prefix}imagelist
├ ${prefix}addaudio
├ ${prefix}getaudio
├ ${prefix}audiolist
├───────────────────

╭────「 *OWNER MENU* 」
├ ${prefix}bc
├ ${prefix}bcgc
├ ${prefix}addbadword
├ ${prefix}delbadword
├ ${prefix}kickall
├ ${prefix}setreply
├ ${prefix}setprefix
├ ${prefix}clearall
├ ${prefix}block
├ ${prefix}unblock
├ ${prefix}leave
├ ${prefix}event [1/0]
├ ${prefix}clone
├ ${prefix}setppbot
├───────────────────

「 *POWERED BY JG047* 」
`
}
exports.help = help



  
