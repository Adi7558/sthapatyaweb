import { JourneyPage } from "@/components/pages/JourneyPage";

export const dynamic = "force-static"; // or: export const revalidate = 3600;

export default function JourneyRoute() {
  return <JourneyPage />;
}
