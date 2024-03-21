export const categories = {
        title: "Kategorier", // Etikett for innholdstypen
        name: "categories", // Programatisk navn, som vi bruker for å spørre etter innholdstypen senere
        type: "document", // Innholdstype
        fields: [ // Liste/array for å ta imot innhold 
            {
                title: "Kategoritittel", //Nøkkel
                name: "categorytitle", //Programatisk navn
                type: "string"
            },
            {
                title: "Kategorilink",
                name: "categoryurl",
                type: "slug",
                options: {
                    source: "categorytitle",
                    slugify: input => input.toLowercase().replace(/\s+/g, '-')
                }
            }
        ]
    }
// En slug er et såkalt nice-name, som er progrmatisk pene navn, som finnes i url-en for å fortelle noe om
// hva som skal skje i appen når den slug-en er aktiv. 
// Slugen gjør at alt innholdet på siden har sin helt unike url. Øker søkemotoroptimalisering.