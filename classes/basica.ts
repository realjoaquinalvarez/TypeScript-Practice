(() => {

    
    class Avenger {
        
        static avgAge: number = 35;

        static getAvgAge() {
            return this.name
        }

        constructor(
            private name: string,
            public team: string,
            public realName?: string,
        ){}

        bio() {
            return `${ this.name } (${ this.team })` 
        }

    }


    // const antman: Avenger = new Avenger('Antman', 'Capitan')
    // console.log( antman )
    
    // console.log( Avenger.getAvgAge() )
    
})()