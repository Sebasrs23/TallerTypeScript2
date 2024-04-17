export class Serie {
    
    constructor(
        public id: number,      //Atributos de la serie
        public name: string,
        public channel: string,
        public seasons: number,
        public descripcion: string,
        public link: string,
        public url_img: string,
    ) { }
}