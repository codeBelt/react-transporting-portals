import React, { ReactElement, ReactNode, useCallback, useContext, useEffect, useState } from 'react';
import { PortalType } from './portals.constants';

interface IPortalContext {
  portalMap: Map<PortalType, ReactNode>;
  addPortalItem: (portalType: PortalType, component: ReactNode) => void;
  removePortalItem: (portalType: PortalType) => void;
}

export const PortalContext = React.createContext<IPortalContext>(null);

export const PortalProvider: React.FC = (props) => {
  const [portalMap, setPortal] = useState<Map<PortalType, ReactNode>>(new Map());

  const addPortalItem = useCallback((portalType: PortalType, component: ReactNode) => {
    portalMap.set(portalType, component);

    const clonedMapWithNewItem = new Map(portalMap);

    setPortal(clonedMapWithNewItem);
  }, []);

  const removePortalItem = useCallback((portalType: PortalType) => {
    portalMap.delete(portalType);

    const clonedMapWithoutItem = new Map(portalMap);

    setPortal(clonedMapWithoutItem);
  }, []);

  return (
    <PortalContext.Provider value={{ portalMap, addPortalItem, removePortalItem }}>
      {props.children}
    </PortalContext.Provider>
  );
};

interface IProps {
  portalType: PortalType;
}

export const PortalIn: React.FC<IProps> = (props) => {
  const { addPortalItem, removePortalItem } = useContext(PortalContext);

  useEffect(() => {
    addPortalItem(props.portalType, props.children);

    return () => removePortalItem(props.portalType);
  }, [props.portalType, props.children]);

  return null;
};

export const PortalOut: React.FC<IProps> = (props) => {
  const { portalMap } = useContext(PortalContext);

  return (portalMap.get(props.portalType) as ReactElement) || null;
};
