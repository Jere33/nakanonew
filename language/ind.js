const a = '```'

exports.wait = () => {
	return`「 WAIT 」 SEDANG PROSES`
}

exports.succes = () => {
	return`「 SUCCES 」`
}

exports.lvlon = () => {
	return`「 ENABLE 」 LEVELING`
}

exports.lvloff = () => {
	return`「 DISABLE 」 LEVELING`
}

exports.lvlnul = () => {
	return`LEVELMU MASIH KOSONG`
}

exports.lvlnoon = () => {
	return`LEVEL DI GRUB BELUM DI AKTIFKAN`
}

exports.noregis = () => {
	return`「 BELUM DAFTAR 」\n\ncara daftar ${prefix}daftar nama|umur \ncontoh ${prefix}daftar JG047|17`
}

exports.rediregis = () => {
	return`「 SUDAH DAFTAR 」\n\nkamu sudah terdaftar di database bot`
}

exports.stikga = () => {
	return`yah gagal coba ulangi beberapa saat lagi`
}

exports.linkga = () => {
	return`maaf link tidak valid`
}

exports.groupo = () => {
	return`「GROUP ONLY」`
}

exports.ownerb = () => {
	return`「OWNER BOT ONLY」`
}

exports.ownerg = () => {
	return`「OWNER GROUP ONLY」`
}

exports.admin = () => {
	return`「ADMIN GROUP ONLY」`
}

exports.badmin = () => {
	return`「BOT HARUS JADI ADMIN」`
}

exports.nsfwoff = () => {
	return`NSFW GAK AKTIF`
}

exports.bug = () => {
	return`Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi`
}

exports.wrongf = () => {
	return`format salah/text kosong`
}

exports.clears = () => {
	return`clear all Success`
}

exports.pc = () => {
	return`「 REGISTRASI 」\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\njika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`「 DATA NEGARA 」\n\nkamu sudah terdaftar dengan data \n\n┏━⊱nama\n┗⊱${namaUser}\n┏━⊱nomer\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱umur\n┗⊱${umurUser}\n┏━⊱waktu pendaftaran\n┗⊱${time}\n\n┏━❉ NS ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting:v`
}

exports.cmdnf = (prefix, command) => {
	return`command ${prefix}${command} tidak di temukan\coba ketik ${prefix}menu`
}

exports.owneresce = (pushname) => {
	return`maaf tapi ${pushname} bukan owner script`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${aha}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${ahb}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${ahc}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${ahd}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${ahe}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`Maaf ${pushname} level mu belum mencukupi\n\n┏⊱level mu : ${getLevelingLevel(sender)}\n┣⊱jenis command : ${command}\n┗⊱syarat level : ${ahf}\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, client , process , pepolu) => { 
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

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
	
「 *SELAMAT* 」

┏⊱ Nama : ${pushname}
┣⊱ Nomer : wa.me/${sender.split("@")[0]}
┣⊱ Xp : ${getLevelingXp(sender)}
┣⊱ Limit : +3
┣⊱ Role: ${role}
┗⊱ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}

SELAMAT YA BROO :v
`}
 
exports.limitend = (pushname) => {
	return`maaf ${pushname} limit hari ini habis\nbeli limit untuk mendapatkan limit/ naik level`
}

exports.limitcount = (limitCounts) => {
	return`
「 LIMIT 」

sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`┏⊱ 「 ATM 」⊰━┓\n┣⊱ Nama : ${pushname}\n┣⊱ Nomer : ${sender.split("@")[0]}\n┣⊱ Uang : ${uangkau}\n┗━━━━━━━━━━`
}

exports.afkOn = (pushname, reason) => {
    return `Fitur AFK berhasil diaktifkan!\n\n➸ Username: ${pushname}\n➸ Alasan: ${reason}`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `「 AFK MODE 」\n\nINGFO!!! Orangnya lagi AFK, jangan diganggu!\n➸ Alasan: ${getReason}\n➸ Sejak: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `${pushname} telah kembali dari AFK! Welcome Tod :v`
}
