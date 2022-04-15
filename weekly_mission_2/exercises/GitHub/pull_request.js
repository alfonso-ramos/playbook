const pullRequest ={
    title: "LaunchX",
    branchName: "Dev",
    dateCreated: new Date(),
    status: "Open",
    repositoryNameAssociated: "LaunchX PR",

    getStatus: function(){
        return `Status: ${this.status}`
    },
    getTitleAndAuthor: function(){
        return `${this.title} by ${this.author}`
    }
}