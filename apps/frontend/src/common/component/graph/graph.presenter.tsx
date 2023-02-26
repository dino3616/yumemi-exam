import Highcharts from 'highcharts';
import highchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsReact from 'highcharts-react-official';
import { ComponentPropsWithoutRef, forwardRef, ForwardRefExoticComponent } from 'react';

if (typeof window !== `undefined`) {
  highchartsAccessibility(Highcharts);
}

export type GraphProps = ComponentPropsWithoutRef<typeof HighchartsReact> & {
  options: Highcharts.Options;
};

export const Graph: ForwardRefExoticComponent<GraphProps> = forwardRef<HighchartsReact.RefObject, GraphProps>(({ ...props }, ref) => (
  <HighchartsReact ref={ref} highcharts={Highcharts} {...props} />
));

Graph.displayName = 'Graph';
