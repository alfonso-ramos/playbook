export default class Repo {
    constructor(name, author, languaje, numberOfCommits, stars, forks, issues_open, issues_close)
    {
        this.name = name
        this.author = author
        this.languaje = languaje
        this.numberOfCommits = numberOfCommits
        this.stars = stars
        this.forks = forks
        this.issues_open = issues_open
        this.issues_close = issues_close
    }
    // name: 'Launch X',
    // author: "carlogilmar",
    // languaje: "JavaScipt",
    // numberOfCommits: 100,
    // stars: 199,
    // forks: 299,
    // issues_open: 10,
    // issues_close: 10,

    getTotalIssues(){
        return this.issues_open + this.issues_close
    }
    getGeneralInfo(){
        return `This repository ${this.name} was created by ${this.author}`
    }
}


const repo1 = new Repo("Launch X","carlogilmar","JavaScipt", 100, 199, 299, 10, 10)

console.log("Nombre del repo: " + repo1.name)
console.log("Issues totales: " + repo1.getTotalIssues())
console.log(repo1.getGeneralInfo())