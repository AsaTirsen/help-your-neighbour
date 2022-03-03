import { useAmp } from "next/amp";
import NewRequestForm from "../components/requests/NewRequestForm";
const router = useRouter();


function NewRequestPage() {
  async function addRequestHandler(enteredRequestData) {
    console.log(enteredRequestData);
    const response = await fetch('api/new-request', {
      method: 'POST',
      body: JSON.stringify(enteredRequestData),
      headers: { 
        'Content-type': 'application/json'
      },
    },)
    const data = await response.json();
    router.push('/')
  } 


  return (
    <section>
      <h1> Gör en ny förfrågan</h1>
      <NewRequestForm onAddRequest={addRequestHandler}/>
      </section>
  )
}
export default NewRequestPage;