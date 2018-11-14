MAILAPI='https://pacific-reaches-89162.herokuapp.com/contacts';
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