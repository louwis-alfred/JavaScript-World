function yell(msg) {
    try {
    console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e)
        console.log('String only. Not Number')
    }
}