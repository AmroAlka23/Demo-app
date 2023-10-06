var domain;

if(process.env.NODE_ENV==='production'){
 domain='http://server:3000/api';//online
}else{
 domain='http://localhost:3000/api';
}

export default domain;