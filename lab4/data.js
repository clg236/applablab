let cats = [
    {
        name: "Tabby",
        lovescatnip: true
    },
    {
        name: "Bob Ross",
        lovescatnip: false
    },
    {
        name: "Peaches",
        lovescatnip: true
    }
];

/**
 * Check if a cat loves catnip
 * @param {string} name 
 */
function lovesCatnip(name) {
    let cat = cats.filter(function (item) {
        return item.name == name;
    });

    return cat[0].lovescatnip;
}

console.log(lovesCatnip('Tabby'));
