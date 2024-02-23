import { Random } from "../../components/Random";
import { RandomProvider } from "../../contexts/Random";

export default function Page() {
  return (
    <RandomProvider>
      <Random />
    </RandomProvider>
  );
}
