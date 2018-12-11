MAILAPI='https://evening-refuge-97533.herokuapp.com/api/v1/contacts';
TOKEN = 'AppDipre';


export default async function sendQuery(values) {
	console.log(values);
	fetch(MAILAPI, {
	  method: 'POST',
	  headers: {
	    'TOKEN': TOKEN,
	    'Content-Type': 'application/json',
	  },
	  body: JSON.stringify({
	    email: values.email,
	    subject: values.subject,
	    body: values.body,
	  }),
	}).catch((error) => {
      console.log(error);
    });;
}