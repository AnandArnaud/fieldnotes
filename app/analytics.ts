// Heap is loaded in app/layout.tsx; it autocaptures clicks, form submissions and page views.
// The calls below add the few named events we rely on and identify the user.
type Heap = { track: (e: string, p?: Record<string, unknown>) => void; identify: (id: string) => void; addUserProperties: (p: Record<string, unknown>) => void };

function heap(): Heap | undefined {
  return (globalThis as { heap?: Heap }).heap;
}

export function identify(email: string) {
  heap()?.identify(email);
  heap()?.addUserProperties({ plan: "free" });
}

export function track(event: string, properties: Record<string, unknown> = {}) {
  heap()?.track(event, properties);
}
