function callHeroes() {
    const heroes = ['spiderman','wolverine','black panther','batman']
    function cryforHelp() {
        function scream() {
            for (let hero of heroes) {
                capitalizeHero = hero.charAt(0).toUpperCase() + hero.slice(1).toLowerCase();
                console.log(`Please help us! ${capitalizeHero}`)
            }
        }

        scream()
    }
    cryforHelp()
}