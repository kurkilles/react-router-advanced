import { useParams } from "react-router-dom";

function EventDetailPage() {
    const params = useParams();

    return <h1>Details for item {params.id}!</h1>;
  }
  
  export default EventDetailPage;