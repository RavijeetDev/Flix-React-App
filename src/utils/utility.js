const log = console.log;

const debug = (tag, msg) => {
    if (tag !== "" && tag === "APP") {
        log(tag);
        log(msg);
    }
    // log(msg);
}

module.exports = { debug }