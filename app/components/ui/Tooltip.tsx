import * as Tooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  tooltip: React.ReactNode;
  children: React.ReactNode;
  sideOffset?: number;
  className?: string;
  arrowClassName?: string;
  tooltipStyle?: React.CSSProperties;
  position?: 'top' | 'bottom' | 'left' | 'right';
  maxWidth?: number;
  delay?: number;
}

const WithTooltip = ({
  tooltip,
  children,
  sideOffset = 5,
  className = '',
  arrowClassName = '',
  tooltipStyle = {},
  position = 'top',
  maxWidth = 250,
  delay = 0,
}: TooltipProps) => {
  return (
    <Tooltip.Root delayDuration={delay}>
      <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side={position}
          className={`
            z-[2000]
            px-2.5
            py-1.5
            max-h-[300px]
            select-none
            rounded-md
            bg-beiengai-elements-background-depth-3
            text-beiengai-elements-textPrimary
            text-sm
            leading-tight
            shadow-lg
            animate-in
            fade-in-0
            zoom-in-95
            data-[state=closed]:animate-out
            data-[state=closed]:fade-out-0
            data-[state=closed]:zoom-out-95
            ${className}
          `}
          sideOffset={sideOffset}
          style={{
            maxWidth,
            ...tooltipStyle,
          }}
        >
          <div className="break-words">{tooltip}</div>
          <Tooltip.Arrow
            className={`
              fill-beiengai-elements-background-depth-3
              ${arrowClassName}
            `}
            width={12}
            height={6}
          />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default WithTooltip;
