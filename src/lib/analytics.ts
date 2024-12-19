// analytics.ts

// Extend the Window interface to include `gtag`
declare global {
  interface Window {
    gtag: (command: string, config: string, params: { page_path?: string; event_category?: string; event_label?: string; value?: number }) => void;
  }
}

// Google Analytics Configuration
export const GA_TRACKING_ID = 'GTM-MW4GF4J7'; // Replace with your actual GA tracking ID

// Google Analytics Functions
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};
