import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Read from "../CRUD/Read";
import Card from "../UI/Card";

const Home = () => {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Read />
      <Card />
    </QueryClientProvider>
    </>
  );
};

export default Home;
