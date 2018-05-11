import axios from 'axios';

class ProjectModel {
	static all () {
		let request = axios.get("https://collaborate-4b360.firebaseio.com");
		return request;
	}
	static create(project) {
  		let request = axios.post("https://collaborate-4b360.firebaseio.com", project)
  		return request;
	}
	static delete(project){
  		let request = axios.delete(`https://collaborate-4b360.firebaseio.com${project._id}`)
  		return request;
	}
	static update(projectId, projectBody) {
    	let request = axios.put(`https://collaborate-4b360.firebaseio.com${projectId}`, {
        	body: projectBody
    	})
    	return request;
	}
}

export default ProjectModel;