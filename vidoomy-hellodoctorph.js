setTimeout(function(){
var abPercent = 50;
var randomABTestValue = Math.floor(Math.random() * 100) + 1;
var playerBundle = (randomABTestValue > abPercent) ? 'preprod/vidoomy-player.js' : 'vidoomy-player.js';
var s = document.createElement('script');
s.src = 'https://vpaid.vidoomy.com/player/latest/' + playerBundle;
s.setAttribute('class', 'vdm-p');
s.onload = function() {
    new top.vidoomy.main.VidoomyPlayer({
        htmlConfig: {
            type: 'slider',
            width: 350,
            height: 197,
            widthMbl: 220,
            heightMbl: 124,
            closeText: 'CLOSE AD',
            closeTextMbl: 'CLOSE AD',
            appearAt: 'left',
            appearAtMbl: 'left',
            margin: '0px -18px 100px -18px',
            marginMbl: '0px -18px 110px -18px',
            scalePrebidTags: true,
            scaleGptTags: true,
            controls: {
              volume: true
            }
        },
        dataConfig: {
            siteId: '26445',
            zoneIdMbl: 'ac1226c7-299d-4f4c-a60e-ee94f7211341',
            zoneId: '31026888-f4dc-499d-bb81-ad232266e2b8',
            passback: ``,
            passbackMbl: ``,
            delay: 0,
            delayMbl: 0,
            pid: 100548,
            restartAfter: 60,
            restartAfterMbl: 60,
            playerHandleWrappers: true,
            prebidOnGPT: false, prebidConsentRequired: false,
            loop: 0, useNewDataGiver: true, usePrebidTags: true, collectHTML: true
        },
        sync: [
            {"id":"FW",url:'https://ads.stickyadstv.com/user-matching?id=3474&_fw_gdpr={{GDPR}}&_fw_gdpr_consent={{GDPRCS}}'},
            {"id":"pubmatic",url:'https://image8.pubmatic.com/AdServer/ImgSync?p=165144&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&us_privacy={{USP}}&pu=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dpubmatic%26uid%3D%23PMUID'},
            {"id":"adf",url:'https://cm.adform.net/cookie?gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&redirect_url=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dadf%26uid%3D%24UID'},
            {"id":"LM",url:'https://csync.loopme.me/?pubid=13984&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&redirect=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3DLM%26uid%3D%7Bviewer_token%7D'},
            {"id":"xandr",url:'https://ib.adnxs.com/getuid?https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dxandr%26uid%3D%24UID&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}'},
            {"id":"ru",url:'https://pixel.rubiconproject.com/exchange/sync.php?p=vidoomy&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&us_privacy={{USP}}'},
            {"id":"sharethrough",url:'https://match.sharethrough.com/universal/v1?supply_id=YITCrBqH&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}'},
            {"id":"improve", url: 'https://ad.360yield.com/server_match?partner_id=2482&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&us_privacy={USP}&r=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dimprove%26uid%3D%7BPUB_USER_ID%7D'},
            {"id":"sovrn", url: 'https://ap.lijit.com/pixel?gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&redir=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3Dsovrn%26uid%3D$UID'},
            {"id":"CRITEO", url: 'https://ssp-sync.criteo.com/user-sync/redirect?profile=342&gdpr_consent={{GDPR_CONSENT}}&gdpr={{GDPR}}&redir=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3DCRITEO%26uid%3D%24%7BCRITEO_USER_ID%7D'},
            {"id":"openx",url:'https://u.openx.net/w/1.0/cm?id=494618d0-b835-4d3d-93be-66cc8aee5dfa&ph=ab6b10fd-46d7-4d48-84f5-3413472c1363&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&r=https%3A%2F%2Fa.vidoomy.com%2Fapi%2Frtbserver%2Fcookie%3Fi%3DOX%26uid%3D%7BOPENX_ID%7D'},
        ],
        pixels: [
            {event: 'ConsentStringObtainingComplete', url: 'https://x.bidswitch.net/sync?ssp=vidoomy&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}', type: 'image'},
            {event: 'ConsentStringObtainingComplete', url: 'https://ssbsync.smartadserver.com/api/sync?callerId=161&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}', type: 'iframe'},
            {event: 'ConsentStringObtainingComplete', url: 'https://onetag-sys.com/usync/?pubId=8e1b1cddf4eb779&gdpr={{GDPR}}&gdpr_consent={{GDPR_CONSENT}}&us_privacy={{USP}}', type: 'iframe'}
        ],
        
    }, top);
}
top.document.head.appendChild(s);

}, 3000);
