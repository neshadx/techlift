// loading.jsx
import Spinner from "@/components/shared/Spinner";
export default function Loading() {
  return (
    <div className="min-h-[50vh] grid place-items-center bg-white">
      <Spinner label="Loading dashboard..." />
    </div>
  );
}
