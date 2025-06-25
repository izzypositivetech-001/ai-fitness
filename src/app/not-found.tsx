export default function NotFound() {
  return (
    <div className="h-screen flex items-center justify-center text-center p-4">
      <div>
        <h1 className="text-4xl font-bold mb-2">404 – Page Not Found</h1>
        <p className="text-muted-foreground text-lg">
          Sorry, the page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  );
}