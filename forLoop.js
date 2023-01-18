// melakukan bilangan ganjil
for (let index = 1; index <= 15; index++) {
    if (index % 2 == 1) {
        document.writeln(
            `<div>${index} : Ganjil </div>`
        );
    }
};

// melakukan bilangan genap
for (let genap = 0; genap <= 20; genap++) {
    if (genap % 2 == 0) {
        console.log(`${genap} adalah Bilangan Genap`);
    } else {
        console.log(`${genap} Bilangan Ganjil`);
    }
};