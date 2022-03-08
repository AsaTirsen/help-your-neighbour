import { useRouter } from "next/router";
import NewRequestForm from "../components/requests/NewRequestForm";

function NewRequestPage() {
  const router = useRouter();
  async function addRequestHandler(enteredRequestData) {
    try {
      const response = await fetch("api/new-request", {
        method: "POST",
        body: JSON.stringify(enteredRequestData),
        headers: {
          "Content-type": "application/json",
        },
      });
      const data = await response.json();
    } finally {
      router.push("/");
    }
  }
  return (
    <section>
      <h1> Gör en ny förfrågan</h1>
      <NewRequestForm onAddRequest={addRequestHandler} />
    </section>
  );
}
export default NewRequestPage;
