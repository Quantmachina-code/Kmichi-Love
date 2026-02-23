'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export function DeliveryBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-kimchi-red text-white text-sm py-2 px-4 text-center relative">
      <p className="font-medium">
        🚚 Doprava zdarma v Praze při objednávce nad 1&nbsp;000&nbsp;Kč
      </p>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-75 transition-opacity"
        aria-label="Zavřít banner"
      >
        <X size={16} />
      </button>
    </div>
  );
}
