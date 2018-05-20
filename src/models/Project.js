import axios from 'axios';



class ProjectModel {
	static all () {
		let request = 
		axios.get("https://collaborate-now.firebaseio.com", 
		{headers: {'Access-Control-Allow-Origin': '*' , 
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
		'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
		}});
		return request;
	}
	static create(project) {
  		let request = axios.post("https://collaborate-now.firebaseio.com",
  		{headers: {'Access-Control-Allow-Origin': '*' , 
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept', 
		'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE'
		}},
  		project);
  		return request;
	}
	static delete(project){
  		let request = axios.delete(`https://collaborate-now.firebaseio.com${project._id}`);
  		return request;
	}
	static update(projectId, projectBody) {
    	let request = axios.put(`https://collaborate-now.firebaseio.com${projectId}`, {
        	body:projectBody
    	});
    	return request;
	}
}


export default ProjectModel;