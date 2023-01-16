import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { ThemeProvider, ThemeProviderProps } from '../ThemeProvider';

library.add(fab, fas, far);

export const wrapper: React.FC<ThemeProviderProps> = (props) => {
  return (
    <ThemeProvider
      {...props}
      initialWindowMetrics={{
        frame: { height: 0, width: 0, x: 0, y: 0 },
        insets: { bottom: 0, left: 0, right: 0, top: 0 },
      }}
    />
  );
};
