interface IDat {
    id: number;
    name: string;
}

interface GenresState  {
    genres : Array<IDat>
}


export type { IDat,GenresState }