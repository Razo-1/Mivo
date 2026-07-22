function searchTrailer(arr : any){
    console.log(arr);
    
    if(arr.length){
        let trailer = arr.find((elm :  any) => elm.type === 'Trailer');
        return trailer.key
    }
}

export { searchTrailer }