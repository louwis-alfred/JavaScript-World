function validUsername(username) {
    return username.filter(n => n.length < 10);
}