// Countdown Timer
function updateCountdown() {
    const eventDate = new Date('2025-06-11T08:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = String(days).padStart(3, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Language content
const languageContent = {
    davvi: `# Áigumuš

Sámi dutkiin leat mearkkašahtti hástalusat, nugo geográfalaččat bieđgguid servodagaiguin, ráddjejuvvon vejolašvuođat deaivvadit ja váttisvuođat oažžut oppalašgovva Sámi dutkamis. Dát hehtte ovttasbarggu, fágaidgaskasaš čatnašumi ja Sámi dutkama gaskkusteami. *DutkanSápmi - Dieđavahkku* áigumuš lea čoavdit dáid hástalusaid dainna lágiin ahte ásahit erenoamáš deaivvadansaji gos dutkit miehtá Sámi sáhttet čatnat oktavuođa, juohkit jurdagiid ja ovddidit ođđa ovttasbargguid.

Dát konferánsa bovde dutkiid iešguđet fágasurggiin – earret eará servodatdiehtagiin, luonddudiehtagiin, humanisttalaš diehtagagiin ja earáin – juohkit iežaset bargguid ja perspektiivvaid. Fállamis saji digáštallamiidda Sámi dutkama boahtteáiggi birra ja dustemis boahttevaš hástalusaid, áigu *DutkanSápmi - Dieđavahkku* nannet Sámi dutkama oinnolašvuođa ja váikkuheami, ja seammás hukset bissovaš fierpmádagaid akademálaš ja geográfalaš rájáid rastá.

# Gielat

Konferánsagielat leat sámegiella ja eaŋgalasgiella. Mii áigut nu guhkás go vejolaš sihkkarastit ahte oažžut jorgaleaddjiid juohke sámegillii.`,

    en: `# Purpose

Sámi researchers face significant challenges, including geographically dispersed communities, limited opportunities for meeting, and difficulties in gaining a comprehensive overview of Sámi research. This hampers collaboration, interdisciplinary connections, and the dissemination of Sámi research. *DutkanSápmi - Dieđavahkku* aims to address these challenges by establishing a unique meeting place where researchers across Sápmi can connect, share ideas, and develop new collaborations.

This conference invites researchers from various disciplines – including social sciences, natural sciences, humanities, and others – to share their work and perspectives. By providing space for discussions about the future of Sámi research and addressing upcoming challenges, *DutkanSápmi - Dieđavahkku* aims to strengthen the visibility and impact of Sámi research while building lasting networks across academic and geographical boundaries.

# Languages

The conference languages are Sámi and English. We will strive to ensure interpretation services for all Sámi languages to the extent possible.`,

    skolt: `# Täävtõs

Sääʹm tuʹtǩǩeein liâ miârkkšõõvvi vaiggâdvuõđ, mâʹte ǥeograaflânji pieđggnam õhttsažkåʹdd, räʹtǩǩuum vuäittmõõžž kaaunõõttâd da vaiggâdvuõđ vuäǯǯad obbkoov Sääʹm tuʹtǩǩummšest. Tät cõggad õhttsažtuâi, määŋgtiõđlažvuõđ da Sääʹm tuʹtǩǩummuž õlmmsa puʹhttem. *DutkanSápmi - Dieđavahkku* täävtõssân lij räʹtǩǩeed täid vaiggâdvuõđid raajeeʹl spesiaal kaaunõõttâmpääiʹǩ, koʹst tuʹtǩǩeei pirr Sääʹmjânnam vueiʹtte õhtted, juâkked jurddjid da ooudâsviikkâd ođđ õhttsažtuâjaid.

Tät konferenss kåčč tuʹtǩǩeejid jeeʹres tiõđsuõʹrjin – mâʹte õhttsažkåʹddtiõđin, luâtttiõđin, humanisttlaž tiõđin da jeeʹres – juâkked tuâjaid da vueiʹnlmid. Konferenss taʹrjjad sââi saǥǥstõõllmõʹšše Sääʹm tuʹtǩǩummuž puõʹttiääiʹj pirr da puõʹtti vaiggâdvuõđi čõõđtummšest, *DutkanSápmi - Dieđavahkku* täävtad nââneed Sääʹm tuʹtǩǩummuž vueiʹnnelvuõđ da vaaiktummuž, da seämmast raajjâd põõšši võrggsaž õhttvuõđid akateemlaž da ǥeograaflâž raaji râstld.

# Ǩiõl

Konfereenss ǩiõl liâ sääʹmǩiõll da eŋgglõsǩiõll. Mij täävtap staanâd, što vuäǯǯap tuʹlkkid juõʹǩǩ sääʹmǩiõʹlle nuʹtt kookkas ko vueiʹtlvaž.`,

    anar: `# Ulme

Säämi tutkein láá merhâšittee häästuh, tego eennâmtieđâlávt pieđgui servošeh, rájášum máhđulâšvuođah kuáhtáđ já vátávâšvuođah finniđ almolâškove Säämi tutkâmušâst. Taat estâd ohtsâšpargo, sierâtieđâsuorgij koskâsii ohtâvuođâ já Säämi tutkâmuš almostitmân. *DutkanSápmi - Dieđavahkku* ulmen lii čuávdiđ täid häästuid vuáđudiđ sierânâs kuáhtámsaje, kost tutkeh miehtá Säämi pyehtih kavnâđ, jyehiđ jurduid já ovdediđ uđđâ ohtsâšpaargoid.

Taat konfereens kočo tutkeid sierâ tieđâsyergijn – tego ohtsâškoddetiettuu, luándutieđâ, humanistlii tieđâ já eres – jyehiđ jieijâs paargoid já uáinuid. Fáálâđ saje savâstâlmáid Säämi tutkâmuš puátteevuođâst já puáttee häästui čuávdimist, *DutkanSápmi - Dieđavahkku* ulme lii nanodiđ Säämi tutkâmuš uáinimvuođâ já vaikuttâs, já siämmást huksiđ pisovâš viärmáduvâid akademâlii já eennâmtieđâlii raajij rasta.

# Kielah

Konferens kielah láá sämikielah já eŋgâlâskielâ. Mij viggâp visásmittiđ, et finnim tulkkâid jyehi sämikielân nuuvt vijđáht ko máhđulâš.`,

    julev: `# Ulmme

Sáme dutkijn li mierkkidahtte hásstalusá, degu geografalattjat bieđggum sebrudagá, gártjedum máhttelisvuoda iejvvadit ja gássjelisvuoda oadtjot åbbålasj gåvåv Sáme dutkamis. Dát hieret aktisasjbargov, fágajgasskasasj aktijvuodav ja Sáme dutkama gassjadimev. *DutkanSápmi - Dieđavahkku* ulmme le tjoavddet dájt hásstalusájt ásadittjat sierralágásj iejvvadimbájkev gånnå dutkke miehtáj Sámev máhtti aktijvuodav ásadit, juogadit ájádusájt ja åvdedit ådå aktisasjbargojt.

Dát konferánssa gåhttju dutkijt iesjguhtik fágasurijs – degu sebrudakdiehtagis, luonndodiehtagis, humanistalasj diehtagis ja ietjá – juogadit ietjasa bargojt ja vuojnojt. Fállat sajev ságastallamijda Sáme dutkama boahtteájge birra ja boahtte hásstalusáj tjoavddema birra, *DutkanSápmi - Dieđavahkku* ulmme le nannit Sáme dutkama vuojnnogisá ja vájkkudusáv, ja sæmmi båttå tsieggit bissovasj værmádagájt akademalasj ja geografalasj rájáj rastá.

# Giela

Konferánssa giela li sámegiela ja ieŋŋilsgiella. Mij viggap vissedit, vaj oadtjop dålkkåjt juohkka sámegielaj nav vijdát gå máhttelis.`,

    oarjel: `# Ulmie

Saemien dotkijh stoerre haestemh utnieh, vuesehte goh geografeles bådtjanamme siebriedahkh, giertjiedamme nuepide gaavnedidh jïh geerve abpe guvviem åadtjodh saemien dotkemistie. Daate aktede barkojne, faagelidh ektiedimmiem jïh saemien dotkemen bæjhkoehtimmiem. *DutkanSápmi - Dieđavahkku* sæjhta daejtie haestiemidie loetedh, aktede sjïere gaavnedimmiesijjiem tseegkedh gusnie dotkijh abpe Saepmesne maehtieh ektiedidh, åssjaldahkh joekedidh jïh orre ektiebarkojde evtiedidh.

Daate konferaanse dotkijidie ovmessie faagesuerkijste böörede – goh siebriedahkevetenskap, eatnemevetenskap, humanisteles vetenskap jïh jeatjebh – sijjen barkojde jïh vuajnojde joekedidh. Sijjiem vedtedh digkiedæmman saemien dotkemen båetijen aejkien bïjre jïh båetijen aejkien haestemh dåastodh, *DutkanSápmi - Dieđavahkku* sæjhta saemien dotkemen våajnoes darjodh jïh tsevtsedh, seamma aejkien ihkuve viermiem tseegkedh akademihken jïh geografeles raasti rastah.

# Gïelh

Konferansegïelh leah saemiengïele jïh eengelsegïele. Mijjieh sïjhtebe jarkoestæjjah skååffedh gaajhkide saemien gïelide dan guhkies gåarede.`
};

// Language Switching
const translations = {
    home: {
        davvi: 'Ruoktu',
        skolt: 'Domm',
        anar: 'Päikki',
        julev: 'Häjmma',
        oarjel: 'Gåetie',
        en: 'Home'
    },
    about: {
        davvi: 'Birra',
        skolt: 'Pirr',
        anar: 'Pirrâ',
        julev: 'Birra',
        oarjel: 'Bïjre',
        en: 'About'
    },
    register: {
        davvi: 'Dieđiheapmi',
        skolt: 'Iʹlmmtõõttâm',
        anar: 'Almottâttâm',
        julev: 'Diededibme',
        oarjel: 'Registreradidh',
        en: 'Register'
    },
    program: {
        davvi: 'Prográmma',
        skolt: 'Programm',
        anar: 'Ohjelm',
        julev: 'Prográmma',
        oarjel: 'Programme',
        en: 'Program'
    }
};

function changeLanguage() {
    const selectedLanguage = document.getElementById('languageSelect').value;
    updateNavigationText(selectedLanguage);
    
    // Update about content if we're on the about page
    const aboutContent = document.getElementById('aboutContent');
    if (aboutContent) {
        const content = languageContent[selectedLanguage];
        if (content) {
            // Convert the content to HTML format
            const htmlContent = content
                .replace(/# ([^\n]+)/g, '<h1>$1</h1>') // Convert # headers
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>') // Convert **bold**
                .replace(/\*([^*]+)\*/g, '<em>$1</em>') // Convert *italic*
                .split('\n\n') // Split paragraphs
                .map(p => p.trim()) // Trim whitespace
                .filter(p => p) // Remove empty paragraphs
                .map(p => p.startsWith('<h') ? p : `<p>${p}</p>`) // Wrap in <p> tags if not a header
                .join('\n'); // Join with newlines
            
            aboutContent.innerHTML = htmlContent;
        }
    }
}

function updateNavigationText(language) {
    // Update navigation links
    document.querySelector('.nav-links a:nth-child(1)').textContent = translations.home[language];
    document.querySelector('.nav-links a:nth-child(2)').textContent = translations.about[language];
    
    // Update footer buttons
    document.querySelector('.footer-button.register').textContent = translations.register[language];
    document.querySelector('.footer-button.program').textContent = translations.program[language];
}

// Initialize the page with default language
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage();
}); 