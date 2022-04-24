    // Requerimiento 1: Se necesita un modelo `User` para guardar la información de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`.
    // Solución: Crear una clase User y un constructor que guarde estos parámetros.
class User{
    constructor(id, username, name, bio, dateCreated, lastUpdate){
        this.id = id
        this.username = username
        this.name = name
        this.bio = bio
        // Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deberán ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
        // Solución: Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.
        this.dateCreated = new Date()
        this.lastUpdate = new Date()
    }
    // Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
    // Solución: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
    get getUsername(){
        return this.username
    }
    get getBio(){
        return this.bio
    }
    get getDateCreated(){
        return this.dateCreated
    }
    get getLastUpdated(){
        return this.lastUpdate
    }
    //Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
    //Solución: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
    set setUsername(newUsername){
        this.username = newUsername
    }
    set setBio(newBio){
        this.bio = newBio
    }
}

module.exports = User