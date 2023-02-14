const Reset = "\x1b[0m";
const FgBlack = "\x1b[30m";
const BgGreen = "\x1b[42m";
const BgYellow = "\x1b[43m";
const BgBlue = "\x1b[44m";
const BgMagenta = "\x1b[45m";
const BgCyan = "\x1b[46m";


function blackyellow(key, msg) {
    const type = typeof msg
    if ( type === "object") {
        const x = key + " " + BgYellow + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = key + " " + BgYellow + FgBlack + msg + Reset;
        console.log( x )
    }
}
function yellow( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = BgYellow + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = BgYellow + FgBlack + msg + Reset;
        console.log( x )
    }
}
function green( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = BgGreen + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = BgGreen + FgBlack + msg + Reset;
        console.log( x )
    }
}


function cyan( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = BgCyan + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = BgCyan + FgBlack + msg + Reset;
        console.log( x )
    }
}

function blue( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = BgBlue + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = BgBlue + FgBlack + msg + Reset;
        console.log( x )
    }
}

function magenta( msg ) {
    const type = typeof msg
    if ( type === "object") {
        const x = BgMagenta + FgBlack + JSON.stringify(msg,null,2) + Reset;
        console.log( x )
    } else {
        const x = BgMagenta + FgBlack + msg + Reset;
        console.log( x )
    }
}
module.exports = { yellow,
    green,
    cyan,
    blue,
    magenta,
    blackyellow
};