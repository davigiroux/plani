import { useParams } from "react-router-dom";

export function BillPage() {
  const { id } = useParams<"id">();
  return <div>Bill {id}</div>;
}
