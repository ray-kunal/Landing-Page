import Logo from "@/components/logo";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        {/* Animated Logo */}
        <div className="animate-pulse">
          <Logo />
        </div>

        {/* Spinning Circle Animation */}
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    </div>
  );
}
