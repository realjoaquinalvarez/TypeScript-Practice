(() => {

    const fullName = ( firstName: string, ...restArgs: string[] ) => {

        return `${ firstName } ${ restArgs.join(' ') }`


    }

    const superman = fullName('Hola', 'Joseph', 'Kent')

    console.log({ superman })


})()