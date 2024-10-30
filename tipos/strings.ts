(() => {

    const batman: string = 'Batman';
    const liternaVerde: string = 'Linterna Verde';
    const volcanNegro: string = `Linterna Verde`;

    console.log(` I'm ${ batman }`)
    console.log( batman.toUpperCase() );
    
    console.log( batman[10]?.toUpperCase() || 'No esta presente' )

})()