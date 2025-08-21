import Spinner from "@/components/shared/Spinner";

export default function Loading() {
  return (
    <div className="min-h-[60vh] grid place-items-center bg-white">
      <Spinner label="Please wait, content is loading..." />
    </div>
  );
}
