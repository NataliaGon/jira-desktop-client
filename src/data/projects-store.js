'use strict'

const Store = require('electron-store')

class ProjectsStore extends Store {
  constructor (settings) {
    super(settings)
    this.projects= this.get('projects') || []
  }

  saveProject () {
    this.set('projects', this.projects)
    console.log('save electr store');
    return this
    
  }

  getProjects () {

    this.projects = this.get('projects') || []
    return this
  }

  addProjects (projects) {
    this.projects = [ ...this.projects, projects ]
    return this.saveProject()
  }

  deleteProjects (projects) {
    this.projects = this.projects.filter(t => t !== projects)
    return this.saveProject()
  }

}

module.exports = ProjectsStore 
