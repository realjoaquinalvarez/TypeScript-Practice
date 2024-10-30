(() => {

    const fullName = ( firstName: string, lastName?: string, upper: boolean = false ): string => {
        
        if ( upper ) {

            return `${ firstName } ${ lastName || '----' } `.toUpperCase()
            
        } else {
            return `${ firstName } ${ lastName || '----' } `
        }
        
        
        // los valores falsy son: null, undefined, false, 0, NaN, y ''.

    }

    let noName: any;    

    const name = fullName( 'Tony', 'Stark', true )

    console.log({ name })


})()