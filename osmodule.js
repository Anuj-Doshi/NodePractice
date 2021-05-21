const os = require('os')
const user = os.userInfo()
const uptime = os.uptime()

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(user);
console.log(currentOs)
console.log(uptime);