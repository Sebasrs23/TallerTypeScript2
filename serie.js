"use strict";

export var Serie = /** @class */ (function () {
    function Serie(id, //Atributos de la serie
    name, channel, seasons, descripcion, link, url_img) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.descripcion = descripcion;
        this.link = link;
        this.url_img = url_img;
    }
    return Serie;
}());