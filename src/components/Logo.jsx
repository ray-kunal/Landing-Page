export default function Logo({ className = "" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Logo Icon */}
      <div className="relative h-8 w-8">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          {/* Outer circle with gradient */}
          <circle cx="16" cy="16" r="16" className="fill-primary" />

          {/* Letter S shape */}
          <path
            d="M16 8C12.6863 8 10 10.6863 10 14C10 15.6569 10.8954 17.1046 12.2426 17.8787C11.4696 18.6517 11 19.7565 11 21C11 23.7614 13.2386 26 16 26C18.7614 26 21 23.7614 21 21C21 19.3431 20.1046 17.8954 18.7574 17.1213C19.5304 16.3483 20 15.2435 20 14C20 10.6863 17.3137 8 16 8Z"
            className="fill-primary-foreground"
          />

          {/* Inner detail */}
          <circle cx="16" cy="14" r="3" className="fill-primary" />
          <circle cx="16" cy="21" r="3" className="fill-primary" />
        </svg>
      </div>

      {/* Logo Text */}
      <span className="text-xl font-bold">SaaSify</span>
    </div>
  );
}
