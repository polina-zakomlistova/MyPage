import Projects from 'entities/Projects/model/store/projects';

export default class RootStore {
    projects: Projects;
    localStorage: Storage;

    constructor() {
        this.projects = new Projects(this);
        this.localStorage = window.localStorage;
    }
}
