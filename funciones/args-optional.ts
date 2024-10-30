(() => {

    const fullName = ( firstName: string, lastName?: string ): string => {
        
        // los valores falsy son: null, undefined, false, 0, NaN, y ''.
        return `${ firstName } ${ lastName || 'NoLastname' } `

    }

    let noName: any;    

    const name = fullName( 'Tony' )

    console.log({ name })


})()