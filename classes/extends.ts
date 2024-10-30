(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!')
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName }`
        }

    }
    
    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super( name, realName )
            console.log('Contructor Xmen llamado')
        }

        getFullnameDesdeXmen() {
            console.log( super.getFullName() )
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`
        }

        set fullName( name: string ) {

            if ( name.length < 4 ){
                throw new Error('El nombre debe ser mayor a 4 letras')
            } 
            
            this.name = name
        }

    }

    // const wolverine = new Xmen('Wolverine', 'Logan', true)

    // console.log(wolverine)
    // wolverine.getFullnameDesdeXmen()

    
    
})()