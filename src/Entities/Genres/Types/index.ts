interface IDat {
    id: number;
    name: string;
}

interface GenresState  {
    geners : IDat[],
}

export type { IDat,GenresState }