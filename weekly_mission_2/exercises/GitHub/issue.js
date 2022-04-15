import Repo from '../repo.js'


class issue extends Repo {
    constructor(title, repositoryNameAssociated, status, numberOfCommets,labels,author,dateCreated,lastUpdated){
        super(author)
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.status = status
        this.numberOfCommets = numberOfCommets
        this.labels = labels
        this.dateCreated = dateCreated
        this.lastUpdated = lastUpdated
    }


    // title: "Primer Issue de Repo",
    // repositoryNameAssociated: "Feedback",
    // status: "Open",
    // numberOfCommets: 10,
    // labels: ["Pregunta", "Aportación", "Error"],
    // author: "Alfonso-Ramos",
    // dateCreated: new Date(),
    // lastUpdated: new Date(),
}

const issue1 = new issue ("Primer Issue del Repo", "Feedback", "OPEN", 10, ["Pregunta", "Aportación", "Error"], this.author)
console.log(issue1)