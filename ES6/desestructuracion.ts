(() => {


    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers:Avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    }

    const printAvenger = ( { ironman, ...resto }:Avengers ) => {
        console.log( ironman, resto )
    }    

    // printAvenger( avengers )



    const avengersArr: string[] = ['Cap. América', 'Ironman', 'Hulk']


    const [ , ironman, ] = avengersArr
    console.log()


})()