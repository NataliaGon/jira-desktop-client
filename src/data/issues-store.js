'use strict'

const Store = require('electron-store')

class IssuesStore extends Store {
  constructor (settings) {
    super(settings)
    this.issues= this.get('issues') || []
  }

  saveIssues () {
    this.set('issues', this.issues)
    return this
  }

  getIssues () {
    this.projects = this.get('issues') || []
    return this
  }

  addIssues(issues) {
    this.issues = [ ...this.issues, issues ]
    return this.saveIssues()
  }

  deleteIssues (issues) {
    this.issues = this.issues.filter(t => t !== issues)
    return this.saveIssues()
  }

}

module.exports = IssuesStore 
