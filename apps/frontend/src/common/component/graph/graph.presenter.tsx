import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { ComponentPropsWithoutRef, forwardRef, ForwardRefExoticComponent } from 'react';

export type GraphProps = ComponentPropsWithoutRef<typeof HighchartsReact> & {
  options: Highcharts.Options;
};

export const Graph: ForwardRefExoticComponent<GraphProps> = forwardRef<HighchartsReact.RefObject, GraphProps>(({ ...props }, ref) => (
  <HighchartsReact ref={ref} highcharts={Highcharts} {...props} />
));

Graph.displayName = 'Graph';
