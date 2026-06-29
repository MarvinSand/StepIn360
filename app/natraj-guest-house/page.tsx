import type { Metadata } from "next";
import NatrajView from "./NatrajView";

export const metadata: Metadata = {
  title: "Natraj Guest House — 360° Tour & Booking | StepIn360",
  description:
    "Take a 360° virtual tour of Natraj Guest House in Trincomalee, Sri Lanka, and book your stay directly via Booking.com, Airbnb or WhatsApp.",
  alternates: { canonical: "/natraj-guest-house" },
  openGraph: {
    title: "Natraj Guest House — 360° Tour & Booking",
    description: "Step inside Natraj Guest House in 360° and book your stay.",
    type: "website",
    images: ["/images/preview-natraj-guest-house.png"],
  },
};

export default function Page() {
  return <NatrajView />;
}
