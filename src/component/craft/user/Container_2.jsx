import { useNode } from "@craftjs/core";

export const Container_2 = ({ children, className, style }) => {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div ref={(ref) => connect(drag(ref))} className={className} style={style}>
      {children}
    </div>
  );
};
