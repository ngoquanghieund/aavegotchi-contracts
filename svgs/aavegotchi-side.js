
// body
let leftBody = '<g class="gotchi-body"><g class="gotchi-primary"><path d="M43 14v-2h-2v-2h-2V8h-4V6h-6v2h-4v2h-2v2h-2v2h-1v41h3v-2h3v2h4v-2h4v2h4v-2h3v2h3V14z" /><path d="M41 14v-2h-2v-2h-4V8h-6v2h-4v2h-2v2h-2v39h2v-2h3v2h4v-2h4v2h4v-2h3v2h2V14z" /><path d="M42,51h-1v-2h-3v2h-4v-2h-4v2h-4v-2h-3v2h-2V14h2v-1h2v-2h4V9h6v2h4v2h2v2h1V51z" fill="#fff"/></g></g>'
// shadow
leftBody += '<g class="gotchi-shadow"><path d="M23 58v1h1v1h16v-1h1v-1z" opacity=".25"/></g>'
// cheek
leftBody += '<path class="gotchi-cheek" d="M22 32h2v2h-2z" fill="#f696c6"/>'

let leftHand = '<g class="gotchi-handsDown"><path d="M25 44h-1v-4h1v-1h2v-1h2v-1h1v-1h1v-1h2v7h-1v1h-1v1h-2v1h-4z" /><path d="M25 40h2v-1h2v-1h1v-1h1v-1h2v5h-1v1h-1v1h-2v1h-4z" fill="#fff"/><g ><path d="M33 40v1h-1v-1h1z"/><path d="M29,42v1h2v-1h1v-1h-1v1H29z"/><path d="M29 43v1h-4v-1h4z"/></g></g>'
leftHand += '<g class="gotchi-handsUp"><path d="M26 29v-1h4v1h1v2h1v2h1v1h1v1h1v2h-7v-1h-1v-1h-1v-2h-1v-4z" /><path d="M30 29v2h1v2h1v1h1v1h1v2h-5v-1h-1v-1h-1v-2h-1v-4z" fill="#fff"/><g ><path d="M30 37h-1v-1h1v1z"/><path d="M28,33h-1v2h1v1h1v-1h-1V33z"/><path d="M27 33h-1v-4h1v4z"/></g></g>'

// body
let rightBody = '<g class="gotchi-body"><g class="gotchi-primary"><path d="M21 14v-2h2v-2h2V8h4V6h6v2h4v2h2v2h2v2h1v41h-3v-2h-3v2h-4v-2h-4v2h-4v-2h-3v2h-3V14z" /><path d="M23 14v-2h2v-2h4V8h6v2h4v2h2v2h2v39h-2v-2h-3v2h-4v-2h-4v2h-4v-2h-3v2h-2V14z" /><path d="M22,15h1v-2h2v-2h4V9h6v2h4v2h2v1h2v37h-2v-2h-3v2h-4v-2h-4v2h-4v-2h-3v2h-1V15z" fill="#fff"/></g></g>'
// shadow
rightBody += '<g class="gotchi-shadow"><path d="M23 58v1h1v1h16v-1h1v-1z" opacity=".25"/></g>'
// cheek
rightBody += '<path class="gotchi-cheek" d="M40 32h2v2h-2z" fill="#f696c6"/>'

let rightHand = '<g class="gotchi-handsDown"><path d="M39 44h1v-4h-1v-1h-2v-1h-2v-1h-1v-1h-1v-1h-2v7h1v1h1v1h2v1h4z" /><path d="M39 40h-2v-1h-2v-1h-1v-1h-1v-1h-2v5h1v1h1v1h2v1h4z" fill="#fff"/><g ><path d="M32 40v1h-1v-1h1z"/><path d="M33 42v-1h-1v1h1v1h2v-1h-2z"/><path d="M39 43v1h-4v-1h4z"/></g></g>'
rightHand += '<g class="gotchi-handsUp"><path d="M38 29v-1h-4v1h-1v2h-1v2h-1v1h-1v1h-1v2h7v-1h1v-1h1v-2h1v-4z" /><path d="M34 29v2h-1v2h-1v1h-1v1h-1v2h5v-1h1v-1h1v-2h1v-4z" fill="#fff"/><g ><path d="M34,36h1v1h-1V36z"/><path d="M36 35h-1v1h1v-1h1v-2h-1v2z"/><path d="M37,29h1v4h-1V29z"/></g></g>'

let backBody = '<g class="gotchi-body"><g class="gotchi-primary"><path d="M21 12h2v-2h-4v2h1z"/><path d="M19 14v-2h-2v2h1zm6-4h2V8h-4v2h1z"/><path d="M29 8h8V6H27v2h1zm16 6h2v-2h-2v1z"/><path d="M48 14h-1v39h-2v2h4V14zm-11-4h4V8h-4v1z"/><path d="M41 12h4v-2h-4v1zM17 53V14h-2v41h4v-2h-1z"/><path d="M24 51h-5v2h5v-1z"/><path d="M27 53h-3v2h5v-2h-1zm18-2h-5v2h5v-1z"/><path d="M35 51h-6v2h6v-1z"/><path d="M38 53h-3v2h5v-2h-1z"/></g><g class="gotchi-secondary"><path d="M18 43v6h2v-1h2v1h2v2h-5v2h-2V14h2v1h-1v26z"/><path d="M27 51h-3v2h5v-2h-1zm11 0h-3v2h5v-2h-1z"/><path d="M35 49h-2v-1h-2v1h-2v2h6v-1zM25 11h2v-1h-4v1h1zm-4 2h2v-1h-4v1h1zm24 31v5h-1v-1h-2v1h-2v2h5v2h2V14h-2v29z"/><path d="M37 8H27v1h5v1h5V9zm8 4h-4v2h4v-1z"/><path d="M41 10h-4v2h4v-1z"/></g><path d="M44 14h-3v-2h-4v-2h-5V9h-5v2h-4v2h-4v2h-1v34h2v-1h2v1h2v2h5v-2h2v-1h2v1h2v2h5v-2h2v-1h2v1h1V14z" fill="#fff"/></g>'
// shadow
backBody += '<g class="gotchi-shadow"><path opacity=".25" d="M25 58H19v1h1v1h24V59h1V58h-1z" fill="#000"/></g>'

let handsDownOpen = '<g class="gotchi-handsDownOpen"><g class="gotchi-primary"><path d="M14 40h1v1h-1v-1zm-1-6h1v1h-1v-1z"/><path d="M14 33h1v1h-1v-1zm-2 2h1v1h-1v-1zm-5 3h1v4H7v-4zm5 3h2v1h-2v-1z"/><path d="M8 42h4v1H8v-1zm0-5h2v1H8v-1z"/><path d="M10,36h2v1h-2V36z"/></g><g class="gotchi-secondary"><path d="M14,39h1v1h-1V39z"/><path d="M12,40h2v1h-2V40z"/><path d="M8,41h4v1H8V41z"/></g><path d="M8,38v3h4v-1h2v-1h1v-5h-1v1h-1v1h-1v1h-2v1H8z" fill="#fff" /><g class="gotchi-primary"><path d="M49 40h1v1h-1v-1zm1-6h1v1h-1v-1z"/><path d="M49 33h1v1h-1v-1zm2 2h1v1h-1v-1zm5 3h1v4h-1v-4zm-6 3h2v1h-2v-1z"/><path d="M52 42h4v1h-4v-1zm2-5h2v1h-2v-1z"/><path d="M52,36h2v1h-2V36z"/></g><g class="gotchi-secondary"><path d="M49,39h1v1h-1V39z"/><path d="M50,40h2v1h-2V40z"/><path d="M52,41h4v1h-4V41z"/></g><path d="M54,38v-1h-2v-1h-1v-1h-1v-1h-1v5h1v1h2v1h4v-3H54z" fill="#fff" /></g>'
let handsUp = '<g class="gotchi-handsUp"><g class="gotchi-secondary"><path d="M50,38h1v1h-1V38z"/><path d="M49 39h1v1h-1v-1zm2-2h1v1h-1v-1z"/><path d="M52,36h2v1h-2V36z"/><path d="M54,35h2v1h-2V35z"/></g><path d="M52,32v1h-2v1h-1v5h1v-1h1v-1h1v-1h2v-1h2v-3H52z" fill="#fff"/><g class="gotchi-primary"><path d="M49,33h1v1h-1V33z"/><path d="M50 32h2v1h-2v-1zm0 7h1v1h-1v-1z"/><path d="M49 40h1v1h-1v-1zm2-2h1v1h-1v-1z"/><path d="M52 37h2v1h-2v-1zm0-6h4v1h-4v-1z"/><path d="M56,32h1v4h-1V32z"/><path d="M54,36h2v1h-2V36z"/></g><g class="gotchi-secondary"><path d="M13,38h1v1h-1V38z"/><path d="M14 39h1v1h-1v-1zm-2-2h1v1h-1v-1z"/><path d="M10,36h2v1h-2V36z"/><path d="M8,35h2v1H8V35z"/></g><path d="M8,32v3h2v1h2v1h1v1h1v1h1v-5h-1v-1h-2v-1H8z" fill="#fff"/><g class="gotchi-primary"><path d="M14,33h1v1h-1V33z"/><path d="M12 32h2v1h-2v-1zm1 7h1v1h-1v-1z"/><path d="M14 40h1v1h-1v-1zm-2-2h1v1h-1v-1z"/><path d="M10 37h2v1h-2v-1zm-2-6h4v1H8v-1z"/><path d="M7,32h1v4H7V32z"/><path d="M8,36h2v1H8V36z"/></g></g>'

let hands = handsDownOpen + handsUp

const aavegotchiSvgs = {
  left: ['', '', leftBody, leftHand],
  right: ['', '', rightBody, rightHand],
  back: ['', '', backBody, hands, '']
}

exports.aavegotchiSvgs = aavegotchiSvgs