import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BundleWatch — Detect Next.js Bundle Regressions",
  description: "Monitor Next.js bundle sizes across deployments. Get alerted when bundles grow unexpectedly. Integrates with GitHub and Vercel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6b167e1f-02ad-4df2-9af6-301556a8f287"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
